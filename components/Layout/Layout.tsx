import React, { Fragment } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Header />
      <Fragment>{children}</Fragment>
    </main>
  );
};

export default Layout;
