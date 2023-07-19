import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.icon}>
        <i className={`fas fa-home ${styles.homeIcon}`} />
      </Link>
      <div
        style={{display: "flex", justifyContent: "space-between", flexGrow: "0.02"}}>
        <Link href="/wishlist" className={styles.icon}>
        <i className={`fas fa-bookmark ${styles.bookmarkIcon}`} />
        </Link>
        <Link href="/settings" className={`${styles.icon} ${styles.settingsCog}`}>
          <i className="fas fa-cog"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
