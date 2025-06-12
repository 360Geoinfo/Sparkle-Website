import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
              <li className={styles.navbarItem}>
                <NavLink to="/" className={({ isActive }) => isActive ? "home-link active-link" : "home-link"}>
                  Home
                </NavLink>
              </li>
              <li className={styles.navbarItem}>
                <NavLink to="/Booking" className={({ isActive }) => isActive ? "booking-link active-link" : "booking-link"}>
                  Booking
                </NavLink>
              </li>
              <li className={styles.navbarItem}>
                <NavLink to="/Services" className={({ isActive }) => isActive ? "services-link active-link" : "services-link"}>
                  Services
                </NavLink>
              </li>
              <li className={styles.navbarItem}>
                <NavLink to="/Resources" className={({ isActive }) => isActive ? "resources-link active-link" : "resources-link"}>
                  Resources
                </NavLink>
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