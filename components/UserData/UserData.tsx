import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCloudMoon, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import profileImage from "../../public/images/d.gif";
import { useAppDispatch } from "../../store/hooks";
import { changeDarkModeState, closeSidebar } from "../../store/toggle";
import styles from "./UserData.module.css";

const UserData = () => {
  const dispatch = useAppDispatch();

  const dispatchCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const darkModeHandler = () => {
    dispatch(changeDarkModeState());
  };

  return (
    <div className={styles.user}>
      <div className={styles.data_container}>
        <Image src={profileImage} alt="프로필 이미지" />
        <p className={styles.name}>이종혁</p>
        <p className={styles.desc}>DEV 🐻</p>
      </div>
      <div className={styles.button_container}>
        <Link href="/">
          <button onClick={dispatchCloseSidebar}>
            <FontAwesomeIcon icon={faHouse} className={styles.icon_home} />
          </button>
        </Link>
        <Link target="_blank" href="https://github.com/dlwhd990">
          <button onClick={dispatchCloseSidebar}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon_git} />
          </button>
        </Link>
        <button onClick={darkModeHandler}>
          <FontAwesomeIcon icon={faCloudMoon} className={styles.icon_dark} />
        </button>
      </div>
    </div>
  );
};

export default UserData;
