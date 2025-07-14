import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import styles from './SpeechTherapy.module.css';

const interventionData = [
    {
        title: "Consultation",
        description: "We offer free 15 minutes consultation. A formal consultation lasts an hour with parents sharing information or concerns. At the end of the session, we will provide differential diagnosis and offer suggestions. Book your formal consultation now!",
        image: "/assets/ServicesPage/Speech Therapy/Consultation.jpg",
        wave: "/assets/ServicesPage/Speech Therapy/Blue Wave.png",
        color: "#1BB9FF"
    },
    {
        title: "Assessment and Diagnosis ",
        description: "Assessment is important in confirming diagnosis and understanding your child’s strengths, needs and current skills. You may be recommended more than 1 tool, depending on your child, and a Speech and Language Therapy diagnosis will be shared with you once evaluated.",
        image: "/assets/ServicesPage/Speech Therapy/Assessment and Diagnosis.jpg",
        wave: "/assets/ServicesPage/Speech Therapy/Green Wave.png",
        color: "#A0C260"
    },
    {
        title: "Treatment",
        description: "We recommend attending at least once a week. Each session includes an individual session with the therapist, followed by a discussion with parents/carers, as we value parental involvement. More sessions may be available depending on your therapist’s schedule.",
        image: "/assets/ServicesPage/Speech Therapy/Treatment.jpg",
        wave: "/assets/ServicesPage/Speech Therapy/Yellow Wave.png",
        color: "#F0C000"
    },
    {
        title: "Training",
        description: "We are passionate in offering training to teachers, parents, or the community at large. Our training can be designed specially to your needs, contact us to find out more info.",
        image: "/assets/ServicesPage/Speech Therapy/Training.jpg",
        wave: "/assets/ServicesPage/Speech Therapy/Red Wave.png",
        color: "#FF6666"
    }
];

const SpeechTherapy = () => {
    const [activeCard, setActiveCard] = useState(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                activeCard !== null &&
                cardRefs.current[activeCard] &&
                !cardRefs.current[activeCard].contains(e.target)
            ) {
                setActiveCard(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeCard]);

    return (
        <>
            <Navbar />
            <section className={styles.speechTherapySection}>
                <div className={styles.topSection}>
                    <h1 className={styles.topTitle}>Speech Therapy</h1>
                    <h3 className={styles.topSubTitle}>What is Speech Therapy?</h3>
                    <div className={styles.descriptionBox}>
                        <p className={styles.description}>
                            We support children and adults with speech, language, communication, and swallowing difficulties. Our experienced therapists assess and treat using evidence-based techniques such as articulation therapy, language intervention, play-based, child-led approaches and more! Each therapy plan is tailored to the individual, helping them build their confidence, improve everyday communication and thrive at home, school and within the community.
                        </p>
                    </div>
                </div>

                {/* Intervention Section */}
                <div className={styles.interventionSection}>
                    <h2 className={styles.sectionTitle}>How Speech Therapy Works</h2>

                    <div className={styles.cardGrid}>
                        {interventionData.map((item, index) => (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className={`${styles.card} ${activeCard === index ? styles.activeCard : ''}`}
                                style={{ '--active-color': item.color }}
                            >
                                <div className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <img src={item.image} alt={item.title} className={styles.cardImage} />
                                        <div className={`${styles.badge} ${styles[`badge${index + 1}`]}`}>{index + 1}</div>
                                    </div>

                                    <div className={styles.cardContentBox}>
                                        <img src={item.wave} alt={`${item.title} Wave`} className={styles.waveImage} />
                                        <div className={styles.cardContent} style={{ backgroundColor: item.color }}>
                                        <h3>{item.title}</h3>
                                        <button
                                            onClick={() => setActiveCard(index)}
                                            className={styles.learnMore}
                                            style={{ color: item.color }}
                                        >
                                            Learn More <span>→</span>
                                        </button>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardOverlay} role="dialog" aria-modal="true" aria-hidden={activeCard === index ? "false" : "true"}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button
                                        className={styles.closeOverlay}
                                        onClick={() => setActiveCard(null)}
                                        aria-label="Close details"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaWrapper}>
                        <a
                            href="https://calendly.com/sparkle-therapy-centre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Book a session now!
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SpeechTherapy;