import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";


const images = [
  "/assets/LandingPage/Hero/slideshow 1.webp",
  "/assets/LandingPage/Hero/slideshow 2.webp",
  "/assets/LandingPage/Hero/slideshow 3.webp",
  "/assets/LandingPage/Hero/slideshow 4.webp",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Slideshow change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Show popup on first page load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  // Close popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

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
        <p className={styles.heroText}>
          From communication to literacy, our dedicated therapists provide the
          support adults and children need to grow, learn, and thrive.
        </p>

        <div className={styles.heroBtn}>
          <button className={styles.heroBookBtn}>
            <a
              href="https://calendly.com/sparkle-therapy-centre"
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

      <img
        className={styles.cloudImage}
        src="/assets/LandingPage/Hero/Cloud.webp"
        alt="Cloud"
      />

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox} ref={popupRef}>
            <img
              src="/assets/LandingPage/PopUp/Woman notepad 1.png"
              alt="Speech Therapy"
              className={styles.confettiImage}
            />
            <h3 className={styles.popupTitle}>Psychologist Trainee Special!</h3>
            <h4 className={styles.popupSubTitle}>50% OFF</h4>
            <p className={styles.popupText}>For Clinical Psychology Trainee</p>
            <p className={styles.popupDateText}>
              Promotion until 28<sup>th</sup> February 2026
            </p>

            <div className={styles.popupButtonBox}>
              <a
                href="/Promotion"
                className={styles.popupButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now!
              </a>

              <button
                onClick={handleClosePopup}
                className={styles.popupCloseBtn}
                aria-label="Close popup"
              >
                NO, THANKS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
