import Comment from "../../model/comment";
import styles from "./CommentCard.module.css";

const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className={styles.card}>
      <p className={styles.author}>비회원</p>
      <p className={styles.content}>{comment.content}</p>
      <p className={styles.date}>
        {new Date(comment.date).toISOString().slice(0, 10)}
      </p>
    </div>
  );
};

export default CommentCard;
