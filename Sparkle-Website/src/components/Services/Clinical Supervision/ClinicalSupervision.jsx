import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../../../../Element/Footer/Footer';
import styles from './ClinicalSupervision.module.css';

const ClinicalSupervision = () => {
    return (
        <>
            <div className={styles.navbarSpacer}></div>
            <section className={styles.sectionPage}>
                <div className={styles.clinicalSupervisionSection}>
                    <h1 className={styles.title}>Clinical Supervision</h1>
                    <div className={styles.containerDiv}>
                        <p className={styles.intro}>
                            Clinical supervision provides a supportive space for professionals (e.g. psychologists, counsellors, teachers, mental health therapists etc.) to reflect on their practice, enhance clinical skills, and ensure ethical, effective care. Through guided discussions and feedback, supervisees gain insight, confidence, and professional growth. Suitable for trainees and experienced practitioners seeking ongoing development and support.
                        </p>
                        <p className={styles.intro}>
                            We welcome anyone interested in joining clinical supervision—whether you're a trainee or a seasoned practitioner. Let us know if you'd like to be part of it!
                        </p>
                        <a
                            href="https://wa.me/6738391407"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaLink} // optional: if you want to style the anchor
                        >
                            <button className={styles.ctaButton}>
                                <FaWhatsapp className={styles.whatsappIcon} />
                                Join Clinical Supervision
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ClinicalSupervision;
