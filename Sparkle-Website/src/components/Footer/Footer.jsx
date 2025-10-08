import React from "react";
import styles from "./Footer.module.css";
import { FaYoutube, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import VisitsCounter from "./VisitsCounter"; 

const Footer = () => {
  return (
    <>
    <section className={styles.footerSection}>
      <footer className={styles.footer}>
        <div className={styles.footerLeftContent}>
          <img
            className={styles.footerLogo}
            src="/assets/Logo/Sparkle logo.webp"
            alt="Sparkle Therapy Centre"
          />

          <div className={styles.footerText}>
            <p>
              Unit 11, First Floor, Block A,<br />
              Mim-Num Jaya Complex,<br />
              Kg Bebatik Kilanas, B2320,<br />
              Negara Brunei Darussalam<br />
            </p>
            <p>(+673) 8391407</p>
            <p>
              Tuesday - Saturday<br />
              9AM - 6PM
            </p>
          </div>
        </div>

        <div className={styles.footerRightContent}>
          <div className={styles.footerRightWrapper}>
            <h4 className={styles.footerTitle}>Connect With Us!</h4>
            <div className={styles.VisitsCounterWrapper}>
              <img
                className={styles.SmallCloudImage}
                src="/assets/LandingPage/Hero/Small Cloud.png"
                alt="Cloud"
              />
            
              <div className={styles.visitsCounterBox}>
                <VisitsCounter scope="all" />
              </div>
            </div>
          </div>

          <ul className={styles.footerLinks}>
            <li>
              <a
                href="https://www.youtube.com/@sparkletherapycentre"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <div className={styles.linkLeft}>
                  <FaYoutube /> Youtube
                </div>
                <img
                  className={styles.ArrowIcon}
                  src="/assets/LandingPage/Footer/Arrow up-right.png"
                  alt="Arrow Icon"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/sparkle_therapy_centre/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <div className={styles.linkLeft}>
                  <FaInstagram /> Instagram
                </div>
                <img
                  className={styles.ArrowIcon}
                  src="/assets/LandingPage/Footer/Arrow up-right.png"
                  alt="Arrow Icon"
                />
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/6738391407"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <div className={styles.linkLeft}>
                  <FaWhatsapp /> Whatsapp
                </div>
                <img
                  className={styles.ArrowIcon}
                  src="/assets/LandingPage/Footer/Arrow up-right.png"
                  alt="Arrow Icon"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com/maps?q=Sparkle+Therapy+Centre+Brunei"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <div className={styles.linkLeft}>
                  <FaMapMarkerAlt /> Location
                </div>
                <img
                  className={styles.ArrowIcon}
                  src="/assets/LandingPage/Footer/Arrow up-right.png"
                  alt="Arrow Icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      
    </section>

      {/* Powered by section */}
      <div className={styles.poweredBy}>
        <p>Powered by <strong>360 GEOINFO COMPANY</strong></p>
      </div>
    </>
  );
};

export default Footer;