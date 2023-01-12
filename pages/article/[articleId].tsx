import ArticleBanner from "../../components/ArticleBanner/ArticleBanner";
import styles from "../../styles/articlePage.module.css";
import { dummyArticle } from "../../util/dummyArticle";

const ArticlePage = () => {
  return (
    <main className={styles.main}>
      <ArticleBanner />
      <section className={styles.article_section}>
        <article dangerouslySetInnerHTML={{ __html: dummyArticle }}></article>
      </section>
    </main>
  );
};

export default ArticlePage;
