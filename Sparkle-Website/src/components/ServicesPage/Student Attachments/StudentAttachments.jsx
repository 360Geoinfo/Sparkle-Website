import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./StudentAttachments.module.css";

const Student = () => {
  return (
    <>
    <Navbar />
    <section className={styles.studentSection}>
        <div className={styles.topContent}>
          <h2 className={styles.topTitle}>Join Us</h2>
        </div> 

        <div className={styles.attachmentsWrapper}>
            <div className={styles.attachmentCard}>
                <div className={styles.attachmentImageWrapper}>
                    <img
                        src="/assets/ServicesPage/Student Attachments/FarahW.webp"
                        alt="Attachment 1"
                        className={styles.BgImage}
                    />
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
