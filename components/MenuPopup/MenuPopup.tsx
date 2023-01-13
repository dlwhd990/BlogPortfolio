import { useAppSelector } from "../../store/hooks";
import { categoryList } from "../../util/staticDatas/menu";
import CategorySet from "../CategorySet/CategorySet";
import styles from "./MenuPopup.module.css";

const menuHTML = categoryList.map((cl) => {
  return <CategorySet key={cl} cl={cl} />;
});

const MenuPopup = () => {
  const menuState = useAppSelector((state) => state.toggle.menu);

  return (
    <div
      className={`menu_popup ${styles.menu_popup} ${
        menuState ? `${styles.on}` : `${styles.off}`
      }`}
    >
      {menuHTML}
    </div>
  );
};

export default MenuPopup;
