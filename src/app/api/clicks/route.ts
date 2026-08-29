import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export async function GET() {
  const collection = await getClicksCollection();
  const docs = await collection.find().toArray();

  const counts = Object.fromEntries(
    docs.map((doc) => [doc.linkId, doc.count]),
  );

  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  const { id } = await request.json();

  if (typeof id !== "string" || !id) {
    return NextResponse.json({ error: "id가 필요합니다." }, { status: 400 });
  }

  const collection = await getClicksCollection();
  const result = await collection.findOneAndUpdate(
    { linkId: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ id, count: result?.count ?? 1 });
}
