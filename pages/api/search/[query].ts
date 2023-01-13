import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function searchAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  try {
    const db = await connectToDatabase();
    const collection = db.collection("article");
    const response = await collection
      .find({
        title: { $regex: req.query.query },
      })
      .toArray();

    response.sort((a, b) => b.date - a.date);
    res.json({ success: true, articleList: response });
  } catch (err) {
    res.json({ success: false });
  }
}

export default searchAPI;
