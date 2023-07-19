// pages/BuyPage.js

import React from "react";
import BuyCard from "./components/BuyCard";
import styles from "@/styles/Home.module.css";

const BuyPage = () => {
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
      id: 1,
      title: "Item 2",
      backgroundImage: "https://www.example.com/buy-image.jpg",
      link: "/buy",
      weaponName: "AK-47 | Redline",
      price: "$100",
      saved: false
    },
    {
      id: 1,
      title: "Item 3",
      backgroundImage: "https://www.example.com/buy-image.jpg",
      link: "/buy",
      weaponName: "AK-47 | Redline",
      price: "$100",
      saved: true
    },
    {
      id: 1,
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
    <div>
      <h1 className={styles.center}>Buy</h1>
      <div className={styles.container}>
        <div className={styles.homepageContent}>
          {items.map((item) => (
            <BuyCard
              key={item.id}
              title={item.title}
              backgroundImage={item.backgroundImage}
              link={item.link}
              weaponName={item.weaponName}
              price={item.price}
              saved={item.saved}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
