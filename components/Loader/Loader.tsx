import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
