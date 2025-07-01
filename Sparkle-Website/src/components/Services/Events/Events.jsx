import React from "react";
import styles from "./Events.module.css";
import { IoIosCalendar } from "react-icons/io";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";

const Events = () => {
  return (
    <>
    <Navbar />
    <section className={styles.eventsSection}>
        <div className={styles.topContent}>
          <h2 className={styles.topTitle}>Join Us</h2>
          <h3 className={styles.topSubTitle}>
            Stay Connected, Stay Informed!
          </h3>
        </div> 

        <div className={styles.eventsWrapper}>
            <div className={styles.eventCard}>
                <div className={styles.eventImageWrapper}>
                    <img
                        src="/assets/ServicesPage/Events/Purple Bg.png"
                        alt="Purple Bg"
                        className={styles.BgImage}
                    />
                    <img
                        src="/assets/ServicesPage/Events/Purple Line.png"
                        alt="Purple Line"
                        className={styles.LineImage}
                    />

                    <div className={styles.eventContentOpenDay}>
                        <h4 className={styles.eventTitle}>Sparkle's Open Day</h4>
                        <p className={styles.eventDate}>
                            <IoIosCalendar className={styles.DateIcon}/>
                            August 2025
                        </p>
                        <p className={styles.eventDescription}>
                            In conjunction with Sparkle's anniversary, we are happy to host our first open day! Please book your slot to ensure a dedicated time with our therapist for a chat and look around our space.
                        </p>
                        <button className={styles.eventButton}>
                            Book Now
                            <img 
                                className={styles.ArrowIcon}
                                src="/assets/LandingPage/Footer/Arrow up-right.png" 
                                alt="Arrow Icon" 
                            />
                        </button>
                    </div>
                </div>
            </div>
    
            <div className={styles.eventCard}>
                <div className={styles.eventImageWrapper}>
                    <img
                        src="/assets/ServicesPage/Events/Green Bg.png"
                        alt="Green Bg"
                        className={styles.BgImage}
                    />
                    <img
                        src="/assets/ServicesPage/Events/Green Line.png"
                        alt="Green Line"
                        className={styles.LineImage}
                    />

                    <div className={styles.eventContentAnniversary}>
                        <h4 className={styles.eventTitle}>Sparkle's Anniversary</h4>
                        <p className={styles.eventDate}>
                            <IoIosCalendar className={styles.DateIcon}/>
                            1 August 2025
                        </p>
                        <p className={styles.eventDescription}>
                            Another year has passed and it's Sparkle's anniversary again!
                            Thank you everyone for your support, loyalty and trust. 
                        </p>

                        <ul className={styles.eventPromotion}>SPECIAL PROMOTION DEAL
                            <li>
                                For <strong>NEW</strong> sparkle clients: Enjoy a <strong>DISCOUNTED CONSULTATION - LIMITED TIME</strong> only! 
                            </li>
                            <li>
                                For <strong>ACTIVE SPARKLERS</strong> -  Ask your therapist about <strong>EXCLUSIVE</strong> treats just for you!
                            </li>
                        </ul>

                        <button className={styles.eventButton}>
                            Book Now
                            <img 
                                className={styles.ArrowIcon}
                                src="/assets/LandingPage/Footer/Arrow up-right.png" 
                                alt="Arrow Icon" 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
};

export default Events;
