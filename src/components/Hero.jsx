import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Video Editor Portfolio - Chahat Sharma</h1>
                <p className="hero-subtitle">Bringing Stories to Life with Creativity and Expertise</p>
                <p className="hero-description">
                    A passionate video editor with 5 years of experience in crafting engaging and impactful visuals.
                    Explore my work and see how I can elevate your content with precision and creativity.
                </p>
                <div className="hero-buttons">
                    <a href="#portfolio" className="cta-button primary">View My Work</a>
                    <a href="#contact" className="cta-button secondary">Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero; 