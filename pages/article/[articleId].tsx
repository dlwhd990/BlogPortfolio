import axios from "axios";
import { ObjectId } from "mongodb";
import { GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";
import ArticleBanner from "../../components/ArticleBanner/ArticleBanner";
import CommentBox from "../../components/CommentBox/CommentBox";
import CommentCard from "../../components/CommentCard/CommentCard";
import Article from "../../model/article";
import Comment from "../../model/comment";
import styles from "../../styles/articlePage.module.css";
import { connectToDatabase } from "../../util/mongodb";

const ArticlePage: React.FC<{ article: Article }> = ({ article }) => {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const loadCommentList = async () => {
    const response = await axios.get(`/api/comment/${article._id.toString()}`);

    const sortedList = response.data.commentList.sort(
      (a: Comment, b: Comment) => b.date - a.date
    );
    if (response.data.success) {
      setCommentList(sortedList);
    }
  };

  useEffect(() => {
    const loadCommentList = async () => {
      const response = await axios.get(
        `/api/comment/${article._id.toString()}`
      );

      const sortedList = response.data.commentList.sort(
        (a: Comment, b: Comment) => b.date - a.date
      );
      if (response.data.success) {
        setCommentList(sortedList);
      }
    };

    loadCommentList();
  }, [article]);

  return (
    <main className={styles.main}>
      {article && (
        <>
          <ArticleBanner article={article} />
          <section className={styles.article_section}>
            <article
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></article>
            {/* <div className={styles.button_container}>
              <button>
                <FontAwesomeIcon icon={faHeart} /> 142
              </button>
            </div> */}
            <section className={styles.comment_section}>
              <p
                className={styles.comment_count}
              >{`${commentList.length}개의 댓글`}</p>
              <CommentBox
                likeCount={article.likeCount}
                articleId={article._id.toString()}
                loadCommentList={loadCommentList}
              />
              {commentList.map((comment) => (
                <CommentCard key={comment._id.toString()} comment={comment} />
              ))}
            </section>
          </section>
        </>
      )}
    </main>
  );
};

export async function getStaticPaths() {
  const db = await connectToDatabase();
  const collection = db.collection("article");
  const result = await collection.distinct("_id", {});

  const paths = result.map((item) => {
    return {
      params: {
        articleId: item.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const db = await connectToDatabase();
  const collection = db.collection("article");
  const article = await collection.findOne({
    _id: new ObjectId(
      typeof context?.params?.articleId === "string"
        ? context?.params?.articleId
        : ""
    ),
  });

  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
    },
  };
}

export default ArticlePage;
