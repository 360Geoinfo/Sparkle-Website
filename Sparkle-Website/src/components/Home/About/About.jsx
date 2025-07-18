import React from "react";
import styles from "./About.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.topText}>
          <img
            src="assets/LandingPage/About/shooting star.webp"
            alt="Shooting Star Illustration"
            className={styles.topAboutIllustration3}
          />
          <h2 className={styles.topTitle}>About Us</h2>
          <h3 className={styles.topSubTitle}>
            Welcome to Sparkle Therapy Centre’s nook!
          </h3>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/assets/LandingPage/About/IMG_3270.webp"
            alt="Therapist interacting with child"
            className={styles.aboutImage1}
          />
          <img
            src="assets/LandingPage/About/1b2314a3-8184-4006-a8e9-13dce08fc95b.webp"
            alt="Colorful play interaction"
            className={styles.aboutImage2}
          />
          <img
            src="assets/LandingPage/About/Yellow Circle.webp"
            alt="Yellow Circle Illustration"
            className={styles.aboutIllustration1}
          />
          <img
            src="assets/LandingPage/About/shapes 1.webp"
            alt="Shapes Illustration"
            className={styles.aboutIllustration2}
          />
        </div>

        <div className={styles.textContent}>
            <img
                src="assets/LandingPage/About/shooting star.webp"
                alt="Shooting Star Illustration"
                className={styles.aboutIllustration3}
            />
            <h2 className={styles.title}>About Us</h2>
            <h3 className={styles.subTitle}>
                Welcome to Sparkle Therapy Centre’s nook!
            </h3>
            <p className={styles.description}>
                We are licensed Speech and Language Therapists and Clinical
                Psychologist under Allied Health Professions Council of Brunei
                Darussalam (AHPCBD). We provide consultation, assessment, diagnosis
                and individualised treatment to children and adults with
                communication, cognitive, voice, play, fluency, swallowing and
                psychological difficulties. We aim to help our clients achieve their
                maximum best potential through different evidence-based therapies and
                offer training to their loved ones or teachers and carers involved in
                their growth and development.
            </p>
            <div className={styles.aboutLogo}>
              <img
                  src="assets/LandingPage/About/PEERS Logo Color on Blue.webp"
                  alt="PEERS Logo"
                  className={styles.PEERSLogo}
              />
              <img
                  src="assets/LandingPage/About/COSP-logo.webp"
                  alt="COSP Logo"
                  className={styles.COSPLogo}
              />
            </div>
            <img
                src="assets/LandingPage/About/rocket.webp"
                alt="Rocket Illustration"
                className={styles.aboutIllustration4}
            />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
