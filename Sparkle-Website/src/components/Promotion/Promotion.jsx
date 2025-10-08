import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Promotion.module.css";
import { FaWhatsapp, FaBullhorn } from "react-icons/fa";

const Promotion = () => {
  const promotions = [
    {
      id: 1,
      title: "Psychologist Trainee Special!",
      description:
        "50% OFF, For Clinical Psychology Trainee Promotion until 28th February 2026",
      img: "/assets/LandingPage/About/shooting star.webp",
      link: "https://wa.me/6738391407",
    },
    {
      id: 2,
      title: "World Mental Health Day 2025",
      description: [
        "15% OFF, For psychological services by our Clinical Psychologist",
        "50% OFF, For psychological services by our Psychologist Trainee",
      ],
      img: "/assets/Promotions/World Mental Health Day 2025.jpeg",
      link: "https://wa.me/6738391407",
    },
  ];

  return (
    <>
      <Navbar />
      <section className={styles.supervisionSection}>
        <h2 className={styles.title}>Promotions</h2>

        {promotions.length > 0 ? (
          promotions.map((promo) => (
            <div key={promo.id} className={styles.card}>
              <img
                src={promo.img}
                alt={promo.title}
                className={styles.PromotionsImage}
              />
              <div className={styles.cardWrapper}>
                <h4 className={styles.subtitle}>{promo.title}</h4>

                {Array.isArray(promo.description) ? (
                  promo.description.map((text, index) => (
                    <p key={index} className={styles.description}>
                      {text}
                    </p>
                  ))
                ) : (
                  <p className={styles.description}>{promo.description}</p>
                )}

                <button className={styles.PromotionContactButton}>
                  <a
                    href={promo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className={styles.whatsAppIcon} /> Click here for
                    more info
                  </a>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noPromoBox}>
            <FaBullhorn className={styles.noPromoIcon} />
            <p className={styles.noPromoText}>
              There are no promotions at the moment. Please check back later!
            </p>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Promotion;
