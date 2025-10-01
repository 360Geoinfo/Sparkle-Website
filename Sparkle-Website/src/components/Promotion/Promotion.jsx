import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Promotion.module.css";
import { FaWhatsapp, FaBullhorn } from "react-icons/fa";

const Promotion = () => {
  // Example: replace with real data from props, API, or CMS
  const promotions = [
    // {
    //   id: 1,
    //   title: "Promotion 1",
    //   description:
    //     "We welcome anyone interested in joining. Let us know if you'd like to be part of it!",
    //   img: "/assets/LandingPage/About/shooting star.webp",
    //   link: "https://wa.me/6738391407",
    // },
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
                className={styles.StarImage}
              />
              <div className={styles.cardWrapper}>
                <h4 className={styles.subtitle}>{promo.title}</h4>
                <p className={styles.description}>{promo.description}</p>
                <button className={styles.PromotionContactButton}>
                  <a
                    href={promo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className={styles.whatsAppIcon} /> Send your
                    application here
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
