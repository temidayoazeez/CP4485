import { connectToDB } from "./db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "St. John's";

  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing API key" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}

function validateRequest(body) {
  const city = typeof body === "string" ? body : body?.city || body?.name;

  if (!city || typeof city !== "string") {
    return { isValid: false, error: "Request body must include a city string or { city: '...' }." };
  }

  return { isValid: true };
}

function returnError() {
      return new Response(JSON.stringify({ error }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request) {
  const body = await request.json();
  const { isValid, error } = validateRequest(body);
  const city = typeof body === "string" ? body : body?.city || body?.name;

  if (!isValid) {
    return returnError();
  }

  const { db } = await connectToDB();
  const existingCity = await db.collection("cities").findOne({ city });

  if (existingCity) {
    return new Response(JSON.stringify({ message: "City already exists", city }), {
      status: 409,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = await db.collection("cities").insertOne({ city });

  return new Response(JSON.stringify({ message: "City added to dashboard", insertedId: result.insertedId }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(request) {
  const body = await request.json();
  const { isValid, error } = validateRequest(body);
  const city = typeof body === "string" ? body : body?.city || body?.name;

  if (!isValid) {
    return returnError();
  }

  const { db } = await connectToDB();
  const deleted = await db.collection("cities").deleteOne({ city });

  if (deleted.deletedCount === 0) {
    return new Response(JSON.stringify({ message: "City not found", city }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "City removed from dashboard", city }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}