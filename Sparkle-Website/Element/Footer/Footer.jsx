import React from "react";
import styles from "./Footer.module.css";
import { FaYoutube, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
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
                    <p >
                        (+673) 8391407<br />
                    </p>
                    <p>
                        Tuesday - Saturday<br />
                        9AM - 6PM
                    </p>
                </div>
            </div>

            <div className={styles.footerRightContent}>
                <h4 className={styles.footerTitle}>Connect With Us!</h4>
                <ul className={styles.footerLinks}>
                    <li>
                        <div className={styles.footerLink}>
                            <FaYoutube /> Youtube
                        </div>
                        <img 
                            className={styles.ArrowIcon}
                            src="/assets/LandingPage/Footer/Arrow up-right.png" 
                            alt="Arrow Icon" 
                        />
                    </li>
                    <li>
                        <div className={styles.footerLink}>
                            <FaInstagram /> Instagram
                        </div>
                        <img 
                            className={styles.ArrowIcon}
                            src="/assets/LandingPage/Footer/Arrow up-right.png" 
                            alt="Arrow Icon" 
                        />
                    </li>
                    <li>
                        <div className={styles.footerLink}>
                            <FaWhatsapp /> Whatsapp
                        </div>
                        <img 
                            className={styles.ArrowIcon}
                            src="/assets/LandingPage/Footer/Arrow up-right.png" 
                            alt="Arrow Icon" 
                        />
                    </li>
                    <li>
                        <div className={styles.footerLink}>
                            <FaMapMarkerAlt /> Location
                        </div>
                        <img 
                            className={styles.ArrowIcon}
                            src="/assets/LandingPage/Footer/Arrow up-right.png" 
                            alt="Arrow Icon" 
                        />
                    </li>
                </ul>
            </div>

        </footer>
    </section>
  );
};

export default Footer;
