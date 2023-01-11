import styles from "../styles/homepage.module.css";
import MainBanner from "../components/MainBanner/MainBanner";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <MainBanner />
    </main>
  );
};

export default HomePage;
