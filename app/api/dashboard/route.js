import {NextResponse} from "next/server";
import {connectToDB} from "@/app/api/db";

export async function GET(request) {
    const {db} = await connectToDB();
    const cities = await db.collection('cities').find().toArray();

    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    if (!apiKey) {
        return new Response(JSON.stringify({ error: "Missing API key" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }

    let cityNames = {};
    for (const city of cities) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.city)}&units=metric&appid=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        cityNames[city.city] = data;
    }

    return NextResponse.json(cityNames);
}
