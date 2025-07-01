import React from 'react';
import styles from './Footer.module.css';
import { FaYoutube, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Column - Logo & Address */}
        <div className={styles.footerLeft}>
        <img
            src="/assets/Logo/Sparkle logo.webp"
            alt="Sparkle Therapy Centre Logo"
            className={styles.logo}
        />
        <p>Unit 11, First Floor, Block A,<br />
            Mim-Nun Jaya Complex,<br />
            Kg Bebatik Kilanas, BF2320,<br />
            Negara Brunei Darussalam</p>
        <p>(+673) 8391407</p>
        <p>Tuesday – Saturday<br />9AM – 6PM</p>
        </div>

        {/* Right Column - Social Links */}
        <div className={styles.footerRight}>
          <h3>Connect With Us!</h3>
          <ul className={styles.socialLinks}>
            <li><FaYoutube /> Youtube <FiExternalLink /></li>
            <li><FaInstagram /> Instagram <FiExternalLink /></li>
            <li><FaWhatsapp /> Whatsapp <FiExternalLink /></li>
            <li><FaMapMarkerAlt /> Location <FiExternalLink /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
