import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET() {
  if (!uri) {
    return Response.json({ error: "Missing MONGODB_URI" }, { status: 500 });
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("weather_app");
    const collection = db.collection("samples");

    const docs = await collection.find({}).limit(5).toArray();
    return Response.json(docs);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}