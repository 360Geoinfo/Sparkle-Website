import React from "react";
import styles from "./InspiringStories.module.css";
import { NavLink } from 'react-router-dom';

const Book = () => {
    return (
        <section className={styles.bookSection}>

            <div className={styles.bookContent}>
                <h2 className={styles.bookTitle}>Inspiring Stories of Growth</h2>

                <p className={styles.bookDescription}>
                    Description 1
                </p>
                <p className={styles.bookDescription}>
                    Description 2
                </p>

                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=uBcbC8YjpOme3jxS" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    className={styles.bookImage}
                    title="Consultation Video"
                />

                <NavLink to="/Resources/Blog"
                    className={styles.bookHereBtn}
                >
                    Read full story
                </NavLink>
            </div>
        </section>
    );
};

export default Book;