import Image from "next/image";
import styles from "./MainBanner.module.css";
// import bannerImage from "../../public/images/pixel-jeff-divoom.gif";
// import bannerImage from "../../public/images/divoom.mp4";
import BannerData from "../../model/bannerData";

const MainBanner: React.FC<{
  bannerData: BannerData;
}> = ({ bannerData }) => {
  const { subTop, title, subBottom, isBlog } = bannerData;

  return (
    <div className={styles.main_banner}>
      <div className={`${styles.data_container} ${isBlog && `${styles.blog}`}`}>
        <h3>{subTop}</h3>
        <h1>{title}</h1>
        <h2>{subBottom}</h2>
      </div>
      {/* <Image src={bannerImage} alt="배경 이미지" /> */}
      <video src="/images/divoom.mp4" autoPlay muted loop />
    </div>
  );
};

export default MainBanner;
