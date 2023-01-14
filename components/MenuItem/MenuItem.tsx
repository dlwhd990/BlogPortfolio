import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Menu from "../../model/menu";
import { useAppDispatch } from "../../store/hooks";
import { closeMenu, closeSidebar } from "../../store/toggle";
import styles from "./MenuItem.module.css";

const MenuItem: React.FC<{ menu: Menu }> = ({ menu }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const moveToPath = () => {
    dispatch(closeMenu());
    dispatch(closeSidebar());
    router.push(`${menu.path}?page=1`);
  };

  return (
    <li
      key={menu.id}
      className={`menu_item ${styles.menu_title}`}
      onClick={moveToPath}
    >
      <FontAwesomeIcon
        icon={menu.icon}
        className={`${styles.menu_icon} ${menu.path.slice(1)}`}
      />
      {menu.title}
    </li>
  );
};

export default MenuItem;
