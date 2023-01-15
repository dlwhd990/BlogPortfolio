import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleColumn from "../../components/ArticleColumn/ArticleColumn";
import Loader from "../../components/Loader/Loader";
import Paging from "../../components/Paging/Paging";
import Article from "../../model/article";
import styles from "../../styles/searchPage.module.css";
import searchTopImage from "../../public/images/me.png";

const itemsPerPage = 12; // 페이지의 필요에 따라 유동적으로 변경

const SearchPage = () => {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState(1);
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const getArticleList = async () => {
      const response = await axios.get(`/api/search/${router.query.query}`);
      if (response.data.success) {
        setArticleList(response.data.articleList);
      }
      setPending(false);
    };

    getArticleList();
  }, [router.isReady, router.query.query]);

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
      <main className={`search_page_main ${styles.main}`}>
        {pending && <Loader />}
        {!pending && (
          <>
            <div className={styles.top_banner}>
              <div className={styles.data_container}>
                <p
                  className={styles.query}
                >{`'${router.query.query}' 검색 결과`}</p>
                <p
                  className={styles.count}
                >{`검색 결과 ${articleList.length}건`}</p>
              </div>
              <Image src={searchTopImage} alt="배너 이미지" />
            </div>
            <section className={styles.article_section}>
              {articleList.length > 0 && (
                <>
                  {articleList
                    .slice(
                      (selectedPage - 1) * itemsPerPage,
                      selectedPage * itemsPerPage
                    )
                    .map((article) => (
                      <ArticleColumn
                        key={article._id.toString()}
                        article={article}
                      />
                    ))}
                  <Paging
                    listLength={articleList.length}
                    route={`search/${router.query.query}`}
                    itemsPerPage={itemsPerPage}
                  />
                </>
              )}
              {articleList.length === 0 && (
                <p className={styles.nothing_container}>
                  😂 검색 결과가 없습니다!
                </p>
              )}
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default SearchPage;
