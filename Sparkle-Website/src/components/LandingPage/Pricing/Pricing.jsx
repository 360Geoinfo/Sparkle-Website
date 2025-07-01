import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
        <div className={styles.topContent}>
            <h2 className={styles.title}>Our Pricing</h2>
            <h3 className={styles.subTitle}>Transforming Your Futures, One Child at a Time</h3>
        </div>
    </section>
  );
};

export default Pricing; 
