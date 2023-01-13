import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Paging.module.css";

const Paging: React.FC<{
  listLength: number;
  selectedPage: number;
  route: string;
}> = ({ listLength, selectedPage, route }) => {
  const router = useRouter();
  const [pageDivision, setPageDivision] = useState(0);

  const selectPage = (e: React.MouseEvent) => {
    const eventTarget = e.target as HTMLElement; //tagName 타입에러
    if (eventTarget.tagName != "LI") return;
    if (eventTarget.innerHTML == router.query.page) return;
    router.push(`/${route}?page=${eventTarget.innerHTML}`);
  };

  const changeDivision = (direction: boolean) => {
    // true = left / false = right
    if (direction) {
      if (pageDivision === 0) {
        router.push(`/${route}?page=1`);
        return;
      }
      const prevDivision = pageDivision;
      router.push(`/${route}?page=${(prevDivision - 1) * 5 + 5}`);
      setPageDivision((state) => state - 1);
    } else {
      if ((pageDivision + 1) * 60 >= listLength) return;
      const prevDivision = pageDivision;
      router.push(`/${route}?page=${(prevDivision + 1) * 5 + 1}`);
      setPageDivision((state) => state + 1);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    let page;
    if (isNaN(Number(router.query.page))) {
      page = 1;
    } else {
      page = Number(router.query.page);
    }

    setPageDivision(Math.floor((page - 1) / 5));
  }, [router]);

  return (
    <div className={styles.paging_container}>
      <button>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={styles.left}
          onClick={() => changeDivision(true)}
        />
      </button>
      <ul className={styles.paging_list} onClick={selectPage}>
        {pageDivision * 5 * 12 < listLength && ( //
          <li
            className={`${
              selectedPage === pageDivision * 5 + 1 ? `${styles.selected}` : ""
            }`}
          >
            {pageDivision * 5 + 1}
          </li>
        )}
        {(pageDivision * 5 + 1) * 12 < listLength && (
          <li
            className={`${
              selectedPage === pageDivision * 5 + 2 ? `${styles.selected}` : ""
            }`}
          >
            {pageDivision * 5 + 2}
          </li>
        )}
        {(pageDivision * 5 + 2) * 12 < listLength && (
          <li
            className={`${
              selectedPage === pageDivision * 5 + 3 ? `${styles.selected}` : ""
            }`}
          >
            {pageDivision * 5 + 3}
          </li>
        )}
        {(pageDivision * 5 + 3) * 12 < listLength && (
          <li
            className={`${
              selectedPage === pageDivision * 5 + 4 ? `${styles.selected}` : ""
            }`}
          >
            {pageDivision * 5 + 4}
          </li>
        )}
        {(pageDivision * 5 + 4) * 12 < listLength && (
          <li
            className={`${
              selectedPage === pageDivision * 5 + 5 ? `${styles.selected}` : ""
            }`}
          >
            {pageDivision * 5 + 5}
          </li>
        )}
      </ul>
      <button>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={styles.right}
          onClick={() => changeDivision(false)}
        />
      </button>
    </div>
  );
};

export default Paging;
