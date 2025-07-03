import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./ClinicalSupervision.module.css";
import { FaWhatsapp } from "react-icons/fa";

const ClinicalSupervision = () => {
    return (
        <>
            <Navbar />
            <section className={styles.supervisionSection}>
                <h2 className={styles.title}>Clinical Supervision</h2>

                <div className={styles.card}>
                    <p className={styles.description}>
                        Clinical supervision provides a supportive space for professionals
                        (e.g. psychologists, counsellors, teachers, mental health therapists etc.)
                        to reflect on their practice, enhance clinical skills, and ensure ethical,
                        effective care. Through guided discussions and feedback, supervisees gain
                        insight, confidence, and professional growth. Suitable for trainees and
                        experienced practitioners seeking ongoing development and support.
                    </p>
                    <p className={styles.description}>
                        We welcome anyone interested in joining clinical supervision—whether you're
                        a trainee or a seasoned practitioner. Let us know if you'd like to be part of it!
                    </p>

                    <button className={styles.contactButton}>
                        <a
                            href="https://wa.me/6738391407"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaLink} // optional: if you want to style the anchor
                        >
                            <FaWhatsapp className={styles.whatsAppIcon} /> Send your application here
                        </a>
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ClinicalSupervision;
