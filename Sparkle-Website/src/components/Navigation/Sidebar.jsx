import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { GrServices, GrResources } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSpeech } from "react-icons/lu";
import { RiPsychotherapyLine } from "react-icons/ri";
import { FaBullhorn } from "react-icons/fa";
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, onClose }) => {
    const [isSpeechTherapyOpen, setIsSpeechTherapyOpen] = useState(false);
    const [isClinicalPsychologyOpen, setIsClinicalPsychologyOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

     useEffect(() => {
        document.body.classList.toggle('no-scroll', isOpen);
        if (!isOpen) {
        // Close all dropdowns when sidebar closes
        setIsSpeechTherapyOpen(false);
        setIsClinicalPsychologyOpen(false);
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
        }
        return () => {
        document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    const toggleSpeechTherapyDropdown = () => {
        setIsSpeechTherapyOpen(prev => !prev);
    };

    const toggleClinicalPsychologyDropdown = () => {
        setIsClinicalPsychologyOpen(prev => !prev);
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

            {/* Speech Therapy Dropdown */}
            <div className={styles.sidebarDropdown}>
                <button
                    onClick={toggleSpeechTherapyDropdown}
                    className={styles.sidebarDropdownToggle}
                >
                    <div className={styles.sidebarDropdownTitle}>
                        <LuSpeech className={styles.sidebarIcon} />
                        SpeechTherapy
                    </div>
                        <FaCaretDown
                        className={`${styles.sidebarDropdownArrow} ${isSpeechTherapyOpen ? styles.open : ''}`}
                    />
                </button>

                {isSpeechTherapyOpen && (
                    <div className={styles.sidebarDropdownMenu}>
                        <NavLink
                            to="/Services/SpeechTherapy"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            About
                        </NavLink>
                        <a
                            href="https://calendly.com/sparkle-therapy-centre/free-15-mins-slt-consult"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className={styles.sidebarBookingArrow}
                        >
                            Free 15 min Consultation <FaArrowRightLong />
                        </a>
                        <a
                            href="https://calendly.com/sparkle-therapy-centre/1-hour-speech-therapy-consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className={styles.sidebarBookingArrow}
                        >
                            1 hour Consultation <FaArrowRightLong />
                        </a>
                    </div>
                )}
            </div>

            {/* Clinical Psychology Dropdown */}
            <div className={styles.sidebarDropdown}>
                <button
                    onClick={toggleClinicalPsychologyDropdown}
                    className={styles.sidebarDropdownToggle}
                >
                    <div className={styles.sidebarDropdownTitle}>
                        <RiPsychotherapyLine className={styles.sidebarIcon} />
                        Clinical Psychology
                    </div>
                        <FaCaretDown
                        className={`${styles.sidebarDropdownArrow} ${isClinicalPsychologyOpen ? styles.open : ''}`}
                    />
                </button>

                {isClinicalPsychologyOpen && (
                    <div className={styles.sidebarDropdownMenu}>
                        <NavLink
                            to="/Services/ClinicalPsychology"
                            onClick={onClose}
                            className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                            }
                        >
                            About
                        </NavLink>
                        <a
                            href="https://calendly.com/sparkle-therapy-centre/free-15-minute-clinical-psychology-consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className={styles.sidebarBookingArrow}
                        >
                            Free 15 min Consultation <FaArrowRightLong />
                        </a>
                        <a
                            href="https://calendly.com/sparkle-therapy-centre/1-hour-clinical-psychology-consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className={styles.sidebarBookingArrow}
                        >
                            1 hour Consultation <FaArrowRightLong />
                        </a>
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
                        className={`${styles.sidebarDropdownArrow} ${isServicesOpen ? styles.open : ''}`}
                    />
                </button>

                {isServicesOpen && (
                    <div className={styles.sidebarDropdownMenu}>
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
                        to="/Resources/FAQ"
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

            {/* Promotion */}
            <NavLink
                to="/Promotion"
                onClick={onClose}
                className={({ isActive }) =>
                    `${styles.sidebarLink} ${isActive ? styles.activeLink : ''} ${styles.promotionLink}`
                }
                >
                <FaBullhorn className={styles.sidebarIcon} />
                Promotion
            </NavLink>
        </aside>

        {isOpen && (
            <div className={styles.sidebarOverlay} onClick={onClose}></div>
        )}
    </>
    );
};

export default Sidebar;
