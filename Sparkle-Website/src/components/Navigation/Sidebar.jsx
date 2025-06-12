import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import styles from './Sidebar.module.css';


const Sidebar = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

  return (
    <>
        <aside
            className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
            role="navigation"
            inert={!isOpen}
            >
            <button
                className={styles.sidebarCloseBtn}
                onClick={onClose}
                aria-label="Close sidebar"
            >
                <FaTimes />
            </button>

            <img
                className={styles.sidebarLogo}
                src="/assets/Logo/Sparkle logo black.webp"
                alt="Sparkle Logo"
            />

            <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
                }
            >
                <AiOutlineHome className={styles.sidebarIcon} />
                Home
            </NavLink>

            <NavLink
                to="/booking"
                onClick={onClose}
                className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
                }
            >
                <IoCalendarOutline className={styles.sidebarIcon} />
                Booking
            </NavLink>

            <NavLink
                to="/services"
                onClick={onClose}
                className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
                }
            >
                <GrServices className={styles.sidebarIcon} />
                Services
            </NavLink>

            <NavLink
                to="/resources"
                onClick={onClose}
                className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
                }
            >
                <GrResources className={styles.sidebarIcon} />
                Resources
            </NavLink>
            </aside>

            {isOpen && (
                <div className={styles.sidebarOverlay} onClick={onClose}></div>
            )}
        </>
  );
};

export default Sidebar;