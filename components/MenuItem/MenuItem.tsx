import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Menu from "../../model/menu";
import styles from "./MenuItem.module.css";

const MenuItem: React.FC<{ menu: Menu }> = ({ menu }) => {
  const router = useRouter();

  const moveToPath = () => {
    router.push(menu.path);
  };

  return (
    <li key={menu.id} className={styles.menu_title} onClick={moveToPath}>
      <FontAwesomeIcon
        icon={menu.icon}
        className={`${styles.menu_icon} ${menu.path.slice(1)}`}
      />
      {menu.title}
    </li>
  );
};

export default MenuItem;
