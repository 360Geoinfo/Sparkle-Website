import React from "react";
import styles from "./Training.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

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

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrowWrapper}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className={styles.arrowIcon} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrowWrapper}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className={styles.arrowIcon} />
    </div>
  );
};

const Training = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const groupedTopics = trainingTopics.reduce((acc, curr, idx) => {
    if (idx % 6 === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);

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

      <h4 className={styles.topicsSubTitle}>Training Topics</h4>

      <div className={styles.staticGrid}>
        <Slider {...settings}>
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

      <a
        href="https://wa.me/6738391407"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactUsLink} // optional for styling
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
