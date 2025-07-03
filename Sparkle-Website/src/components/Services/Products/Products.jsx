import React from "react";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <section className={styles.productsSection}>
        <div className={styles.topContent}>
            <h2 className={styles.topTitle}>Our products</h2>
            <h3 className={styles.topSubTitle}>
                Now Available at Sparkle!
            </h3>
        </div>

        <div className={styles.midContent}>
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
                    < div className={styles.temperatures}>
                        <img
                            src="/assets/ServicesPage/Products/temperatures.webp"
                            alt="Temperatures"
                            className={styles.productsSmallImages}
                        />
                        <h4>Thickens both hot & cold foods & liquids</h4>
                    </div>
                    < div className={styles.calories}>
                        <img
                            src="/assets/ServicesPage/Products/calories.webp"
                            alt="Calories"
                            className={styles.productsSmallImages}
                        />
                        <h4>Low in calories & carbohydrates</h4>
                    </div>
                    < div className={styles.vegan}>
                        <img
                            src="/assets/ServicesPage/Products/vegan.webp"
                            alt="Plant-based"
                            className={styles.productsSmallImages}
                        />
                        <h4>Plant-based</h4>
                    </div>
                    < div className={styles.halalLogo}>
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
    </section>
  );
};

export default Products;
