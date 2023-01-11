import styles from "../styles/homepage.module.css";
import MainBanner from "../components/MainBanner/MainBanner";

const bannerData = {
  subTop: "BLOG & PORTFOLIO",
  title: "LEE JONG HYUK",
  subBottom: "Front-End Developer",
  isBlog: false,
};

const HomePage = () => {
  return (
    <main className={styles.main}>
      <MainBanner bannerData={bannerData} />
    </main>
  );
};

export default HomePage;
