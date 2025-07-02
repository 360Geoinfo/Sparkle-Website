import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';
import styles from './Navbar.module.css';
import { FaCaretDown } from "react-icons/fa";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);

  const toggleHomeDropdown = (e) => {
    e.preventDefault();
    setIsHomeOpen(prev => !prev);
  };

  const toggleBookingDropdown = (e) => {
    e.preventDefault();
    setIsBookingOpen(prev => !prev);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => setIsDropdownOpen(false);
  const closeHomeDropdown = () => setIsHomeOpen(false);
  const closeBookingDropdown = () => setIsBookingOpen(false);
  const closeServicesDropdown = () => setIsServicesOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        setIsHomeOpen(false);
        setIsBookingOpen(false);
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
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 1025);
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
              <li className={styles.homeNavbarItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles.navButtonLink} ${isActive ? styles.homeActive : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Booking Navigation */}
              <li className={styles.navbarItem}>
                <div className={`${styles.dropdown} ${styles.bookingDropdown}`}>
                  <button
                    onClick={toggleBookingDropdown}
                    className={`${styles.navButton} ${isBookingOpen ? styles.bookingActive : ''}`}
                  >
                    <span className={styles.linkWithIcon}>
                      Booking <FaChevronDown className={`${styles.dropdownArrow} ${isBookingOpen ? styles.open : ''}`} />
                    </span>
                  </button>

                  {isBookingOpen && (
                    <div className={styles.dropdownContent}>
                      <NavLink
                        to="/Booking"
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.dropdownActive : ''}`
                        }
                        onClick={() => setIsBookingOpen(false)}
                      >
                        Main Booking
                      </NavLink>
                      {/* You can add more booking-related links here */}
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