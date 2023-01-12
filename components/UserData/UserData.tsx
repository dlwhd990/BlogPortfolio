import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCloudMoon, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import profileImage from "../../public/images/d.gif";
import styles from "./UserData.module.css";

const UserData = () => {
  const router = useRouter();
  return (
    <div className={styles.user}>
      <div className={styles.data_container}>
        <Image src={profileImage} alt="프로필 이미지" />
        <p className={styles.name}>이종혁</p>
        <p className={styles.desc}>DEV 🐻</p>
      </div>
      <div className={styles.button_container}>
        <button>
          <Link href="/">
            <FontAwesomeIcon icon={faHouse} className={styles.icon_home} />
          </Link>
        </button>
        <button>
          <Link target="_blank" href="https://github.com/dlwhd990">
            <FontAwesomeIcon icon={faGithub} className={styles.icon_git} />
          </Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faCloudMoon} className={styles.icon_dark} />
        </button>
      </div>
    </div>
  );
};

export default UserData;
