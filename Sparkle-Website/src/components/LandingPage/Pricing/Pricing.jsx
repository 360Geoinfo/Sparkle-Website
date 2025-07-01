import React, { useState } from "react";
import styles from "./Pricing.module.css";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("speech");

  return (
    <section className={styles.pricingSection}>
      <div className={styles.topContent}>
        <h2 className={styles.title}>Our Pricing</h2>
        <h3 className={styles.subTitle}>Transforming Your Futures, One Child at a Time</h3>
      </div>

      <div className={styles.toggleTabs} data-active={activeTab}>
        <span
          className={activeTab === "speech" ? styles.activeTab : styles.inactiveTab}
          onClick={() => setActiveTab("speech")}
        >
          Speech Therapy
        </span>
        <span
          className={activeTab === "psychology" ? styles.activeTab : styles.inactiveTab}
          onClick={() => setActiveTab("psychology")}
        >
          Clinical Psychology
        </span>
      </div>


      <div className={styles.cardWrapper}>
        {activeTab === "speech" && (
          <>
            <img
              className={styles.pricingImage}
              src="/assets/LandingPage/Pricing/PricingBebatik Kilanas.png"
              alt="Bebatik Kilanas Pricing"
            />
            <img
              className={styles.pricingImage}
              src="/assets/LandingPage/Pricing/PricingKuala Belait.png"
              alt="Kuala Belait Pricing"
            />
          </>
        )}

        {activeTab === "psychology" && (
          <img
            className={styles.psychologyPricingImage}
            src="/assets/LandingPage/Pricing/Pricing List.png"
            alt="Clinical Psychology Pricing"
          />
        )}
      </div>

      <p className={styles.notice}>
        <IoMdInformationCircleOutline className={styles.noticeIcon}/>All prices are in BND. Please contact us to check for available slots.
      </p>

      <button className={styles.contactUsBtn}><FaWhatsapp className={styles.contactUsIcon}/>Contact Us</button>
      
    </section>
  );
};

export default Pricing;
