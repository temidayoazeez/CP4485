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
