import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function likeAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;

  try {
    let { articleId } = req.query;
    if (typeof articleId !== "string") {
      articleId = "";
    }
    const db = await connectToDatabase();
    const collection = db.collection("article");
    await collection.findOneAndUpdate(
      { _id: new ObjectId(articleId) },
      { $inc: { likeCount: 1 } }
    );
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
}

export default likeAPI;
