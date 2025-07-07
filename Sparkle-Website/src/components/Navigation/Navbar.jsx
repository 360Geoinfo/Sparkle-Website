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
    booking: false,
    services: false,
    resources: false,
    speech: false,
    clinical: false
  });

  // Toggle main dropdowns (booking, services, etc.)
  const toggleMainDropdown = (key) => {
    setDropdownStates((prev) => {
      const reset = { home: false, booking: false, services: false, resources: false };
      return { ...prev, ...reset, [key]: !prev[key] };
    });
  };

  // Toggle sub-dropdowns (speech, clinical)
  const toggleSubDropdown = (key) => {
    setDropdownStates((prev) => {
      const reset = { speech: false, clinical: false };
      return { ...prev, ...reset, [key]: !prev[key] };
    });
  };

  const closeAllDropdowns = () => {
    setDropdownStates({
      home: false,
      booking: false,
      services: false,
      resources: false,
      speech: false,
      clinical: false
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
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 1024);
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

              {/* Booking */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.bookingDropdown}`}>
                  <button
                    onClick={() => toggleMainDropdown('booking')}
                    className={`${styles.navButton} ${dropdownStates.booking ? styles.bookingActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Booking
                      <FaCaretDown className={`${styles.dropdownArrow} ${dropdownStates.booking ? styles.open : ''}`} />
                    </span>
                  </button>
                  {dropdownStates.booking && (
                    <div className={styles.dropdownContentBooking}>
                      {/* Speech Therapy */}
                      <div className={styles.columnGap}>
                        <button
                          onClick={() => toggleSubDropdown('speech')}
                          className={`${styles.dropdownLink} ${dropdownStates.speech ? styles.dropdownActive : ''} ${styles.bookingButton}`}
                        >
                          <div className={styles.dropdownTitle}>
                            Speech Therapy
                            <span style={{ marginLeft: 'auto' }}>
                              {dropdownStates.speech ? <FaCaretLeft /> : <FaCaretRight />}
                            </span>
                          </div>
                        </button>
                        {dropdownStates.speech && (
                          <div className={styles.subDropdownContent}>
                            <div className={styles.subDropdownLabel}>Speech Therapy</div>
                            <NavLink
                              to="/Booking/SpeechTherapy/Free 15 min Consultation"
                              className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`}
                              onClick={closeAllDropdowns}
                            >
                              Free 15 min Consultation
                            </NavLink>
                            <NavLink
                              to="/Booking/SpeechTherapy/Paid Consultation"
                              className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`}
                              onClick={closeAllDropdowns}
                            >
                              Paid Consultation
                            </NavLink>
                          </div>
                        )}
                      </div>

                      {/* Clinical Psychology */}
                      <div className={styles.columnGap}>
                        <button
                          onClick={() => toggleSubDropdown('clinical')}
                          className={`${styles.dropdownLink} ${dropdownStates.clinical ? styles.dropdownActive : ''} ${styles.bookingButton}`}
                        >
                          <div className={styles.dropdownTitle}>
                            Clinical Psychology
                            <span style={{ marginLeft: 'auto' }}>
                              {dropdownStates.clinical ? <FaCaretLeft /> : <FaCaretRight />}
                            </span>
                          </div>
                        </button>
                        {dropdownStates.clinical && (
                          <div className={styles.subDropdownContent}>
                            <div className={styles.subDropdownLabel}>Clinical Psychology</div>
                            <NavLink
                              to="/Booking/ClinicalPsychology/Free 15 min Consultation"
                              className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`}
                              onClick={closeAllDropdowns}
                            >
                              Free 15 min Consultation
                            </NavLink>
                            <NavLink
                              to="/Booking/ClinicalPsychology/Paid Consultation"
                              className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`}
                              onClick={closeAllDropdowns}
                            >
                              Paid Consultation
                            </NavLink>
                          </div>
                        )}
                      </div>
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
                      <NavLink to="/Services/SpeechTherapy" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Speech Therapy</NavLink>
                      <NavLink to="/Services/ClinicalPsychology" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Clinical Psychology</NavLink>
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
                    <div className={styles.dropdownContent}>
                      <NavLink to="/Resources/Blog" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>Blog</NavLink>
                      <NavLink to="/Resources/FAQ" className={({ isActive }) => `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`} onClick={closeAllDropdowns}>FAQ</NavLink>
                    </div>
                  )}
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
