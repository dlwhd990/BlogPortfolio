import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleColumn from "../components/ArticleColumn/ArticleColumn";
import MainBanner from "../components/MainBanner/MainBanner";
import Article from "../model/article";
import styles from "../styles/menuPage.module.css";
import { findMenu } from "../util/staticDatas/menu";

const MenuPage = () => {
  const router = useRouter();
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [bannerData, setBannerData] = useState({
    subTop: "",
    title: "",
    subBottom: "",
    isBlog: true,
  });

  useEffect(() => {
    if (!router.isReady) return;
    let q = router.query.menu;
    if (typeof q !== "string") {
      q = "";
    }
    const menuData = findMenu(q);
    setBannerData({
      subTop: menuData.category,
      title: menuData.title,
      subBottom: menuData.desc,
      isBlog: true,
    });

    const getArticleList = async () => {
      const response = await axios.get(`/api/menu/${menuData.title}`);
      console.log(response);
      if (response.data.success) {
        setArticleList(response.data.result);
      }
    };

    getArticleList();
  }, [router.isReady, router.query.menu]);

  return (
    <main className={styles.main}>
      <MainBanner bannerData={bannerData} />
      <section className={styles.article_section}>
        {articleList.length > 0 &&
          articleList.map((article) => (
            <ArticleColumn key={article._id.toString()} article={article} />
          ))}
        {articleList.length === 0 && (
          <p className={styles.nothing_container}>
            😂 아직 작성한 글이 없어요!
          </p>
        )}
      </section>
    </main>
  );
};

export default MenuPage;
