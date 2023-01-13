import React, { Fragment } from "react";
import { useAppSelector } from "../../store/hooks";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const darkModeState = useAppSelector((state) => state.toggle.darkMode);
  return (
    <main className={`${styles.main} ${darkModeState ? "dark" : "light"}`}>
      <Sidebar />
      <Header />
      <Fragment>{children}</Fragment>
      <Footer />
    </main>
  );
};

export default Layout;
