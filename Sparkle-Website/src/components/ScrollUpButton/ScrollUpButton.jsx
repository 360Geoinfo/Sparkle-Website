import React, { useState, useEffect } from "react";
import styles from "./ScrollUpButton.module.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className={styles.scrollUpBtn} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollUpButton;
