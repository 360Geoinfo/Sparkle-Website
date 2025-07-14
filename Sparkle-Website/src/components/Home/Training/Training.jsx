import React, { useRef, useState, useEffect } from "react";
import styles from "./Training.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const trainingTopics = [
  "Communicating With Adults Post Stroke",
  "Communicating With Adults With Dementia",
  "Speech vs Language Delay",
  "Speech and Language Therapy strategies",
  "Language Developmental Milestones",
  "Supporting Your Child At Home",
  "Autism Spectrum Disorder",
  "Developmental Language Disorder",
  "Supporting Students In The Classroom",
  "Hearing Impairment",
  "Selective Mutism",
  "Play With My Child",
  "Echolalia",
  "Neurodiversity",
  "Intellectual Disability",
  "Autism Spectrum Disorder",
  "ADHD/ADD",
  "Child Parent Relationship Training Program",
  "Circle of Security - Parent Attachment Program",
  "Adult related mental health programs"
];

const Training = () => {
  const sliderRef = useRef(null);
  const [groupedTopics, setGroupedTopics] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const itemsPerSlide = screenWidth <= 768 ? 5 : 6;

      const newGroupedTopics = trainingTopics.reduce((acc, curr, idx) => {
        if (idx % itemsPerSlide === 0) acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
      }, []);

      setGroupedTopics(newGroupedTopics);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize); // Listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <section className={styles.trainingSection}>
      <div className={styles.topContent}>
        <img
          className={styles.beeImage}
          src="/assets/LandingPage/Training/Flying bee.webp"
          alt="Bee"
        />
        <h2 className={styles.title}>Training Programs</h2>
        <h3 className={styles.subTitle}>Empowering Adults and Children</h3>
      </div>

      <p className={styles.description}>
        Speech & Language Therapy and Clinical Psychology training helps to equip parents / caregivers,
        teachers or the community with the knowledge and skills to support individuals with communication
        and psychological difficulties at home / work / community. It can be delivered through various
        methods, including online courses, in-person workshops, and individualized coaching sessions.
      </p>

      <div className={styles.trainingTopicSection}>
        <div className={styles.topicsTopContent}>
          <h4 className={styles.topicsSubTitle}>Training Topics</h4>

          <div className={styles.arrowsContainer}>
            <div onClick={() => sliderRef.current.slickPrev()} className={styles.arrowWrapper}>
              <MdKeyboardArrowLeft className={styles.arrowIcon} />
            </div>
            <div onClick={() => sliderRef.current.slickNext()} className={styles.arrowWrapper}>
              <MdKeyboardArrowRight className={styles.arrowIcon} />
            </div>
          </div>
        </div>

        <div className={styles.staticGrid}>
          <div className={styles.sliderWrapper}>
            <Slider ref={sliderRef} {...settings}>
              {groupedTopics.map((group, i) => (
                <div key={i} className={styles.slideGroup}>
                  {group.map((topic, idx) => (
                    <div
                      className={`${styles.topicBox} ${styles[`color${(i * 6 + idx) % 6}`]}`}
                      key={idx}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/6738391407"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactUsLink}
      >
        <button className={styles.contactUsBtn}>
          <FaWhatsapp className={styles.contactUsIcon} />
          Contact us for a training tailored just for you!
        </button>
      </a>

      <img
        className={styles.cloudImage}
        src="/assets/LandingPage/Training/Clouds.webp"
        alt="Cloud"
      />
    </section>
  );
};

export default Training;
