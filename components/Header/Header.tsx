import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCaretDown,
  faCloudMoon,
  faHouse,
  faMagnifyingGlass,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { popupToast } from "../../store/toast";
import {
  changeDarkModeState,
  changeMenuState,
  changeSidebarState,
  closeSidebar,
} from "../../store/toggle";
import MenuPopup from "../MenuPopup/MenuPopup";
import styles from "./Header.module.css";

const Header = () => {
  const router = useRouter();
  const [backGroundOn, setBackGroundOn] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const sidebarState = useAppSelector((state) => state.toggle.sidebar);
  const darkModeState = useAppSelector((state) => state.toggle.darkMode);
  const dispatch = useAppDispatch();

  const darkModeButtonSelector = () => {
    if (darkModeState) return faSun;
    else return faCloudMoon;
  };

  const darkModeClassSelector = () => {
    if (darkModeState)
      return `${styles.icon_only} ${styles.icon_dark} ${styles.sun}`;
    else return `${styles.icon_only} ${styles.icon_dark} ${styles.moon}`;
  };

  const dispatchCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const darkModeHandler = () => {
    dispatch(changeDarkModeState());
  };

  const onMenuClickHandler = () => {
    dispatch(changeMenuState());
  };

  const onSidebarToggleClickHandler = () => {
    dispatch(changeSidebarState());
  };

  const changeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onSearchHandler = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (searchInput.length <= 1) {
      dispatch(popupToast("최소 2글자 이상이어야 합니다!"));
      return;
    }
    setSearchInput("");
    router.push(`/search/${searchInput}?page=1`);
  };

  const throttleScroll = () => {
    if (throttle) return;
    setThrottle(true);
    setTimeout(() => {
      console.log("DDD");
      if (window.scrollY > 430) setBackGroundOn(true);
      else setBackGroundOn(false);
      setThrottle(false);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => window.removeEventListener("scroll", throttleScroll);
  }, [throttleScroll]);

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.navbar} ${
          backGroundOn || sidebarState
            ? `${styles.on} header_on`
            : `${styles.off} header_off`
        }`}
      >
        <button
          className={styles.sidebar_toggle}
          onClick={onSidebarToggleClickHandler}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <MenuPopup />
        <ul className={styles.header_menu}>
          <li>
            <Link
              href="https://www.notion.so/4d3ee89e36cd463db8b8fe1d72333722"
              target="_blank"
            >
              소개{" "}
              <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
            </Link>
          </li>
          <li onClick={onMenuClickHandler}>
            블로그{" "}
            <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
          </li>
        </ul>
        <form
          onSubmit={onSearchHandler}
          className={`header_search ${styles.search}`}
        >
          <input
            value={searchInput}
            onChange={changeSearchInput}
            type="text"
            placeholder="검색"
            spellCheck="false"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.search_icon}
            onClick={onSearchHandler}
          />
        </form>
        <ul className={styles.header_menu}>
          <li>
            <Link href="/">
              <button onClick={dispatchCloseSidebar}>
                <FontAwesomeIcon
                  icon={faHouse}
                  className={`${styles.icon_only} ${styles.icon_home}`}
                />
              </button>
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/dlwhd990">
              <button onClick={dispatchCloseSidebar}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.icon_only} ${styles.icon_github}`}
                />
              </button>
            </Link>
          </li>
          <li>
            <button onClick={darkModeHandler}>
              <FontAwesomeIcon
                icon={darkModeButtonSelector()}
                className={darkModeClassSelector()}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
