// Testimonials.jsx
import React from "react";
import styles from "./Testimonials.module.css";
import { testimonials } from "./TestimonialsData";
import TestimonialCard from "./TestimonialsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.topContent}>
        <h2 className={styles.title}>Testimonials</h2>
        <h3 className={styles.subTitle}>Stories of progress and transformation</h3>
      </div>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
