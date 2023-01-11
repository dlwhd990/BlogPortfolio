import Image from "next/image";
import styles from "./MainBanner.module.css";
import homeBannerImage from "../../public/images/ff.gif";
import blogBannerImage from "../../public/images/11_1041uuu-2.gif";
import BannerData from "../../model/bannerData";

const MainBanner: React.FC<{
  bannerData: BannerData;
}> = ({ bannerData }) => {
  const { subTop, title, subBottom, isBlog } = bannerData;
  const bannerImage = isBlog ? blogBannerImage : homeBannerImage;

  return (
    <div className={styles.main_banner}>
      <div className={`${styles.data_container} ${isBlog && `${styles.blog}`}`}>
        <h3>{subTop}</h3>
        <h1>{title}</h1>
        <h2>{subBottom}</h2>
      </div>
      <Image src={bannerImage} alt="배경 이미지" />
    </div>
  );
};

export default MainBanner;
