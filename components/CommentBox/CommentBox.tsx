import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { popupToast } from "../../store/toast";
import styles from "./CommentBox.module.css";

const CommentBox: React.FC<{
  likeCount: number;
  articleId: string;
  loadCommentList: () => void;
}> = ({ likeCount, articleId, loadCommentList }) => {
  const dispatch = useAppDispatch();
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
      dispatch(popupToast("좋아요 감사합니다!"));
    }
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.length === 0 || content.length > 500) {
      dispatch(popupToast("한 글자 이상 입력해주세요!"));
      return;
    }
    const response = await axios.post(`/api/comment/${articleId}`, { content });
    console.log(response.data);
    if (response.data.success) {
      dispatch(popupToast("댓글 감사합니다!"));
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
