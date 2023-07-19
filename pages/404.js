// pages/BuyPage.js

import React from "react";
import BuyCard from "./components/BuyCard";
import styles from "@/styles/Home.module.css";

const Custom404 = () => {
  return (
    <div className={`${styles.description} ${styles.error404}`}>
      <h1 style={{padding: "2em"}}>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default Custom404;
