import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function getArticleListByMenuId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { menuTitle } = req.query;
    const db = await connectToDatabase();
    const collection = db.collection("article");
    const result = await collection.find({ menu: menuTitle }).toArray();
    res.json({ success: true, result });
  } catch (err) {
    res.json({ success: false });
  }
}

export default getArticleListByMenuId;
