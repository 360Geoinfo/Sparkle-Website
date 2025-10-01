import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import Sidebar from './Sidebar';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Group all dropdown states in one object
  const [dropdownStates, setDropdownStates] = useState({
    home: false,
    speechTherapy: false,
    clinicalPsychology: false,
    booking: false,
    services: false,
    resources: false,
    speech: false,
    clinical: false,
    promotion: false,
  });

  // Toggle main dropdowns (booking, services, etc.)
  const toggleMainDropdown = (key) => {
    setDropdownStates((prev) => {
      const reset = { home: false, speechTherapy: false, clinicalPsychology: false, booking: false, services: false, resources: false, promotion: false, };
      return { ...prev, ...reset, [key]: !prev[key] };
    });
  };

  // // Toggle sub-dropdowns (speech, clinical)
  // const toggleSubDropdown = (key) => {
  //   setDropdownStates((prev) => {
  //     const reset = { speech: false, clinical: false };
  //     return { ...prev, ...reset, [key]: !prev[key] };
  //   });
  // };

  const closeAllDropdowns = () => {
    setDropdownStates({
      home: false,
      speechTherapy: false,
      clinicalPsychology: false,
      booking: false,
      services: false,
      resources: false,
      speech: false,
      clinical: false,
      promotion: false,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 1180);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <section className={styles.navbarSection}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLinks}>
            <NavLink to="/" className={styles.navbarLogo} onClick={closeMobileNav}>
              <img
                className={styles.navbarLogoImage}
                src="/assets/Logo/Sparkle logo black.webp"
                alt="Sparkle Logo"
              />
            </NavLink>
            <ul className={styles.menuItems}>
              {/* Home */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.homeDropdown}`}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${styles.navButton} ${isActive ? styles.homeActive : ''}`
                    }
                  >
                    <span className={styles.linkWithIconHome}>Home</span>
                  </NavLink>
                </div>
              </li>

              {/* Speeach Therapy */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.speechTherapyDropdown}`}>
                  <button
                    onClick={() => toggleMainDropdown('speechTherapy')}
                    className={`${styles.navButton} ${dropdownStates.speechTherapy ? styles.speechTherapyActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Speech Therapy
                      <FaCaretDown className={`${styles.dropdownArrow} ${dropdownStates.speechTherapy ? styles.open : ''}`} />
                    </span>
                  </button>
                  
                  {dropdownStates.speechTherapy && (
                    <div className={styles.dropdownContentSpeechTherapy}>
                      <NavLink to="/Services/SpeechTherapy" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>About</NavLink>
                      <a
                        href="https://calendly.com/sparkle-therapy-centre/free-15-mins-slt-consult"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dropdownLink}
                        onClick={closeAllDropdowns}
                      >
                        Free 15 min Consultation
                      </a>

                      <a
                        href="https://calendly.com/sparkle-therapy-centre/1-hour-speech-therapy-consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dropdownLink}
                        onClick={closeAllDropdowns}
                      >
                        Paid Consultation
                      </a>
                    </div>
                  )}
                </div>
              </li>

              {/* Clinical Psychology */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.clinicalPsychologyDropdown}`}>
                  <button
                    onClick={() => toggleMainDropdown('clinicalPsychology')}
                    className={`${styles.navButton} ${dropdownStates.clinicalPsychology ? styles.clinicalPsychologyActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Clinical Psychology
                      <FaCaretDown className={`${styles.dropdownArrow} ${dropdownStates.clinicalPsychology ? styles.open : ''}`} />
                    </span>
                  </button>
                  
                  {dropdownStates.clinicalPsychology && (
                    <div className={styles.dropdownContentClinicalPsychology}>
                      <NavLink to="/Services/ClinicalPsychology" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>About</NavLink>
                      <a
                        href="https://calendly.com/sparkle-therapy-centre/free-15-minute-clinical-psychology-consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dropdownLink}
                        onClick={closeAllDropdowns}
                      >
                        Free 15 min Consultation
                      </a>

                      <a
                        href="https://calendly.com/sparkle-therapy-centre/1-hour-clinical-psychology-consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dropdownLink}
                        onClick={closeAllDropdowns}
                      >
                        Paid Consultation
                      </a>
                    </div>
                  )}
                </div>
              </li>

              {/* Services */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.servicesDropdown}`}>
                  <button
                    onClick={() => toggleMainDropdown('services')}
                    className={`${styles.navButton} ${dropdownStates.services ? styles.servicesActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Services
                      <FaCaretDown className={`${styles.dropdownArrow} ${dropdownStates.services ? styles.open : ''}`} />
                    </span>
                  </button>
                  
                  {dropdownStates.services && (
                    <div className={styles.dropdownContentServices}>
                      <NavLink to="/Services/Products" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Products</NavLink>
                      <NavLink to="/Services/Events" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Events</NavLink>
                      <NavLink to="/Services/StudentAttachments" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Student Attachments</NavLink>
                      <NavLink to="/Services/ClinicalSupervision" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Clinical Supervision</NavLink>
                    </div>
                  )}
                </div>
              </li>

              {/* Resources */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.resourcesDropdown}`}>
                  <button
                    onClick={() => toggleMainDropdown('resources')}
                    className={`${styles.navButton} ${dropdownStates.resources ? styles.resourcesActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Resources
                      <FaCaretDown className={`${styles.dropdownArrow} ${dropdownStates.resources ? styles.open : ''}`} />
                    </span>
                  </button>
                  {dropdownStates.resources && (
                    <div className={styles.dropdownContentResources}>
                      <NavLink to="/Resources/Blog" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Blog</NavLink>
                      <NavLink to="/Resources/FAQ" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>FAQ</NavLink>
                    </div>
                  )}
                </div>
              </li>

              {/* Promotion */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.promotionDropdown}`}>
                  <NavLink
                    to="/Promotion/Promotion"
                    className={({ isActive }) =>
                      `${styles.navButton} ${isActive ? styles.promotionActive : ''}`
                    }
                  >
                    <span className={styles.linkWithIconpromotion}>Promotion</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobile && <Sidebar isOpen={isMobileNavOpen} onClose={closeMobileNav} />}
      {isMobile && (
        <div className={styles.navbarMobileInner}>
          <NavLink to="/" className={styles.navbarMobileLogoLink} onClick={closeMobileNav}>
            <img className={styles.navbarMobileLogoImage} src="/assets/Logo/Sparkle logo black.webp" alt="Sparkle Logo" />
          </NavLink>
          <button className={styles.navbarHamburger} onClick={toggleMobileNav}><FaBars /></button>
        </div>
      )}
    </section>
  );
};

export default Navbar;
