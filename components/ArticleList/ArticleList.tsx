import Article from "../../model/article";
import ArticleMini from "../ArticleCards/ArticleMini/ArticleMini";
import ArticleStandard from "../ArticleCards/ArticleStandard/ArticleStandard";
import styles from "./ArticleList.module.css";

interface ArticleListProps {
  articleList: Article[];
  cardType: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articleList, cardType }) => {
  return (
    <div className={styles.article_list}>
      {articleList.map((article) => (
        <ArticleStandard key={article._id.toString()} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
