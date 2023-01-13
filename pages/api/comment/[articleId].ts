import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function commentAPI(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { articleId } = req.query;
    const { content } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("comment");
    if (req.method === "POST") {
      await collection.insertOne({
        articleId,
        content,
        date: new Date().getTime() + 60 * 60 * 9 * 1000,
      });
      res.json({ success: true });
    }

    if (req.method === "GET") {
      const result = await collection.find({ articleId }).toArray();
      res.json({ success: true, commentList: result });
    }
  } catch (err) {
    res.json({ success: false });
  }
}

export default commentAPI;
