import styles from "./ArticleBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPen } from "@fortawesome/free-solid-svg-icons";
import Article from "../../model/article";

const ArticleBanner: React.FC<{ article: Article }> = ({ article }) => {
  const { title, date, coverImage } = article;
  return (
    <div className={styles.banner}>
      <div className={styles.data_container}>
        <h1>{title}</h1>
        <p>
          <span>
            <FontAwesomeIcon icon={faPen} />
            이종혁
          </span>
          |
          <span>
            <FontAwesomeIcon icon={faCalendar} />{" "}
            {new Date(date).toISOString().slice(0, 10)}
          </span>
        </p>
      </div>
      <img src={coverImage} alt="배경 이미지" />
    </div>
  );
};

export default ArticleBanner;
