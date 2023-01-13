import { ObjectId } from "mongodb";
import { GetStaticPropsContext } from "next";
import ArticleBanner from "../../components/ArticleBanner/ArticleBanner";
import Article from "../../model/article";
import styles from "../../styles/articlePage.module.css";
import { connectToDatabase } from "../../util/mongodb";

const ArticlePage: React.FC<{ article: Article }> = ({ article }) => {
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
