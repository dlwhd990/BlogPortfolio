import React, { Fragment } from "react";
import styles from "./HomeSection.module.css";

interface HomeSectionProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <section className={styles.home_section}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default HomeSection;
