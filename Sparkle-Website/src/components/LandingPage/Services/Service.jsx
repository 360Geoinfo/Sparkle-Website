import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <section className={styles.serviceSection}>
        <div className={styles.topContent}>
            <h2 className={styles.title}>Our Services</h2>
            <h3 className={styles.subTitle}>Building Bright Futures, One Child at a Time</h3>
        </div>
        
        <div className={styles.serviceWrapper}>
            <div className={styles.imageWrapper}>
                <img
                    src="assets/LandingPage/Services/Speech Therapy.webp"
                    alt="Speech Therapy"
                    className={styles.baseImage}
                />

                <div className={styles.contentImageWrapper}>
                    <img
                        src="assets/LandingPage/Services/Blue Wave.png"
                        alt="Blue Wave"
                        className={styles.overlayImage}
                    />
                    <div className={styles.speechContentBox}>
                        <h3 className={styles.contentTitle}>
                            Speech Therapy
                        </h3>
                        <button className={styles.speechLearnMoreBtn}>Learn More →</button>
                    </div>
                </div>
            </div>

            <div className={styles.imageWrapper}>
                <img
                    src="assets/LandingPage/Services/Clinical Psychology.webp"
                    alt="Clinical Psychology"
                    className={styles.baseImage}
                />

                <div className={styles.contentImageWrapper}>
                    <img
                        src="assets/LandingPage/Services/Green Wave.png"
                        alt="Green Wave"
                        className={styles.overlayImage}
                    />

                    <div className={styles.clinicalContentBox}>
                        <h3 className={styles.contentTitle}>
                            Clinical Psychology
                        </h3>
                        <button className={styles.clinicalLearnMoreBtn}>Learn More →</button>
                    </div>
                </div>
            </div>
        </div>

        <button className={styles.BookBtn}>Book a session now!</button>
    </section>
  );
};

export default Service; 
