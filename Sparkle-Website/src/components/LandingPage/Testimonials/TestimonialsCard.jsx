import React from "react";
import styles from "./Testimonials.module.css";

const TestimonialsCard = ({ testimonial }) => {
  const { name, text, stars, bubbleImage, quoteImage } = testimonial;

  return (
    <div className={styles.bubbleWrapper}>
        <img src={bubbleImage} alt="Bubble" className={styles.bubbleImage} />
        

        <div className={styles.bubbleContent}>
            <img src={quoteImage} alt="Quote" className={`${styles.quote} ${styles.topLeft}`} />
            <p className={styles.text}>{text}</p>
            <p className={styles.name}>{name}</p>
            <div className={styles.stars}>
                {[...Array(stars)].map((_, i) => (
                    <img
                        key={i}
                        src="assets/LandingPage/Testimonials/star.webp"
                        alt="Star"
                        className={styles.starIcon}
                    />
                ))}
            </div>
            <img src={quoteImage} alt="Quote" className={`${styles.quote} ${styles.bottomRight}`} />
        </div>
    </div>
  );
};

export default TestimonialsCard;
