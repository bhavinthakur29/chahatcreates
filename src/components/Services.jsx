import React from 'react';

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-image">
                        <img src="/images/graphic-designing.png" alt="Graphic Designing" />
                    </div>
                    <h3>Video Editing</h3>
                    <p>Creating engaging and professional video content with seamless transitions and perfect timing.</p>
                </div>
                <div className="service-card">
                    <div className="service-image">
                        <img src="/images/video-editing.png" alt="Video Editing" />
                    </div>
                    <h3>Motion Graphics</h3>
                    <p>Adding dynamic motion graphics and animations to enhance visual storytelling.</p>
                </div>
                <div className="service-card">
                    <div className="service-image">
                        <img src="/images/motion-graphics.png" alt="Motion Graphics" />
                    </div>
                    <h3>Color Grading</h3>
                    <p>Professional color correction and grading to achieve the perfect look and mood.</p>
                </div>
                <div className="service-card">
                    <div className="service-image">
                        <img src="/images/visual-story-telling.png" alt="Visual Story Telling" />
                    </div>
                    <h3>Visual Story Telling</h3>
                    <p>Crafting compelling visual narratives that engage and inspire your audience.</p>
                </div>
            </div>
        </section>
    );
};

export default Services; 