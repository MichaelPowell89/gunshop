import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const BuyCard = (props) => {
  const [saved, setSaved] = useState(props.saved);

  useEffect(() => {
    setSaved(props.saved);
  }, [props.saved]);

  const handleSaveClick = () => {
    setSaved(!saved);
  };

  return (
    <>
      <Link
        className={styles.card}
        href={props.link == null ? "/" : props.link}
      >
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <h2
              style={{
                display: "flex",
                justifyContent: "space-between",
                // flexGrow: "1",
              }}
            >
              {props.title}
            </h2>
            <div className={styles.icon} style={{margin: '0.7em', padding: '0'}}>
              <i
                className={`fas fa-bookmark ${
                  saved ? styles.bookmarkIconSaved : styles.bookmarkIcon
                }`}
                onClick={handleSaveClick}
              />
            </div>
          </div>
          <div className={styles.cardFooter}>
            <h2>{props.weaponName}</h2>
            <h2>{props.price}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BuyCard;
