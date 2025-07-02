import React, { useState, useEffect } from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./StudentAttachments.module.css";
import { FaWhatsapp } from "react-icons/fa";

const images = [
  "/assets/ServicesPage/Student Attachments/FarahW.webp",
  "/assets/ServicesPage/Student Attachments/Hui Ling.webp",
  "/assets/ServicesPage/Student Attachments/Nasha.webp",
  "/assets/ServicesPage/Student Attachments/SarahY.webp",
  "/assets/ServicesPage/Student Attachments/ZophyaS.webp"
];

const Student = () => {
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
    <>
    <Navbar />
    <section className={styles.studentSection}>
        <div className={styles.topContent}>
          <h2 className={styles.topTitle}>Student Attachment</h2>
        </div> 

        <div className={styles.attachmentsWrapper}>
            <div className={styles.attachmentCard}>
                <div className={styles.slider}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            className={`${styles.studentSlidesImage} ${
                            index === currentImageIndex ? styles.active : styles.inactive
                            }`}
                            src={img}
                            alt={`Student Slide ${index + 1}`}
                        />
                    ))}
                </div>
                <h3 className={styles.subTitle}>Volunteer with us!</h3>
                <p className={styles.attachmentDescription}>
                    Our centre offers valuable exposure to the day-to-day work of Speech and Language Therapists in a 
                    supportive and professional environment. Students also have the opportunity to engage with their 
                    assigned therapists for guidance on career aspirations, higher education pathways, and practical 
                    insights into the working life!
                </p>
                <button className={styles.attachmentButton}>
                    <FaWhatsapp /> Send your application here
                </button>

                <div className={styles.attachmentImageWrapper}>
                    <div className={styles.attachmentContent}>
                        <h4 className={styles.attachmentTitle}>Volunteer with us!</h4>
                        <p className={styles.attachmentDescription}>
                            Our centre offers valuable exposure to the day-to-day work of Speech and Language Therapists in a 
                            supportive and professional environment. Students also have the opportunity to engage with their 
                            assigned therapists for guidance on career aspirations, higher education pathways, and practical 
                            insights into the working life!
                        </p>
                        <button className={styles.attachmentButton}>
                            Send your application here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
};

export default Student;
