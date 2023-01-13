import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import styles from "./CommentBox.module.css";

const CommentBox: React.FC<{
  likeCount: number;
  articleId: string;
  loadCommentList: () => void;
}> = ({ likeCount, articleId, loadCommentList }) => {
  const [newLikeCount, setNewLikeCount] = useState(0);
  const [content, setContent] = useState("");

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onLikeClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post(`/api/like/${articleId}`);
    if (response.data.success) {
      setNewLikeCount((state) => state + 1);
    }
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    // 나중에 alert 추가해서 알림 띄우기 (안된다고)
    if (content.length === 0 || content.length > 500) return;
    const response = await axios.post(`/api/comment/${articleId}`, { content });
    console.log(response.data);
    if (response.data.success) {
      loadCommentList();
      setContent("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.comment_form}>
      <textarea
        value={content}
        onChange={changeContent}
        spellCheck="false"
        placeholder="댓글을 입력해주세요"
      />
      <div className={styles.button_container}>
        <button
          type="button"
          className={styles.like}
          onClick={onLikeClickHandler}
        >
          <FontAwesomeIcon icon={faHeart} /> {likeCount + newLikeCount}
        </button>
        <button type="submit" className={styles.submit}>
          <FontAwesomeIcon icon={faPaperPlane} className={styles.submit_icon} />
          등록
        </button>
      </div>
    </form>
  );
};

export default CommentBox;
