import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function upload(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("article");

    if (req.method === "POST") {
      const response = await collection.insertOne(req.body);

      res.status(200).json({ success: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}

export default upload;
