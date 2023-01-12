import { useAppSelector } from "../../store/hooks";
import { categoryList } from "../../util/staticDatas/menu";
import CategorySet from "../CategorySet/CategorySet";
import UserData from "../UserData/UserData";
import styles from "./Sidebar.module.css";

const menuHTML = categoryList.map((cl) => {
  return <CategorySet key={cl} cl={cl} />;
});

const Sidebar = () => {
  const sidebarState = useAppSelector((state) => state.toggle.sidebar);
  return (
    <aside
      className={`${styles.sidebar} ${
        sidebarState ? `${styles.on} ` : `${styles.off}`
      }`}
    >
      <UserData />
      <div className={styles.menu_container}>{menuHTML}</div>
    </aside>
  );
};

export default Sidebar;
