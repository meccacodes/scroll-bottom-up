import React from "react";
import styles from "./page.module.css";
import ScrollToTop from "../components/ScrollToTop";

const Home: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.party}>You made it!</div>
      <div className={styles.party}>🥳</div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
