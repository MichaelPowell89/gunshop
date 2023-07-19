import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Card = (props) => {

  return (
    <>
      <Link
        className={styles.card}
        href={props.link == null ? '/' : props.link}
      >
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
            </div>
          </div>
      </Link>
    </>
  );
};

export default Card;
