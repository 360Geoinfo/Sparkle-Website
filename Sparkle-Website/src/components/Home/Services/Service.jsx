import React from "react";
import { Link } from "react-router-dom";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.topContent}>
        <h2 className={styles.title}>Our Services</h2>
        <h3 className={styles.subTitle}>
          Building Bright Futures, One Child at a Time
        </h3>
      </div>

      <div className={styles.cardWrapper}>
        {/* Speech Therapy */}
        <div className={styles.card}>
          <img
            src="/assets/LandingPage/Services/Speech Therapy.webp"
            alt="Speech Therapy"
            className={styles.cardImage}
          />
          <div className={styles.overlayWrapper}>
            <img
              src="/assets/LandingPage/Services/Blue Wave.png"
              alt="Blue Wave"
              className={styles.overlayImage}
            />
            <div className={`${styles.cardContent} ${styles.speechBg}`}>
              <h3>Speech Therapy</h3>
              <Link to="/Services/SpeechTherapy" className={styles.learnMoreBtn}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* Clinical Psychology */}
        <div className={styles.card}>
          <img
            src="/assets/LandingPage/Services/Clinical Psychology.webp"
            alt="Clinical Psychology"
            className={styles.cardImage}
          />
          <div className={styles.overlayWrapper}>
            <img
              src="/assets/LandingPage/Services/Green Wave.png"
              alt="Green Wave"
              className={styles.overlayImage}
            />
            <div className={`${styles.cardContent} ${styles.psychologyBg}`}>
              <h3>Clinical Psychology</h3>
              <Link to="/Services/ClinicalPsychology" className={styles.learnMoreBtnGreen}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://calendly.com/sparkle-therapy-centre"
        className={styles.bookBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a session now!
      </a>
    </section>
  );
};

export default Service;

