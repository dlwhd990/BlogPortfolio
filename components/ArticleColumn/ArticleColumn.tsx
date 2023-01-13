import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Article from "../../model/article";
import styles from "./ArticleColumn.module.css";

const ArticleColumn: React.FC<{ article: Article }> = ({ article }) => {
  const { _id, coverImage, previewContent, date, likeCount, commentCount } =
    article;
  return (
    <Link href={`/article/${_id.toString()}`}>
      <div className={styles.item}>
        <div className={styles.image_container}>
          <img src={coverImage} alt="게시글_이미지" loading="lazy" />
        </div>
        <div className={styles.data_container}>
          <h2>{article.title}</h2>
          <p className={styles.content}>{previewContent}</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.date}>
            {new Date(date).toISOString().slice(0, 10)}
          </p>
          <div className={styles.button_container}>
            <button className={styles.button}>
              <FontAwesomeIcon icon={faHeart} className={styles.like_icon} />
              <p>{likeCount}</p>
            </button>
            <button className={styles.button}>
              <FontAwesomeIcon
                icon={faComment}
                className={styles.comment_icon}
              />
              <p>{commentCount}</p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleColumn;
