import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const FeaturedCard = (props) => {

  return (
    <>
      <Link
        className={styles.card}
        style={{ flexGrow: 0.5 }}
        href={props.link == null ? '/' : props.link}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexGrow: "1",
                }}
              >
                {props.title}
              </h2>
                <div className={styles.star}>
                  <i className="fas fa-star"></i>
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

export default FeaturedCard;
