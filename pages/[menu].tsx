import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleColumn from "../components/ArticleColumn/ArticleColumn";
import MainBanner from "../components/MainBanner/MainBanner";
import styles from "../styles/menuPage.module.css";
import { findMenu } from "../util/staticDatas/menu";

const MenuPage = () => {
  const router = useRouter();
  const [bannerData, setBannerData] = useState({
    subTop: "",
    title: "",
    subBottom: "",
    isBlog: true,
  });

  useEffect(() => {
    if (!router.isReady) return;
    const menuData = findMenu(router.query.menu as string);
    setBannerData({
      subTop: menuData.category,
      title: menuData.title,
      subBottom: menuData.desc,
      isBlog: true,
    });
  }, [router.isReady, router.query.menu]);

  return (
    <main className={styles.main}>
      <MainBanner bannerData={bannerData} />
      <section className={styles.article_section}>
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
        <ArticleColumn />
      </section>
    </main>
  );
};

export default MenuPage;
