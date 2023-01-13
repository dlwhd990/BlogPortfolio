import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function commentAPI(req: NextApiRequest, res: NextApiResponse) {
  try {
    let { articleId } = req.query;
    if (typeof articleId !== "string") {
      articleId = "";
    }
    const { content } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("comment");
    const articleCollection = db.collection("article");
    if (req.method === "POST") {
      const commentPromise = collection.insertOne({
        articleId,
        content,
        date: new Date().getTime() + 60 * 60 * 9 * 1000,
      });

      const articlePromise = articleCollection.findOneAndUpdate(
        { _id: new ObjectId(articleId) },
        { $inc: { commentCount: 1 } }
      );

      await commentPromise;
      await articlePromise;
      // 병렬적 실행 + 둘 다 완료 되어야 response 보내도록 한다 (완료 후 다시 load 하기 때문)

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
