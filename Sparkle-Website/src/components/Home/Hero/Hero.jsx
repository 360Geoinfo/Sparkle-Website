import React, { useState, useEffect } from "react";
import styles from './Hero.module.css';

const images = [
  "/assets/LandingPage/Hero/slideshow 1.webp",
  "/assets/LandingPage/Hero/slideshow 2.webp",
  "/assets/LandingPage/Hero/slideshow 3.webp",
  "/assets/LandingPage/Hero/slideshow 4.webp"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        {images.map((img, index) => (
          <img
            key={index}
            className={`${styles.heroSlidesImage} ${
            index === currentImageIndex ? styles.active : styles.inactive
            }`}
            src={img}
            alt={`Sparkle Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>Transforming You</h2>
        <p className={styles.heroText}>From communication to literacy, our dedicated therapists provide the 
          support for adults and children needs to grow, learn, and thrive.
        </p>
        <div className={styles.heroBtn}>
          <button className={styles.heroBookBtn}>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a session now!
            </a>
          </button>
          <button className={styles.heroQuestionBtn}>
            <a
              href="https://wa.me/6738391407"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask a question!
            </a>
          </button>
        </div>
      </div>

      <div>
        <img
          className={styles.cloudImage}
          src="/assets/LandingPage/Hero/Cloud.webp"
          alt="Cloud"
        />
      </div>
    </section>

  );
};

export default Hero;
