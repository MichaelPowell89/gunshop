// pages/HomePage.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import FeaturedCard from "./components/FeaturedCard";
import Card from "./components/Card";

const HomePage = () => {
  const [breakpoint, setBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(window.innerWidth > 768);
    };

    handleResize(); // Call the function directly
    window.addEventListener("resize", handleResize); // Add event listener

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isFeatured = true;

  return (
    <>
      <h1 className={styles.center}>Welcome</h1>
      <div className={styles.container}>
        <div className={styles.homepageContent}>
          {isFeatured && (
            <FeaturedCard
              title="Featured"
              backgroundImage="https://www.example.com/featured-image.jpg"
              weaponName="AK-47 | Redline"
              price="$100"
              link="/featured"
            />
          )}

          <div className={breakpoint ? styles.horizontalContainer : ""}>
            <Card
              title="Buy"
              backgroundImage="https://www.example.com/buy-image.jpg"
              link="/buy"
            />
            <Card
              title="Sell"
              backgroundImage="https://www.example.com/sell-image.jpg"
              link="/sell"
            />
          </div>
          <Card styles={{ flex: 3 }} title="Find a dealer" link="/dealer" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
