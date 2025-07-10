import React, { useState } from "react";
import styles from "./Team.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const teamMembers = [
  {
    name: "Meela Aliuddin",
    title: "Speech and Language Therapist Lead",
    image: "/assets/LandingPage/Team/Meela.webp",
    description:
      "Meela is the founder of Sparkle Therapy Centre with more than 25 years of experience working with children and adults. She is passionate to train and empower families in taking action for their loved ones in their stride. She loves reading and has many stories to share!",
  },
  {
    name: "Dayana Kula",
    title: "Speech and Language Therapist (i-Ready)",
    image: "/assets/LandingPage/Team/Dayana.webp",
    description:
      "Dayana graduated from the UK and has joined the team since January 2024. She empowers children, builds parents' confidence as communicator partners, and is passionate about adult dysphagia. A cat lover and photography enthusiast!",
  },
  {
    name: "Sayyidah Masri",
    title: "Speech and Language Therapist (i-Ready)",
    image: "/assets/LandingPage/Team/Sayyidah.webp",
    description:
      "Sayyidah started in January 2024 after graduating from Sheffield. She’s dedicated to supporting children through fun & supportive sessions, with a special interest in neurodivergence and early literacy. Outside work, she enjoys café hopping, and trying out creative hobbies!",
  },
  {
    name: "Hannah Ong",
    title: "Speech and Language Therapist",
    image: "/assets/LandingPage/Team/Hannah.jpg",
    description:
      "With over 3 years of experience in Australia, she's now back in Brunei with her family. Hannah’s a fun therapist who loves giving stickers and a homebody with artistic talent. She enjoys exploring the arts and traveling when possible.",
  },
  {
    name: "Laili Syukrillah",
    title: "Administration Assistant (i-Ready)",
    image: "/assets/LandingPage/Team/Laili.jpg",
    description:
      "Laili is the newest sparkling member and is a mum of a lovely young girl. She brings energy and creativity to Sparkle. With over 5 years in administrative role, she manages and supports us in ways we didn't know we needed it.",
  },
  {
    name: "Danial Mahadi",
    title: "Clinical Psychologist",
    image: "/assets/LandingPage/Team/Danial.jpg",
    description:
      "I’m a licensed Clinical Psychologist with more than 10 years of experience in UK, Malaysia and Brunei. I strive to provide a safe, compassionate space for healing and growth by offering psychological assessments and therapy for individuals and families across all age groups facing emotional, behavioural as well as developmental challenges.",
  },
];

export default function Team() {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
    setFlippedIndex(index);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className={styles.teamSection}>
            <h2 className={styles.title}>Meet Our Team!</h2>
            <div className={styles.teamContainer}>
                {isMobile ? (
                <div className={styles.teamSlider}>
                    <Slider {...sliderSettings}>
                    {teamMembers.map((member, index) => (
                        <div className={styles.card} key={index}>
                            <div
                                className={`${styles.cardInner} ${
                                flippedIndex === index ? styles.flipped : ""
                                }`}
                            >
                                {/* FRONT SIDE */}
                                <div className={styles.cardFront}>
                                    <img src={member.image} alt={member.name} className={styles.image} />
                                    <div className={styles.textContainer}>
                                        <h3 className={styles.name}>{member.name}</h3>
                                        <p className={styles.titleText}>{member.title}</p>
                                        <button
                                        onClick={() => handleFlip(index)}
                                        className={styles.readMoreBtn}
                                        >
                                        {`Read ${member.name.split(" ")[0]}'s Bio →`}
                                        </button>
                                    </div>
                                </div>

                                {/* BACK SIDE */}
                                <div className={styles.cardBack}>
                                    <div className={styles.backContent}>
                                        <p className={styles.description}>{member.description}</p>
                                        {/* <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // prevent bubbling
                                                setFlippedIndex(null); // reset flip immediately
                                            }}
                                            className={styles.backBtn}
                                            >
                                            ← Back
                                        </button> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
                ) : (
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <img src={member.image} alt={member.name} className={styles.image} />
                                <div className={styles.textContainer}>
                                    <h3 className={styles.name}>{member.name}</h3>
                                    <p className={styles.titleText}>{member.title}</p>
                                </div>
                            </div>
                            <div className={styles.cardBack}>
                                <p className={styles.description}>{member.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}
