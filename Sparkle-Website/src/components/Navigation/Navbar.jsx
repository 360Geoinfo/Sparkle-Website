import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBookingSubOpen, setIsBookingSubOpen] = useState(false);
  const [isSpeechSubOpen, setIsSpeechSubOpen] = useState(false);
  const [isBookingHovered, setIsBookingHovered] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);

  // Toggle functions
  const toggleHomeDropdown = (e) => {
    e.preventDefault();
    setIsHomeOpen(prev => !prev);
  };

  const toggleBookingDropdown = (e) => {
    e.preventDefault();
    setIsBookingOpen(prev => !prev);
    if (isBookingSubOpen) setIsBookingSubOpen(false); // close subdropdown when main toggled
  };

  const toggleBookingSubDropdown = (e) => {
    e.preventDefault();
    setIsBookingSubOpen(prev => !prev);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(prev => !prev);
  };

  // Close functions
  const closeDropdown = () => setIsDropdownOpen(false);
  const closeHomeDropdown = () => setIsHomeOpen(false);
  const closeBookingDropdown = () => {
    setIsBookingOpen(false);
    setIsBookingSubOpen(false);
  };
  const closeServicesDropdown = () => setIsServicesOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        setIsHomeOpen(false);
        closeBookingDropdown();
        setIsServicesOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkIsMobile(); // Set initial value
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
              {/* Home Navigation */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.homeDropdown}`}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${styles.navButton} ${isActive ? styles.homeActive : ''}`
                    }
                  >
                    <span className={styles.linkWithIconHome}>
                      Home
                    </span>
                  </NavLink>
                </div>
              </li>


              {/* Booking Navigation */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.bookingDropdown}`}>
                  <button
                    onClick={toggleBookingDropdown}
                    className={`${styles.navButton} ${isBookingOpen ? styles.bookingActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Booking
                      <FaChevronDown
                        className={`${styles.dropdownArrow} ${isBookingOpen ? styles.open : ''}`}
                      />
                    </span>
                  </button>

                  {(isBookingOpen || isBookingHovered) && (
                    <div
                      className={styles.dropdownContentBooking}
                      onMouseEnter={() => setIsBookingHovered(true)}
                      onMouseLeave={() => setIsBookingHovered(false)}
                      style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >

                      {/* === Speech Therapy Section === */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setIsSpeechSubOpen(prev => !prev);
                            if (isBookingSubOpen) setIsBookingSubOpen(false);
                          }}
                          className={`${styles.dropdownLink} ${isSpeechSubOpen ? styles.dropdownActive : ''}`}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            backgroundColor: '#F08A29',
                            color: '#fff',
                            fontWeight: '600',
                            border: 'none',
                            padding: '0.6rem 1rem',
                            borderRadius: '0.75rem',
                            cursor: 'pointer',
                          }}
                        >
                          Speech Therapy
                        </button>

                        {isSpeechSubOpen && (
                          <div className={`${styles.subDropdownContent} ${isSpeechSubOpen ? styles.subDropdownContentOpen : ''}`}>
                            <div style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#333' }}>
                              Speech Therapy
                            </div>

                            <NavLink
                              to="/Booking/SpeechTherapy/Free 15 min Consultation"
                              className={({ isActive }) =>
                                `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                              }
                              onClick={closeBookingDropdown}
                            >
                              Free 15 min Consultation
                            </NavLink>

                            <NavLink
                              to="/Booking/SpeechTherapy/Paid Consultation"
                              className={({ isActive }) =>
                                `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                              }
                              onClick={closeBookingDropdown}
                            >
                              Paid Consultation
                            </NavLink>
                          </div>
                        )}
                      </div>

                      {/* === Clinical Psychology Section === */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setIsBookingSubOpen(prev => !prev);
                            if (isSpeechSubOpen) setIsSpeechSubOpen(false);
                          }}
                          className={`${styles.dropdownLink} ${isBookingSubOpen ? styles.dropdownActive : ''}`}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            backgroundColor: '#F08A29',
                            color: '#fff',
                            fontWeight: '600',
                            border: 'none',
                            padding: '0.6rem 1rem',
                            borderRadius: '0.75rem',
                            cursor: 'pointer',
                          }}
                        >
                          Clinical Psychology
                        </button>

                        {isBookingSubOpen && (
                          <div className={styles.subDropdownContent}>
                            <div style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#333' }}>
                              Clinical Psychology
                            </div>

                            <NavLink
                              to="/Booking/ClinicalPsychology/Free 15 min Consultation"
                              className={({ isActive }) =>
                                `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                              }
                              onClick={closeBookingDropdown}
                            >
                              Free 15 min Consultation
                            </NavLink>

                            <NavLink
                              to="/Booking/ClinicalPsychology/Paid Consultation"
                              className={({ isActive }) =>
                                `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                              }
                              onClick={closeBookingDropdown}
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

              {/* Service Navigation */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.servicesDropdown}`}>
                  <button
                    onClick={toggleServicesDropdown}
                    className={`${styles.navButton} ${isServicesOpen ? styles.servicesActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Services <FaChevronDown className={`${styles.dropdownArrow} ${isServicesOpen ? styles.open : ''}`} />
                    </span>
                  </button>

                  {isServicesOpen && (
                    <div className={styles.dropdownContentServices}>
                      <NavLink
                        to="/Services/SpeechTherapy"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Speech Therapy
                      </NavLink>

                      <NavLink
                        to="/Services/ClinicalPsychology"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Clinical Psychology
                      </NavLink>

                      <NavLink
                        to="/Services/Products"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Products
                      </NavLink>

                      <NavLink
                        to="/Services/Events"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Events
                      </NavLink>

                      <NavLink
                        to="/Services/StudentAttachments"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Student Attachments
                      </NavLink>

                      <NavLink
                        to="/Services/ClinicalSupervision"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Clinical Supervision
                      </NavLink>
                    </div>
                  )}
                </div>
              </li>

              {/* Resource Navigation */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.resourcesDropdown}`}>
                  <button
                    onClick={toggleDropdown}
                    className={`${styles.navButton} ${isDropdownOpen ? styles.resourcesActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Resources <FaChevronDown className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.open : ''}`} />
                    </span>
                  </button>

                  {isDropdownOpen && (
                    <div className={styles.dropdownContent}>
                      <NavLink
                        to="/Resources/Blog"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Blog
                      </NavLink>

                      <NavLink
                        to="/Resources/FQA"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        FQA
                      </NavLink>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Render sidebar outside the button */}
      {isMobile && (
        <Sidebar isOpen={isMobileNavOpen} onClose={closeMobileNav} />
      )}

      {isMobile && (
        <div className={styles.navbarMobileInner}>
          <NavLink to="/" className={styles.navbarMobileLogoLink} onClick={closeMobileNav}>
            <img
              className={styles.navbarMobileLogoImage}
              src="/assets/Logo/Sparkle logo black.webp"
              alt="Sparkle Logo" />
          </NavLink>
          <button className={styles.navbarHamburger} onClick={toggleMobileNav}>
            <FaBars />
          </button>
        </div>
      )}
    </section>
  );
};

export default Navbar;
