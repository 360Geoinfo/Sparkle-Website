import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { GrServices, GrResources } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, onClose }) => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isOpen);
        return () => {
        document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    const toggleBookingDropdown = () => {
        setIsBookingOpen(prev => !prev);
    };

    const toggleServicesDropdown = () => {
        setIsServicesOpen(prev => !prev);
    };

    const toggleResourcesDropdown = () => {
        setIsResourcesOpen(prev => !prev);
    };

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

            {/* Home */}
            <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                    `${styles.sidebarLink} ${isActive ? styles.activeLink : ''} ${styles.homeLink}`
                }
                >
                <AiOutlineHome className={styles.sidebarIcon} />
                Home
            </NavLink>

            {/* Booking Dropdown */}
            <div className={styles.sidebarDropdown}>
                <button
                    onClick={toggleBookingDropdown}
                    className={styles.sidebarDropdownToggle}
                >
                    <div className={styles.sidebarDropdownTitle}>
                        <IoCalendarOutline className={styles.sidebarIcon} />
                        Booking
                    </div>
                    <FaCaretDown
                    className={`${styles.sidebarDropdownArrow} ${isBookingOpen ? styles.open : ''}`}
                    />
                </button>

                {isBookingOpen && (
                    <div className={styles.sidebarDropdownMenu}>
                        <h3 className={styles.sidebarDropdownSubtitle}>
                            SPEECH THERAPY
                        </h3>
                        <NavLink
                            to="/Booking/Blog"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            <div className={styles.sidebarBookingArrow }>
                                Free 15 min Consultation <FaArrowRightLong/>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/Booking/Blog"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            <div className={styles.sidebarBookingArrow }>
                                Paid Consultation <FaArrowRightLong/>
                            </div>
                        </NavLink>

                        <h3 className={styles.sidebarDropdownSubtitle}>
                            CLINICAL PSYCHOLOGY
                        </h3>
                        <NavLink
                            to="/Booking/FQA"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            <div className={styles.sidebarBookingArrow }>
                                Free 15 min Consultation <FaArrowRightLong/>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/Booking/FQA"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            <div className={styles.sidebarBookingArrow }>
                                Paid Consultation <FaArrowRightLong/>
                            </div>
                        </NavLink>
                    </div>
                )}
            </div>

            {/* Services Dropdown */}
            <div className={styles.sidebarDropdown}>
                <button
                    onClick={toggleServicesDropdown}
                    className={styles.sidebarDropdownToggle}
                >
                    <div className={styles.sidebarDropdownTitle}>
                        <GrServices className={styles.sidebarIcon} />
                        Services
                    </div>
                        <FaCaretDown
                        className={`${styles.sidebarDropdownArrow} ${isResourcesOpen ? styles.open : ''}`}
                    />
                </button>

                {isServicesOpen && (
                    <div className={styles.sidebarDropdownMenu}>
                        <NavLink
                            to="/Services/SpeechTherapy"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            Speech Therapy
                        </NavLink>
                        <NavLink
                            to="/Services/ClinicalPsychology"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            Clinical Psychology
                        </NavLink>
                        <NavLink
                            to="/Services/Products"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/Services/Events"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            Events
                        </NavLink>
                        <NavLink
                            to="/Services/StudentAttachments"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            Student Attachments
                        </NavLink>
                        <NavLink
                            to="/Services/ClinicalSupervision"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            Clinical Supervision
                        </NavLink>
                    </div>
                )}
            </div>

            {/* Resources Dropdown */}
            <div className={styles.sidebarDropdown}>
                <button
                    onClick={toggleResourcesDropdown}
                    className={styles.sidebarDropdownToggle}
                >
                    <div className={styles.sidebarDropdownTitle}>
                        <GrResources className={styles.sidebarIcon} />
                        Resources
                    </div>
                    <FaCaretDown
                    className={`${styles.sidebarDropdownArrow} ${isResourcesOpen ? styles.open : ''}`}
                    />
                </button>

                {isResourcesOpen && (
                    <div className={styles.sidebarDropdownMenu}>
                    <NavLink
                        to="/Resources/Blog"
                        onClick={onClose}
                        className={({ isActive }) =>
                        isActive ? styles.activeLink : undefined
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/Resources/FQA"
                        onClick={onClose}
                        className={({ isActive }) =>
                        isActive ? styles.activeLink : undefined
                        }
                    >
                        FAQ
                    </NavLink>
                    </div>
                )}
            </div>
        </aside>

        {isOpen && (
            <div className={styles.sidebarOverlay} onClick={onClose}></div>
        )}
    </>
    );
};

export default Sidebar;
