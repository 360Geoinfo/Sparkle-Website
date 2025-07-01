import React from 'react';
import styles from './Blog.module.css';
import Footer from '../../../../Element/Footer/Footer';

const Blog = () => {
    const featuredPost = {
        title: "How Mindfulness Transforms Your Day",
        date: "August 25, 2025",
        description: "Discover how practicing mindfulness daily can drastically improve focus, reduce stress, and boost happiness. Dive into techniques that take just 5 minutes a day.",
        image: "/assets/Resources/Blog/Individual Talk Therapy (Children & Adults).webp",
    };

    const recentPosts = [
        {
            title: "Our therapist – Dayana",
            date: "May 28, 2024",
            image: "/assets/Resources/Blog/recentPost/Play Therapy.webp",
        },
        {
            title: "Our therapist – Sayyidah",
            date: "May 28, 2024",
            image: "/assets/Resources/Blog/recentPost/PEERS® Social Skills Training.webp",
        },
        {
            title: "Our therapist – Meela",
            date: "May 09, 2024",
            image: "/assets/Resources/Blog/recentPost/Parent Training.webp",
        },
    ];

    return (
        <div className={styles.pageBackground}>
            <div className={styles.navbarSpacer}></div>
            <div className={styles.Header}>
                <h1 className={styles.headerTitle}>Sparkle's Blog - Our musings</h1>
                <p className={styles.headerDescription}>
                    Laugh & cry with us, as we sail through this journey we call life together..
                </p>
            </div>
            <section className={styles.blogLayout}>
                {/* Small image in the top-right corner */}
                <img
                    src="/assets/Resources/Blog/Decor/Smile.png" // Change to your image path
                    alt="Decorative"
                    className={styles.cornerImage}
                />

                {/* LEFT: Featured Blog */}
                <div className={styles.featuredPost}>
                    <img src={featuredPost.image} alt="Featured" className={styles.featuredImage} />
                    <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                    <p className={styles.featuredDate}>{featuredPost.date}</p>
                    <p className={styles.Publisher}>Published by Sprakle Therapy Center</p>
                    <p className={styles.featuredDesc}>{featuredPost.description}</p>
                </div>

                {/* Divider Line */}
                <div className={styles.verticalDivider}></div>

                {/* RIGHT: Recent Posts */}
                <div className={styles.recentPosts}>
                    {recentPosts.map((post, index) => (
                        <div key={index}>
                            <div className={styles.recentPost}>
                                <img src={post.image} alt={post.title} className={styles.thumbImage} />
                                <div className={styles.recentText}>
                                    <p className={styles.recentDate}>{post.date}</p>
                                    <h3>{post.title}</h3>
                                    <p className={styles.Publisher}>Published by Sprakle Therapy Center</p>
                                </div>
                            </div>
                            {index !== recentPosts.length - 1 && <div className={styles.horizontalDivider}></div>}
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Blog;
