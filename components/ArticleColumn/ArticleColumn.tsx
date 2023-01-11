import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ArticleColumn.module.css";

const ArticleColumn = () => {
  return (
    <div className={styles.item}>
      <img src="/images/d.gif" alt="게시글_이미지" />
      <div className={styles.data_container}>
        <h2>자바스크립트의 동작 원리 - 1</h2>
        <p className={styles.content}>
          자바스크립트(JavaScript)가 언어로서 지닌 특징에 대해 알아보겠습니다.
          이어서 자바스크립트로 무엇을 할 수 있을지, 다른 기술들이
          자바스크립트를 어떻게 활용하고 있는지도 이야기해
          보겠습니다.정의자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’
          만들어진 프로그래밍 언어입니다. 자바스크립트로 작성한 프로그램을
          스크립트(script) 라고 부릅니다. 스크립트는 웹페이지의 HTML 안에 작성할
          수 있는데, 웹페이지를 불러올 때 스크립트가 자동으로 실행됩니다.
        </p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.date}>2023-01-11</p>
        <div className={styles.button_container}>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faHeart} className={styles.like_icon} />
            <p>3</p>
          </button>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faComment} className={styles.comment_icon} />
            <p>7</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleColumn;
