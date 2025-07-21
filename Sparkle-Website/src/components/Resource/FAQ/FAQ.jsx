import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Footer from "../../Footer/Footer";

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('speech');
    const [openIndexes, setOpenIndexes] = useState({ speech: null, clinical: null });

    const toggleAnswer = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [activeTab]: prev[activeTab] === index ? null : index,
        }));
    };

    const faqData = {
        speech: [
            {
                question: "How do I know if my child needs Speech and Language Therapy or other support? Isn’t this similar to tuition or school?",
                answer: [
                    "If you have concerns about your child’s speech and language development, do take stock of our FREE 15 Minutes consultation over the phone with one of our trusted therapists. She will be able to guide you further if a formal consultation is required following your concerns.",
                    "Therapy is different from tuition or school. Therapy is delivered by specially licensed therapists under Allied Health Professions Council of Brunei Darussalam (AHPCBD), offering specific goals that are created based on your child’s skills and abilities and are evidence-based."
                ]
            },
            {
                question: "Does my child need to be referred by a doctor to your centre? Will my child be seen by one therapist only or few? What if I decide to not proceed with assessment, after consultation?",
                answer: [
                    "A referral to Sparkle Therapy Centre is not necessary. However, if you have been seen by other professionals, bring any information to share with your therapist as it will help to understand your needs better and shorten the consultation time. ",
                    "At Sparkle, we believe in continuity; therefore, your child, will be seen by one therapist. However, there may be extenuating circumstances that may introduce a secondary therapist into the picture – and this will be discussed with parents beforehand. ",
                    "If, after your consultation with your therapist, and you decided not to proceed with an assessment with Sparkle, we will assist you and your child towards the next steps in your journey."
                ],
            },
            {
                question: "What is the youngest age a child can attend therapy? Is there an age limit on who can do therapy?",
                answer: [
                    "Commencing therapy at a young age is recommended, as early intervention is highly beneficial for speech-language development during their critical growth period. Our therapy approach is primarily play-based and child-led, with a focus on strengthening pre-verbal skills. Parents and carers spend most time with the child and we take your concerns seriously. ",
                    "There is no age limit when undergoing therapy, though the earlier the better. Act now. Do not wait. If you would like more information, we can discuss it further in person. Book your appointment slot now."
                ],
            },
            {
                question: "How long do you recommend therapy for my child before I see progress? How do I know if I want to stop my child’s therapy?",
                answer: [
                    "There are many factors that helps or hinders progress – more importantly, it is dependent on the child’s ability to learn and the support he receives at home / environment. While we cannot promise a specific timeline for growth, we pride ourselves in giving our best towards realising the child’s best interest together with his family members. ",
                    "Therapy stops for many reasons - achieving therapy goals, changes in circumstances, adjusting to routines outside of therapy and more. We understand and do not obligate parents to commit to therapy at Sparkle if circumstances may be difficult for them to proceed. Do notify us earlier if you would decide to no longer attend therapy."
                ],
            },
            {
                question: "Can I choose the schedule to attend therapy? How often should my child attend therapy session? Are parents involved during sessions?",
                answer: [
                    "We would like to accommodate to parents’ availability as much as possible, but this is dependent on the assigned therapist’s schedule. We often offer alternatives. We recommend therapy sessions at least once a week. You can opt for more sessions per week - Talk to your therapist for more information. ",
                    "We are delighted to have parents join our sessions and be active partners. However, if you are unable to do so, we offer feedback and discussion after each therapy session and will give suggestions on what you can do at home."
                ],
            },
            {
                question: "Is assessment a must before starting therapy? Can I just use the assessment that I’ve had from another clinic?",
                answer: [
                    "A baseline assessment is mandatory for all new clients to Sparkle Therapy Centre before we proceed with therapy. It helps to tailor therapy planning specifically to your child’s needs, which may include supporting their pre-verbal skills, play skills, understanding, talking as well as their social skills. We work on supporting your child’s attending skills too. ",
                    "If your child has been to another speech and language therapy services and had an assessment in less than a year accompanied with a detailed report, please share it with us - we may be able to consider this information on a case-to-case basis."
                ],
            },
            {
                question: "Do you provide report or progress updates?",
                answer: [
                    "We believe in engaging families as part of the therapy journey; therefore, therapy updates are given at the end of every session which will be summarised in your child’s ‘My Journey’ booklet that we will provide at the start of your child’s therapy session. ",
                    "If you like to know more about your child’s progress over a long period of time (at least 6 months), we can carry out a re-assessment and provide you with the progress report at an additional cost. You can discuss this with your therapist to find out more."
                ],
            },
            {
                question: "What languages do you use during your therapy sessions?",
                answer: [
                    "We tailor sessions to the child’s dominant language/languages, including English and Malay. We also consider the child’s learning and home environment as well as family’s preferences.  Even if we do not speak your language, we can still provide therapy sessions for your child and your family as the same therapy principles still applies."
                ],
            },
            {
                question: "Have you seen any progress with the children you’re working with at the moment? Do you have any success stories you’d like to share?",
                answer: [
                    "Each child progress according to their own pace and circumstances – we do not compare children except to themselves. Some show huge progress while others are slower. At Sparkle, we celebrate all wins – may it be small or big! It is growth after all! ",
                    "There are many success stories to share – this small space does not do it justice. In Sya Allah, in the future, we will feature our blog where we share our ups and downs as therapists at Sparkle, including our success and disappointments. Keep your eyes peeled!"
                ],
            },
        ],
        clinical: [
            {
                question: "What Psychological services do you offer?",
                answer: [
                    "At Sparkle Therapy Centre, we offer wide range of psychological assessments and interventions, to meet your needs. We aim to provide evidence-based practices within a warm and supportive environment. "
                ],
            },
            {
                question: "Is the Psychological services offered available for both adult and children?",
                answer: [
                    "Yes! We support individuals of all ages- children, adolescents and adults. Feel free to reach out to us whether you’re a parent seeking support for your child, or an adult navigating your own personal growth. We’re excited to go on this journey with you. "
                ],
            },
            {
                question: "What is psychological assessment and why would someone need it?",
                answer: [
                    "A psychological assessment is a structured process aim to understand one’s emotional, cognitive, and behavioural characteristics. During the assessment process, our Clinical Psychologist will utilise various methods, including:",
                    "   - Comprehensive Intake interviews",
                    "   - Behavioural observation",
                    "   - Relevant standardised psychometric tools",
                    "Information gained will uncover underlying factors contributing to one’s issue, whether its emotional, behavioural or learning challenges."
                ],
            },
            {
                question: "What type of psychological assessment do you offer?",
                answer: [
                    "We offer assessments for a wide variety of needs, this includes:",
                    " - Developmental and Diagnostic Assessments e.g., Autism, ADHD/ADD, Intellectual Disability",
                    " - Neuropsychological Testing e.g., IQ, Executive Functioning",
                    " - Emotional and Behavioural Assessments e.g., Anxiety, Depression, Trauma",
                    " - Mental Health Assessments e.g., Personality profiles, Mood disorders"
                ],
            },
            {
                question: "What is Psychological Intervention (Psychotherapy), and why would someone need it?",
                answer: [
                    "Psychological Intervention, also known as Psychotherapy, refers to treatments by trained mental health professional, aim to assist individuals facing life difficulties and improve their overall mental wellbeing. Anyone can benefit from undergoing psychotherapy. You may consider it if:",
                    " - You or your child are facing behavioural or emotional challenges,",
                    " - You or your loved ones suffer from poor self-esteem",
                    " - You’re a parent seeking support",
                    " - You’re interested in personal growth and healing.",
                    "Do note, psychotherapy is not just for those in crisis, but it can also be beneficial for anyone seeking to gain more personal insight and live more meaningfully. "
                ],
            },
            {
                question: "What type of psychological intervention do you offer?",
                answer: [
                    "We offer a wide range of Psychological Interventions to suit your need. Our service include:",
                    " - Talk therapy/Counselling",
                    " - Child-Centred Play therapy",
                    " - Parent training and support. This includes Child Parent Relationship training and Circle of Security Parenting",
                    " - PEERS Social Skills Training",
                    "Our psychotherapy sessions are available for both individual and group sessions. Feel free to contact us for more detail."
                ],
            },
            {
                question: "So, what psychological service does my child, or I need?",
                answer: [
                    "We believe in tailored interventions for each individual we work with, as we understand that everyone is unique- and so is the support they need. As a start, we recommend reaching out to us through our free 15 minutes call consultation. This allows us to understand your concerns and better guide you to the most appropriate service. "
                ],
            },
        ],
    };

    const currentFaq = faqData[activeTab];

    return (
        <>
        <section className={styles.faqSection}>
            <div className={styles.topSection}>
                <h1 className={styles.topTitle}>FAQ</h1>
                <h4 className={styles.topSubTitle}>
                    Do you have any questions?
                </h4>
            

                <div className={styles.toggleTabs} data-active={activeTab}>
                    <span
                        className={activeTab === "speech" ? styles.activeTab : styles.inactiveTab}
                        onClick={() => setActiveTab("speech")}
                    >
                        Speech Therapy
                    </span>
                    <span
                        className={activeTab === "clinical" ? styles.activeTab : styles.inactiveTab}
                        onClick={() => setActiveTab("clinical")}
                    >
                        Clinical Psychology
                    </span>
                </div>
            </div>

            <img
                src="/assets/Resources/FAQ/question.webp"
                alt="Question"
                className={styles.questionImage}
            />

            <img
                src="/assets/Resources/FAQ/tictactoe.webp"
                alt="Tic Tac Toe"
                className={styles.tictactoeImage}
            />

            <div className={styles.faqContainer}>
                {currentFaq.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.questionButton}
                            onClick={() => toggleAnswer(index)}
                        >
                            {item.question}
                            <span className={styles.arrow}>
                                {openIndexes[activeTab] === index ? <FaAngleUp /> : <FaAngleDown />}
                            </span>
                        </button>

                        <div
                            className={`${styles.answerWrapper} ${
                                openIndexes[activeTab] === index ? styles.open : ''
                            }`}
                        >
                            {Array.isArray(item.answer) ? (
                                <div>
                                    {(() => {
                                        const elements = [];
                                        let bulletBuffer = [];

                                        item.answer.forEach((line, i) => {
                                            const trimmed = line.trim();

                                            if (trimmed.startsWith('-') || trimmed.startsWith('–')) {
                                            bulletBuffer.push(trimmed.replace(/^[-–]\s*/, ''));
                                            } else {
                                            if (bulletBuffer.length > 0) {
                                                elements.push(
                                                <ul key={`ul-${i}`} className={styles.bulletList}>
                                                    {bulletBuffer.map((bullet, j) => (
                                                    <li key={`li-${i}-${j}`}>{bullet}</li>
                                                    ))}
                                                </ul>
                                                );
                                                bulletBuffer = [];
                                            }
                                            elements.push(<p key={`p-${i}`} className={styles.answer}>{line}</p>);
                                            }
                                        });

                                        // Flush remaining bullets
                                        if (bulletBuffer.length > 0) {
                                            elements.push(
                                            <ul key={`ul-end`} className={styles.bulletList}>
                                                {bulletBuffer.map((bullet, j) => (
                                                <li key={`li-end-${j}`}>{bullet}</li>
                                                ))}
                                            </ul>
                                            );
                                        }

                                        return elements;
                                    })()}
                                </div>
                            ) : (
                                <p className={styles.answer}>{item.answer}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
        </>
    );
};

export default FAQ;