import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuList } from "../../util/staticDatas/menu";
import UserData from "../UserData/UserData";
import styles from "./Sidebar.module.css";

const classList: string[] = [];

menuList.forEach((menu) => {
  if (!classList.includes(menu.class)) {
    classList.push(menu.class);
  }
});

const menuHTML = classList.map((cl) => {
  return (
    <div key={cl} className={styles.class_set}>
      <p className={styles.class_title}>
        <FontAwesomeIcon icon={faSnowflake} className={styles.class_icon} />
        {cl}
      </p>
      <ul>
        {menuList
          .filter((menu) => menu.class === cl)
          .map((menu) => (
            <li key={menu.id} className={styles.menu_title}>
              <FontAwesomeIcon
                icon={menu.icon}
                className={`${styles.menu_icon} ${menu.path.slice(1)}`}
              />
              {menu.title}
            </li>
          ))}
      </ul>
    </div>
  );
});

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <UserData />
      <div className={styles.menu_container}>{menuHTML}</div>
    </aside>
  );
};

export default Sidebar;
