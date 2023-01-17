import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList/ArticleList";
import Loader from "../components/Loader/Loader";
import MainBanner from "../components/MainBanner/MainBanner";
import Paging from "../components/Paging/Paging";
import Article from "../model/article";
import styles from "../styles/menuPage.module.css";
import { findMenu } from "../util/staticDatas/menu";

const itemsPerPage = 6; // 페이지의 필요에 따라 유동적으로 변경

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
      <main className={`menu_main ${styles.main}`}>
        {pending && <Loader />}
        {!pending && (
          <>
            <MainBanner bannerData={bannerData} />
            <section className={styles.article_section}>
              {articleList.length > 0 && (
                <>
                  <ArticleList
                    articleList={articleList.slice(
                      (selectedPage - 1) * itemsPerPage,
                      selectedPage * itemsPerPage
                    )}
                    cardType="standard"
                  />
                  <Paging
                    listLength={articleList.length}
                    route={`${router.query.menu}`}
                    itemsPerPage={itemsPerPage}
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
