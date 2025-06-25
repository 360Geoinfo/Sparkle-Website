import React from "react";
import styles from "./Book.module.css";

const Book = () => {
  return (
    <section className={styles.bookSection}>
        <img
            src="assets/LandingPage/Book/CTA pic (blurred).webp"
            alt="Book Consultation"
            className={styles.bookImage}
        />

        <div className={styles.bookContent}>
            <h2 className={styles.bookTitle}>Book your consultation today!</h2>

            <p className={styles.bookDescription}>
                Do you have adult family members with communication difficulties? Is your teenager inflicted with mental 
                health issues? Is your child not talking yet? Is your child not turning to his name when called? Your child 
                doesn't understand you? Your child's speech is unclear? Your child's vocabulary is poor for his age? 
            </p>
            <p className={styles.bookDescription}>
                We may be able to assist. Book your consultation slot now with our experienced and passionate therapists.
            </p>

            <button className={styles.bookHereBtn}>Book here!</button>
        </div>
    </section>
  );
};

export default Book; 
