import axios from "axios";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ArticleColumn from "../components/ArticleColumn/ArticleColumn";
import Loader from "../components/Loader/Loader";
import MainBanner from "../components/MainBanner/MainBanner";
import Paging from "../components/Paging/Paging";
import Article from "../model/article";
import styles from "../styles/menuPage.module.css";
import { findMenu } from "../util/staticDatas/menu";

const MenuPage = () => {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState(1);
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [pending, setPending] = useState(true);
  const [bannerData, setBannerData] = useState({
    subTop: "",
    title: "",
    subBottom: "",
    isBlog: true,
  });

  const seoData = {
    title: `이종혁의 블로그 - ${router.query.menu}`,
    description: `${router.query.menu}에 대해 공부합니다.`,
    canonical: `https://blog-portfolio-theta.vercel.app/${router.query.menu}`,
  };

  useEffect(() => {
    if (!router.isReady) return;

    let q = router.query.menu;

    if (typeof q !== "string") {
      q = "";
    }

    const menuData = findMenu(q);

    setPending(true);
    setBannerData({
      subTop: menuData.category,
      title: menuData.title,
      subBottom: menuData.desc,
      isBlog: true,
    });

    const getArticleList = async () => {
      const response = await axios.get(`/api/menu/${menuData.title}`);
      if (response.data.success) {
        setArticleList(response.data.result);
      }
      setPending(false);
    };

    getArticleList();
  }, [router.isReady, router.query.menu]);

  useEffect(() => {
    let page;

    if (isNaN(Number(router.query.page))) {
      page = 1;
    } else {
      page = Number(router.query.page);
    }
    setSelectedPage(page);
  }, [router.query.page]);

  return (
    <>
      <main className={styles.main}>
        {pending && <Loader />}
        {!pending && (
          <>
            <NextSeo {...seoData} />
            <MainBanner bannerData={bannerData} />
            <section className={styles.article_section}>
              {articleList.length > 0 && (
                <>
                  {articleList
                    .slice((selectedPage - 1) * 12, selectedPage * 12)
                    .map((article) => (
                      <ArticleColumn
                        key={article._id.toString()}
                        article={article}
                      />
                    ))}
                  <Paging
                    listLength={articleList.length}
                    selectedPage={selectedPage}
                    route={
                      typeof router.query.menu === "string"
                        ? router.query.menu
                        : ""
                    }
                  />
                </>
              )}
              {articleList.length === 0 && (
                <p className={styles.nothing_container}>
                  😂 아직 작성한 글이 없어요!
                </p>
              )}
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default MenuPage;
