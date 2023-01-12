import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleBanner from "../../components/ArticleBanner/ArticleBanner";
import styles from "../../styles/articlePage.module.css";

const ArticlePage = () => {
  const router = useRouter();
  const [article, setArticle] = useState({
    _id: new Object(),
    title: "",
    content: "",
    date: 0,
    category: "",
    menu: "",
    commentCount: 0,
    likeCount: 0,
    coverImage: "",
    previewContent: "",
  });

  useEffect(() => {
    if (!router.isReady) return;

    const getArticle = async () => {
      const response = await axios.get(
        `/api/article/${router.query.articleId}`
      );
      if (response.data.success) {
        setArticle(response.data.result);
      }
    };
    getArticle();
  }, [router.isReady, router.query.articleId]);

  return (
    <main className={styles.main}>
      <ArticleBanner article={article} />
      <section className={styles.article_section}>
        <article
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></article>
      </section>
    </main>
  );
};

export default ArticlePage;
