// src/pages/Services/SpeechTherapy.jsx
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import styles from './ClinicalPsychology.module.css';

const interventionData = [
    {
        title: "Individual Talk Therapy (Children & Adults)",
        description: "Supportive one-on-one sessions to explore emotional challenges, improve coping, and foster personal growth.",
        image: "/assets/ServicesPage/Clinical Psychology/Individual Talk Therapy (Children & Adults).webp",
        wave: "/assets/ServicesPage/Speech Therapy/Blue Wave.png",
        color: "#1BB9FF"
    },
    {
        title: "Play Therapy",
        description: "Developmentally appropriate, play-based interventions to support emotional regulation, communication, and social engagement in children, including those with neurodevelopmental needs.",
        image: "/assets/ServicesPage/Clinical Psychology/Play Therapy.webp",
        wave: "/assets/ServicesPage/Speech Therapy/Green Wave.png",
        color: "#A0C260"
    },
    {
        title: "Parent Training",
        description: "Guidance for caregivers through structured programs such as Parent Coaching for Challenging Behaviours, Child-Parent Relationship Therapy (CPRT), and Circle of Security Parenting (COSP) to enhance parenting skills and strengthen family relationships.",
        image: "/assets/ServicesPage/Clinical Psychology/Parent Training.webp",
        wave: "/assets/ServicesPage/Speech Therapy/Yellow Wave.png",
        color: "#F0C000"
    },
    {
        title: "PEERS® Social Skills Training",
        description: "An evidence-based program to help children and adolescents with social challenges develop and maintain meaningful peer relationships through structured group or individual sessions.",
        image: "/assets/ServicesPage/Clinical Psychology/PEERS® Social Skills Training.webp",
        wave: "/assets/ServicesPage/Speech Therapy/Red Wave.png",
        color: "#FF6666"
    }
];

const ClinicalPsychology = () => {
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
            <section className={styles.clinicalPsychologySection}>
                <div className={styles.topSection}>
                    <h1 className={styles.topTitle}>Clinical Psychology</h1>
                    <h3 className={styles.topSubTitle}>What is Clinical Psychology?</h3>
                    <div className={styles.descriptionBox}>
                        <p className={styles.description}>
                            Clinical Psychologist supports children, adolescents, adults as well as families facing mental health challenges through the use of  psychological assessments and intervention. We utilise evidence based approaches and tailor to each individual's unique needs in hope  to foster resilience and promote one's overall wellbeing
                        </p>
                    </div>

                    <h3 className={styles.topSubTitle}>Psychological Assessment</h3>
                    <div className={styles.descriptionBox}>
                        <p className={styles.description}>
                             Comprehensive evaluations to understand emotional, behavioural, developmental, or learning concerns. Assessments help inform accurate diagnosis, guide treatment planning, and provide tailored recommendations for support at home, school, or work.
                        </p>
                    </div>
                </div>

                {/* Intervention Section */}
                <div className={styles.interventionSection}>
                    <h2 className={styles.sectionTitle}>Types of Psychological Interventions</h2>

                    <div className={styles.cardGrid}>
                        {interventionData.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className={`${styles.card} ${activeCard === index ? styles.activeCard : ''}`}
                                style={{ '--active-color': item.color }}
                            >
                                <div className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <img src={item.image} alt={item.title} className={styles.cardImage} />
                                        <div className={`${styles.badge} ${styles[`badge${index + 1}`]}`}>{index + 1}</div>
                                    </div>

                                    <div className={styles.cardContentBox}>
                                        <img src={item.wave} alt="Wave Overlay" className={styles.waveImage} />

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

                                <div className={styles.cardOverlay}>
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

export default ClinicalPsychology;