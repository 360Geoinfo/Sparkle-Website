import React, { useState, useEffect } from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./StudentAttachments.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";

const images = [
  "/assets/ServicesPage/Student Attachments/FarahW.webp",
  "/assets/ServicesPage/Student Attachments/Hui Ling.webp",
  "/assets/ServicesPage/Student Attachments/Nasha.webp",
  "/assets/ServicesPage/Student Attachments/SarahY.webp",
  "/assets/ServicesPage/Student Attachments/ZophyaS.webp"
];

const StudentAttachments = () => {
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
        <div className={styles.attachmentsCard}>
          <img
            src="/assets/ServicesPage/Student Attachments/grad cap.webp"
            alt="Graduation Cap"
            className={styles.gradCapImage}
          />

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

          <button className={styles.contactButton}>
            <FaWhatsapp className={styles.whatsAppIcon} /> Send your application here
          </button>
        </div>

        <div className={styles.attachmentsCard}>
          <div className={styles.centercard}>
            <h3 className={styles.subTitle}>Downloadable Forms</h3>
            <p className={styles.attachmentDescription}>
              Whether you're looking to volunteer, observe, or gain practical experience, Sparkle Therapy Centre 
              welcomes students from diverse educational backgrounds from A-levels to university. 
            </p>
            <p className={styles.attachmentDescription}>
              If you're interested in applying for a student attachment, please download and send your application details.
            </p>

            <div className={styles.downloadLinkWrapper}>
              <div className={styles.studentDownloadLinkWrapper}>
                <a
                  className={`${styles.downloadLink} ${styles.studentDownloadLink}`}
                  href="/forms/student-attachment.pdf"
                  download
                >
                    <GrDocumentText className={styles.documentIcon}/> Student Attachment
                  <MdOutlineFileDownload className={styles.downloadIcon}/>
                </a>
              </div>

              <div className={styles.dressDownloadLinkWrapper}>
                <a
                  className={`${styles.downloadLink} ${styles.dressDownloadLink}`}
                  href="/forms/student-attachment.pdf"
                  download
                >
                    <GrDocumentText className={styles.documentIcon}/> Dress Code for Students
                  <MdOutlineFileDownload className={styles.downloadIcon}/>
                </a>
              </div>

              <div className={styles.agreementDownloadLinkWrapper}>
                <a
                  className={`${styles.downloadLink} ${styles.agreementDownloadLink}`}
                  href="/forms/student-attachment.pdf"
                  download
                >
                    <GrDocumentText className={styles.documentIcon}/> Patient Information Confidentiality Agreement
                  <MdOutlineFileDownload className={styles.agreementDownloadIcon}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default StudentAttachments;
