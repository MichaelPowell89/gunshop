// pages/SellPage.js
import React from "react";
import styles from "@/styles/Home.module.css";
import BuyCard from "./components/BuyCard";

const SellPage = () => {
  //Placeholder data for the cards
  const items = [
    {
      id: 1,
      title: "Item 1",
      backgroundImage: "https://www.example.com/buy-image.jpg",
      link: "/buy",
      weaponName: "AK-47 | Redline",
      price: "$100",
      saved: true
    },
    {
      id: 2,
      title: "Item 2",
      backgroundImage: "https://www.example.com/buy-image.jpg",
      link: "/buy",
      weaponName: "AK-47 | Redline",
      price: "$100",
      saved: false
    },
    {
      id: 3,
      title: "Item 3",
      backgroundImage: "https://www.example.com/buy-image.jpg",
      link: "/buy",
      weaponName: "AK-47 | Redline",
      price: "$100",
      saved: true
    },
    {
      id: 4,
      title: "Item 4",
      backgroundImage: "https://www.example.com/buy-image.jpg",
      link: "/buy",
      weaponName: "AK-47 | Redline",
      price: "$100",
      saved: true
    },
    // Add more items as needed
  ];

  return (
    <>
      <h1 className={styles.center}>Sell</h1>
      <div className={styles.container}>
        <div className={styles.homepageContent}>
        <form className={styles.form}>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" name="search" />
          <button type="submit">Search</button>
        </form>
          {items.map((item) => {
            if (item.saved) {
              return (
                <BuyCard
                  key={item.id}
                  title={item.title}
                  backgroundImage={item.backgroundImage}
                  link={item.link}
                  weaponName={item.weaponName}
                  price={item.price}
                  saved={item.saved}
                />
              );
            }
            return null; // Don't render anything for items with saved: false
          })}
        </div>
      </div>
    </>
  );
};

export default SellPage;
