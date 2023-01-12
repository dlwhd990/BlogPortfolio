import styles from "./ArticleBanner.module.css";
import bannerImage from "../../public/images/abc.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPen } from "@fortawesome/free-solid-svg-icons";

const ArticleBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.data_container}>
        <h1>자바스크립트의 동작 원리 - 1</h1>
        <p>
          <span>
            <FontAwesomeIcon icon={faPen} />
            이종혁
          </span>
          |
          <span>
            <FontAwesomeIcon icon={faCalendar} /> 2021-01-11
          </span>
        </p>
      </div>
      <Image src={bannerImage} alt="배경 이미지" />
    </div>
  );
};

export default ArticleBanner;
