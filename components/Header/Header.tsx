import {
  faBars,
  faCaretDown,
  faHeart,
  faMagnifyingGlass,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeMenuState, changeSidebarState } from "../../store/toggle";
import MenuPopup from "../MenuPopup/MenuPopup";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const sidebarState = useAppSelector((state) => state.toggle.sidebar);
  const dispatch = useAppDispatch();

  const onMenuClickHandler = () => {
    dispatch(changeMenuState());
  };

  const onSidebarToggleClickHandler = () => {
    dispatch(changeSidebarState());
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.scrollY < 500) setScrolled(false);
      else setScrolled(true);
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.navbar} ${
          scrolled || sidebarState ? `${styles.on}` : `${styles.off}`
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
            소개 <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
          </li>
          <li onClick={onMenuClickHandler}>
            블로그{" "}
            <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
          </li>
        </ul>
        <div className={styles.search}>
          <input type="text" placeholder="검색" spellCheck="false" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.search_icon}
          />
        </div>
        <ul className={styles.header_menu}>
          <li>
            <Link href="https://card-study.vercel.app/" target="_blank">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className={styles.icon_only}
              />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className={styles.icon_only} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
