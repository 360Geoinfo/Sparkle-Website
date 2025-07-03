import React from "react";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <section className={styles.productsSection}>
        <div className={styles.topSection}>
            <h2 className={styles.topTitle}>Our products</h2>
            <h3 className={styles.topSubTitle}>
                Now Available at Sparkle!
            </h3>
        </div>

        <div className={styles.midSection}>
            <img
                src="/assets/ServicesPage/Products/thick and easy.webp"
                alt="Think & Easy"
                className={styles.productsImage}
            />

            <div className={styles.productsContent}>
                <div className={styles.productsContentTop}>
                    <h2 className={styles.title}>
                        Thick & Easy Thickener
                    </h2>
                    <h3 className={styles.subtitle}>
                        BND29 per tin
                    </h3>
                    <p className={styles.description}>
                        Thick & Easy is a trusted thickener designed to improve the texture of foods and 
                        drinks without altering their taste. Perfect for individuals with swallowing difficulties.
                    </p>
                </div>
                <div className={styles.productsContentBottom}>
                    <div className={styles.contentBottom}>
                        <img
                            src="/assets/ServicesPage/Products/temperatures.webp"
                            alt="Temperatures"
                            className={styles.productsSmallImages}
                        />
                        <h4>Thickens both hot & cold foods & liquids</h4>
                    </div>
                    <div className={styles.contentBottom}>
                        <img
                            src="/assets/ServicesPage/Products/calories.webp"
                            alt="Calories"
                            className={styles.productsSmallImages}
                        />
                        <h4>Low in calories & carbohydrates</h4>
                    </div>
                    <div className={styles.contentBottom}>
                        <img
                            src="/assets/ServicesPage/Products/vegan.webp"
                            alt="Plant-based"
                            className={styles.productsSmallImages}
                        />
                        <h4>Plant-based</h4>
                    </div>
                    <div className={styles.contentBottom}>
                        <img
                            src="/assets/ServicesPage/Products/halal logo bn.webp"
                            alt="Halal logo"
                            className={styles.halalProductsSmallImages}
                        />
                        <h4>HALAL certified</h4>
                    </div>
                </div>
            </div>

            <img
                src="/assets/ServicesPage/Products/playtime.webp"
                alt="Playtime"
                className={styles.playtimeImage}
            />
        </div>

        <div className={styles.bottomSection}>
            <h3 className={styles.topSubTitle}>
                Toys
            </h3>
            <div className={styles.toysContent}>
                <img
                    src="/assets/ServicesPage/Products/Toys.png"
                    alt="Toys"
                    className={styles.ToysImages}
                />
                <div className={styles.toysDescription}>
                    <p className={styles.description}>
                        We offer a selection of simple, engaging, and educational toys designed to support 
                        your child’s development through play. 
                    </p>
                    <p className={styles.description}>
                        Please check the availability with us via WhatsApp or during your visit.
                    </p>
                </div>
                <img
                    src="/assets/ServicesPage/Products/Lego-corner.webp"
                    alt="Toys"
                    className={styles.LegoImages}
                />
            </div>
        </div>
    </section>
  );
};

export default Products;
