import React from 'react';
import styles from './ClinicalPsychology.module.css';
import Footer from '../../../../Element/Footer/Footer'

const Resource = () => {
    const [activeCard, setActiveCard] = React.useState(null);

    const interventionData = [
        {
            title: 'Individual Talk Therapy (Children & Adults)',
            image: '/assets/Resources/Individual Talk Therapy (Children & Adults).webp',
            wave: '/assets/Resources/Wave/Blue.svg',
            color: '#1BB9FF',
            description: 'Supportive one-on-one session to explore emotional challenges, improve coping, and foster personal growth.'
        },
        {
            title: 'Play Therapy',
            image: '/assets/Resources/Play Therapy.webp',
            wave: '/assets/Resources/Wave/Green.svg',
            color: '#A0C260',
            description: 'Developmentally appropriate, play-based interventions to support emotional regulation, communication, and social engagement in children, including those with neurodevelopmental needs.'
        },
        {
            title: 'Parent Training',
            image: '/assets/Resources/Parent Training.webp',
            wave: '/assets/Resources/Wave/Yellow.svg',
            color: '#F0C000',
            description: 'Guidance for caregivers through structure programs such as Parent Coaching for Challenging Therapy (CPRT), and Circle of Security Parenting (COSP) to enchance parenting skills and strengthen family relationships.'
        },
        {
            title: 'PEERS® Social Skills Training',
            image: '/assets/Resources/PEERS® Social Skills Training.webp',
            wave: '/assets/Resources/Wave/Red.svg',
            color: '#FF6666',
            description: 'An evidence-based program to help children and adolescents with social challenges develop and maintain meaningful peer relationship through structured group or individual sessions.'
        },
    ];

    return (
        <>
            <section className={styles.resourceSection}>
                <div className={styles.navbarSpacer}></div>

                <h2 className={styles.sectionTitle}>Clinical Psychology</h2>
                <h3 className={styles.sectionSubTitle}>What is Clinical Psychology?</h3>
                <div className={styles.infoBox}>
                    <p>
                        Clinical Psychologist supports children, adolescents, adults as well as families facing mental health challenges
                        through the use of psychological assessments and intervention. We utilise evidence based approaches and tailor
                        to each individual's unique needs in hope to foster resilience and promote one's overall wellbeing.
                    </p>
                </div>

                <h3 className={styles.sectionSubTitle}>Psychological Assessment</h3>
                <div className={styles.infoBox}>
                    <p>
                        Comprehensive evaluations to understand emotional, behavioural, developmental, or learning concerns.
                        Assessments help inform accurate diagnosis, guide treatment planning, and provide tailored recommendations
                        for support at home, school, or work.
                    </p>
                </div>

                <section className={styles.interventionSection}>
                    <h2 className={styles.sectionTitle}>Types of Psychological Interventions</h2>

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
                                    <div>
                                        <h3>{item.title}</h3>
                                    </div>
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
            </section>
            <Footer />
        </>
    );
};

export default Resource;
