import {
  faCaretDown,
  faHeart,
  faMagnifyingGlass,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            소개 <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
          </li>
          <li>
            블로그{" "}
            <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
          </li>
        </ul>
        <div className={styles.search}>
          <input type="text" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.search_icon}
          />
        </div>
        <ul>
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
