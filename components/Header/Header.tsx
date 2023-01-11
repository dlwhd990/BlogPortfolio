import {
  faCaretDown,
  faHeart,
  faMagnifyingGlass,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { changeMenuState } from "../../store/popup";
import MenuPopup from "../MenuPopup/MenuPopup";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useAppDispatch();

  const onMenuClickHandler = () => {
    dispatch(changeMenuState());
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
          scrolled ? `${styles.on}` : `${styles.off}`
        }`}
      >
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
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              className={styles.icon_only}
            />
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
