import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function getLatestArticles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return;
  try {
    const db = await connectToDatabase();
    const collection = db.collection("article");
    const result = await collection
      .find({})
      .sort({ date: -1 })
      .limit(6)
      .toArray();
    res.json({ success: true, result: result.sort((a, b) => b.date - a.date) });
  } catch (err) {
    res.json({ success: false });
  }
}

export default getLatestArticles;
