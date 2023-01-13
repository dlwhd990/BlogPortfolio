import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export async function upload(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("article");

    if (req.method === "POST") {
      const response = await collection.insertOne({
        title: "타입스크립트는 왜 쓸까?",
        content: "3213",
        date: 1673488896082,
        category: "Programming",
        menuId: 0,
        menu: "TypeScript",
        commentCount: 0,
        likeCount: 0,
        coverImage: "/images/ff.jpg",
        previewContent:
          "\n타입스크립트(JavaScript)가 언어로서 지닌 특징에 대해 알아보겠습니다. 이어서 자바스크립트로 무엇을 할 수 있을지, 다른 기술들이 자바스크립트를 어떻게 활용하고 있는지도 이야기해 보겠습니다.정의자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다. 자바스크립트로 작성한 프로그램을 스크립트(script) 라고 부릅니다. 스크립트는 웹페이지의 HTML 안에 작성할 수 있는데, 웹페이지를 불러올 때 스크립트가 자동으로 실행됩니다.\n",
      });

      res.status(200).json({ success: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}

export default upload;
