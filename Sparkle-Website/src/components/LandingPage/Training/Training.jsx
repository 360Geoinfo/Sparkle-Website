import React from "react";
import styles from "./Training.module.css";

const Training = () => {
  return (
    <section className={styles.trainingSection}>
        <div className={styles.topContent}>
            <h2 className={styles.title}>Training Programs</h2>
            <h3 className={styles.subTitle}>Empowering Adults and Children</h3>
        </div>
        <p className={styles.description}>
            Speech & Language Therapy and Clinical Psychology training helps to equip parents / caregivers, 
            teachers or the community with the knowledge and skills to support individuals with communication 
            and psychological difficulties at home / work / community. It can be delivered through various 
            methods, including online courses, in-person workshops, and individualized coaching sessions.
        </p>

        <ul className={styles.topicsSubTitle}>Training Topics
            <li>Communicating With Adults Post Stroke</li>
            <li>Communicating With Adults With Dementia</li>
            <li>Speech vs Language Delay</li>
            <li>Speech and Language Therapy strategies</li>
            <li>Language Developmental Milestones</li>
            <li>Supporting Your Child At Home</li>
            <li>Autism Spectrum Disorder</li>
            <li>Developmental Language Disorder</li>
            <li>Supporting Students In The Classroom</li>
            <li>Hearing Impairment</li>
            <li>Selective Mutism</li>
            <li>Play With My Child</li>
            <li>Echolalia</li>
            <li>Neurodiversity</li>
            <li>Intellectual Disability</li>
            <li>Autism Spectrum Disorder</li>
            <li>ADHD/ADD</li>
            <li>Child Parent Relationship Training Program</li>
            <li>Circle of Security - Parent Attachment Program</li>
            <li>Adult related mental health programs</li>
        </ul>

        <button className={styles.contactUsBtn}>Contact us for a training tailored just for you!</button>
    </section>
  );
};

export default Training; 
