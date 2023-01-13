import { useEffect, useRef, useState } from "react";
import Comment from "../../model/comment";
import styles from "./CommentCard.module.css";

const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => {
  const introRef = useRef<HTMLDivElement>(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (introRef.current) {
      observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIntersecting(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(introRef.current as Element);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <div
      className={`comment_card ${styles.card} ${
        intersecting ? `${styles.on}` : `${styles.off}`
      }`}
      ref={introRef}
    >
      <p className={styles.author}>비회원</p>
      <p className={styles.content}>{comment.content}</p>
      <p className={styles.date}>
        {new Date(comment.date).toISOString().slice(0, 10)}
      </p>
    </div>
  );
};

export default CommentCard;
