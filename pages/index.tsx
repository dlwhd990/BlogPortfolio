import styles from "../styles/homepage.module.css";
import MainBanner from "../components/MainBanner/MainBanner";
import HomeSection from "../components/HomeSection/HomeSection";
import ArticleList from "../components/ArticleList/ArticleList";
import { useEffect, useState } from "react";
import Article from "../model/article";
import axios from "axios";

const bannerData = {
  subTop: "BLOG & PORTFOLIO",
  title: "LEE JONG HYUK",
  subBottom: "Front-End Developer",
  isBlog: false,
};

const HomePage = () => {
  const [pending, setPending] = useState(false);
  const [articleList, setArticleList] = useState<Article[]>([]);
  useEffect(() => {
    const getArticleList = async () => {
      const response = await axios.get("/api/article/latest");
      if (response.data.success) {
        setArticleList(response.data.result);
        setPending(true);
      }
    };
    getArticleList();
  }, []);

  return (
    <main className={`homepage ${styles.main}`}>
      {pending && (
        <>
          <MainBanner bannerData={bannerData} />
          <HomeSection title="최신글" subtitle="따끈따끈한 글입니다.">
            <ArticleList articleList={articleList} cardType="mini" />
          </HomeSection>
        </>
      )}
    </main>
  );
};

export default HomePage;
