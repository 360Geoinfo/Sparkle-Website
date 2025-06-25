import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.topContent}>
        <h2 className={styles.title}>Testimonials</h2>
        <h3 className={styles.subTitle}>
          Stories of progress and transformation
        </h3>
      </div>

      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialCard}>
            {/* Purple Testimonial */}
            <div className={styles.bubbleWrapper}>
                <img
                    src="assets/LandingPage/Testimonials/Bubble Purple.png"
                    alt="Purple Bubble"
                    className={styles.bubbleImage}
                />
                <img
                    src="assets/LandingPage/Testimonials/Quote Purple.webp"
                    alt="Quote"
                    className={`${styles.quote} ${styles.topLeft}`}
                />
                <div className={styles.bubbleContent}>
                    <p className={styles.text}>
                        Seeing a child improve really takes consistency. Thank you from the
                        beginning all the way to now. <br />
                        We’ve come so far, and I’m seeing so much improvement in her!
                    </p>
                    <p className={styles.name}>Mama AR</p>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                        <img
                            key={i}
                            src="assets/LandingPage/Testimonials/star.webp"
                            alt="Star"
                            className={styles.starIcon}
                        />
                        ))}
                    </div>
                    <img
                        src="assets/LandingPage/Testimonials/Quote Purple.webp"
                        alt="Quote"
                        className={`${styles.quote} ${styles.bottomRight}`}
                    />
                </div>
            </div>

            <div className={styles.bubbleWrapper}>
                <img
                    src="assets/LandingPage/Testimonials/Bubble Green.png"
                    alt="Green Bubble"
                    className={styles.bubbleImage}
                />
                <img
                    src="assets/LandingPage/Testimonials/Quote Green.webp"
                    alt="Quote"
                    className={`${styles.quote} ${styles.topLeft}`}
                />
                <div className={styles.bubbleContent}>
                    <p className={styles.text}>
                        The team at Sparkle Therapy Centre has changed our lives. My daughter used to 
                        struggle with basic sounds, and now she’s confidently reading aloud. I felt 
                        included every step of the way — the therapists really listen and guide with 
                        kindness. It’s more than just a service; it’s a partnership built on hope and 
                        encouragement. I always look forward to the sessions just as much as my child does.    
                    </p>
                    <p className={styles.name}>Parent's name</p>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                        <img
                            key={i}
                            src="assets/LandingPage/Testimonials/star.webp"
                            alt="Star"
                            className={styles.starIcon}
                        />
                        ))}
                    </div>
                    <img
                        src="assets/LandingPage/Testimonials/Quote Green.webp"
                        alt="Quote"
                        className={`${styles.quote} ${styles.bottomRight}`}
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
