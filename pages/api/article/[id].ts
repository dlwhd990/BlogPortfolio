import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function getArticleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return;

  try {
    let { id } = req.query;
    if (typeof id !== "string") {
      id = "";
    }
    const db = await connectToDatabase();
    const collection = db.collection("article");
    const result = await collection.findOne({ _id: new ObjectId(id) });

    res.json({ success: true, result });
  } catch (err) {
    res.json({ success: false });
  }
}

export default getArticleById;
