import Image from "next/image";
import styles from "./MainBanner.module.css";
import bannerImage from "../../public/images/ff.gif";

const MainBanner = () => {
  return (
    <div className={styles.main_banner}>
      <div className={styles.data_container}>
        <h3>BLOG & PORTFOLIO</h3>
        <h1>LEE JONG HYUK</h1>
        <h2>Front-End Developer</h2>
      </div>
      <Image src={bannerImage} alt="배경 이미지" />
    </div>
  );
};

export default MainBanner;
