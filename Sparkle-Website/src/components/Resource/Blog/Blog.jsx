import React, { useState, useEffect } from 'react';
import styles from './Blog.module.css';
import Footer from "../../Footer/Footer";

const Blog = () => {
    // Add state for WordPress posts
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Add useEffect to fetch WordPress posts
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                setLoading(true);
                setError(null);

                const rssUrl = "https://sparkletherapycentre1.wordpress.com/feed/";

                // Multiple CORS proxy options as fallbacks
                const corsProxies = [
                    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(rssUrl)}`,
                    `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`,
                    `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`,
                ];

                let xmlText = "";
                let lastError = null;

                // Try each proxy until one works
                for (const proxyUrl of corsProxies) {
                    try {
                        const response = await fetch(proxyUrl, {
                            method: "GET",
                            headers: {
                                Accept: "application/rss+xml, application/xml, text/xml",
                            },
                        });

                        if (response.ok) {
                            xmlText = await response.text();
                            break;
                        } else {
                            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                        }
                    } catch (err) {
                        lastError = err;
                        continue;
                    }
                }

                if (!xmlText) {
                    throw lastError || new Error("All CORS proxies failed");
                }

                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, "text/xml");

                const items = xmlDoc.querySelectorAll("item");
                const blogPosts = [];

                // Get the first 4 posts (1 featured + 3 recent)
                for (let i = 0; i < Math.min(items.length, 4); i++) {
                    const item = items[i];

                    const title = item.querySelector("title")?.textContent || "Untitled";
                    const link = item.querySelector("link")?.textContent || "#";
                    const pubDate = item.querySelector("pubDate")?.textContent || "";
                    const guid = item.querySelector("guid")?.textContent || `post-${i}`;

                    // Get content for excerpt and image
                    let contentEncoded = "";
                    const contentSelectors = ["content\\:encoded", "encoded", "description", "summary"];

                    for (const selector of contentSelectors) {
                        const contentElement = item.querySelector(selector);
                        if (contentElement?.textContent) {
                            contentEncoded = contentElement.textContent;
                            break;
                        }
                    }

                    // Extract first image from content
                    const imageUrl = extractFirstImage(contentEncoded);
                    // Create excerpt from content
                    const excerpt = createExcerpt(contentEncoded);

                    blogPosts.push({
                        title: title.trim(),
                        link,
                        pubDate,
                        content: contentEncoded,
                        excerpt,
                        imageUrl,
                        guid,
                    });
                }

                setPosts(blogPosts);
            } catch (err) {
                console.error("Error fetching blog posts:", err);
                setError("Unable to load blog posts. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    // Helper function to extract first image from HTML content
    const extractFirstImage = (htmlContent) => {
        if (!htmlContent) return null;

        try {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlContent;
            const imgElements = tempDiv.querySelectorAll("img");

            for (const imgElement of imgElements) {
                const srcAttributes = ["src", "data-src", "data-lazy-src"];
                for (const attr of srcAttributes) {
                    const src = imgElement.getAttribute(attr);
                    if (src && (src.startsWith("http") || src.startsWith("//"))) {
                        return src.startsWith("//") ? `https:${src}` : src;
                    }
                }
            }
            return null;
        } catch (error) {
            return null;
        }
    };

    // Helper function to create excerpt from HTML content
    const createExcerpt = (htmlContent) => {
        try {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlContent;
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            const cleanText = plainText.replace(/\s+/g, " ").trim();
            return cleanText.length > 150 ? cleanText.substring(0, 150) + "..." : cleanText;
        } catch {
            return "Read more about this post...";
        }
    };

    // Helper function to format date
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    // Use WordPress data if available, otherwise fallback to static data
    const featuredPost = posts.length > 0 ? {
        title: posts[0].title,
        date: formatDate(posts[0].pubDate),
        description: posts[0].excerpt,
        image: posts[0].imageUrl || "/assets/Resources/Blog/Individual Talk Therapy (Children & Adults).webp",
        link: posts[0].link
    } : {
        title: "How Mindfulness Transforms Your Day",
        date: "August 25, 2025",
        description: "Discover how practicing mindfulness daily can drastically improve focus, reduce stress, and boost happiness. Dive into techniques that take just 5 minutes a day.",
        image: "/assets/Resources/Blog/Individual Talk Therapy (Children & Adults).webp",
        link: "#"
    };

    const recentPosts = posts.length > 1 ? posts.slice(1, 4).map(post => ({
        title: post.title,
        date: formatDate(post.pubDate),
        image: post.imageUrl || "/assets/Resources/Blog/recentPost/Play Therapy.webp",
        link: post.link
    })) : [
        {
            title: "Our therapist – Dayana",
            date: "May 28, 2024",
            image: "/assets/Resources/Blog/recentPost/Play Therapy.webp",
            link: "#"
        },
        {
            title: "Our therapist – Sayyidah",
            date: "May 28, 2024",
            image: "/assets/Resources/Blog/recentPost/PEERS® Social Skills Training.webp",
            link: "#"
        },
        {
            title: "Our therapist – Meela",
            date: "May 09, 2024",
            image: "/assets/Resources/Blog/recentPost/Parent Training.webp",
            link: "#"
        },
    ];

    return (
        <div className={styles.pageBackground}>
            <div className={styles.navbarSpacer}></div>
            <div className={styles.Header}>
                <h1 className={styles.headerTitle}>Sparkle's Blog - Our musings</h1>
                <p className={styles.headerSubTitle}>
                    Laugh & cry with us, as we sail through this journey we call life together..
                </p>
            </div>
            <section className={styles.blogLayout}>
                {/* Small image in the top-right corner */}
                <img
                    src="/assets/Resources/Blog/Decor/Smile.png"
                    alt="Decorative"
                    className={styles.cornerImage}
                />
                {/* LEFT: Featured Blog */}
                <div className={styles.featuredPost}>
                    <img src={featuredPost.image} alt="Featured" className={styles.featuredImage} />
                    <h2 className={styles.featuredTitle}>
                        {featuredPost.link !== "#" ? (
                            <a href={featuredPost.link} target="_blank" rel="noopener noreferrer">
                                {featuredPost.title}
                            </a>
                        ) : (
                            featuredPost.title
                        )}
                    </h2>
                    <p className={styles.featuredDate}>{featuredPost.date}</p>
                    <p className={styles.Publisher}>Published by Sparkle Therapy Center</p>
                    <p className={styles.featuredDesc}>{featuredPost.description}</p>
                    {loading && <p>Loading blog posts...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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
                                    <h3>
                                        {post.link !== "#" ? (
                                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                                                {post.title}
                                            </a>
                                        ) : (
                                            post.title
                                        )}
                                    </h3>

                                    <div className={styles.bottomText}>
                                        <p className={styles.recentDate}>{post.date}</p>
                                        <p className={styles.bottomPublisher}>Published by Sparkle Therapy Center</p>
                                    </div>
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