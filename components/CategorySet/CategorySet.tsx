import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuList } from "../../util/staticDatas/menu";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./CategorySet.module.css";

const CategorySet: React.FC<{ cl: string }> = ({ cl }) => {
  return (
    <div key={cl} className={styles.category_set}>
      <p className={styles.category_title}>
        <FontAwesomeIcon icon={faSnowflake} className={styles.category_icon} />
        {cl}
      </p>
      <ul>
        {menuList
          .filter((menu) => menu.category === cl)
          .map((menu) => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
      </ul>
    </div>
  );
};

export default CategorySet;
