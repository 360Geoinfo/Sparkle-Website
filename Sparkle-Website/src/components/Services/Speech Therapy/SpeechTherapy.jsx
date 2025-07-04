// src/pages/Services/SpeechTherapy.jsx
import React, { useState } from 'react';
import styles from './SpeechTherapy.module.css';
import Footer from '../../../../Element/Footer/Footer';

const interventionData = [
    {
        title: "Consultation",
        description: "We offer free 15 minutes consultation. A formal consultation lasts an hour with parents sharing information or concerns. At the end of the session, we will provide differential diagnosis and offer suggestions. Book your formal consultation now!",
        image: "/assets/ServicesPage/Therapy/Individual Talk Therapy (Children & Adults).webp",
        wave: "/assets/ServicesPage/Therapy/Wave/Blue.svg",
        color: "#1BB9FF"
    },
    {
        title: "Assessment and Diagnosis ",
        description: "Assessment is important in confirming diagnosis and understanding your child’s strengths, needs and current skills. You may be recommended more than 1 tool, depending on your child, and a Speech and Language Therapy diagnosis will be shared with you once evaluated.",
        image: "/assets/ServicesPage/Therapy/Parent Training.webp",
        wave: "/assets/ServicesPage/Therapy/Wave/Green.svg",
        color: "#A0C260"
    },
    {
        title: "Treatment",
        description: "We recommend attending at least once a week. Each session includes an individual session with the therapist, followed by a discussion with parents/carers, as we value parental involvement. More sessions may be available depending on your therapist’s schedule.",
        image: "/assets/ServicesPage/Therapy/PEERS® Social Skills Training.webp",
        wave: "/assets/ServicesPage/Therapy/Wave/Yellow.svg",
        color: "#F0C000"
    },
    {
        title: "Training",
        description: "We are passionate in offering training to teachers, parents, or the community at large. Our training can be designed specially to your needs, contact us to find out more info.",
        image: "/assets/ServicesPage/Therapy/PEERS® Social Skills Training.webp",
        wave: "/assets/ServicesPage/Therapy/Wave/Red.svg",
        color: "#FF6666"
    }
];

const SpeechTherapy = () => {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <>
            <div className={styles.navbarSpacer}></div>
            <section className={styles.speechTherapySection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionHeader}>Speech Therapy</h1>
                    <h3 className={styles.sectionSubTitle}>What is Speech Therapy?</h3>
                    <p className={styles.description}>
                        We support children and adults with speech, language, communication, and swallowing difficulties. Our experienced therapists assess and treat using evidence-based techniques such as articulation therapy, language intervention, play-based, child-led approaches and more! Each therapy plan is tailored to the individual, helping them build their confidence, improve everyday communication and thrive at home, school and within the community.
                    </p>
                </div>
            </section>

            {/* Intervention Section */}
            <section className={styles.interventionSection}>
                <h2 className={styles.sectionTitle}>How Speech Therapy Works</h2>

                <div className={styles.cardGrid}>
                    {interventionData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${activeCard === index ? styles.activeCard : ''}`}
                            style={{ '--active-color': item.color }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={item.image} alt={item.title} className={styles.cardImage} />
                                <div className={`${styles.badge} ${styles[`badge${index + 1}`]}`}>{index + 1}</div>
                            </div>

                            <img src={item.wave} alt="Wave Overlay" className={styles.waveImage} />

                            <div className={styles.cardContent} style={{ backgroundColor: item.color }}>
                                <h3>{item.title}</h3>
                                <button
                                    onClick={() => setActiveCard(index)}
                                    className={styles.learnMore}
                                >
                                    Learn More <span>→</span>
                                </button>
                            </div>

                            <div className={styles.cardOverlay}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <a href="/contact" className={styles.ctaButton}>Book your consultation today!</a>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SpeechTherapy;
