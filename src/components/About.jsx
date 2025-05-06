import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <div className="profile-image">
                            <img src="/images/profile.png" alt="Profile" />
                        </div>
                        <p>
                            I'm a creative professional with a passion for video editing and visual storytelling. With 5 years of experience in post-production and motion graphics, I bring a unique perspective to every project.
                        </p>
                        <p>
                            My goal is to create engaging content that not only meets client expectations but also creates meaningful connections with the audience.
                        </p>
                    </div>
                    <div className="skills">
                        <h2>My Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <img src="/images/photoshop.png" alt="Photoshop" />
                                <span>Photoshop</span>
                            </div>
                            <div className="skill-item">
                                <img src="/images/adobe-illustrator.png" alt="Illustrator" />
                                <span>Illustrator</span>
                            </div>
                            <div className="skill-item">
                                <img src="/images/ae.png" alt="After Effects" />
                                <span>After Effects</span>
                            </div>
                            <div className="skill-item">
                                <img src="/images/pr.png" alt="Premiere Pro" />
                                <span>Premiere Pro</span>
                            </div>
                            <div className="skill-item">
                                <img src="/images/canva.png" alt="Canva" />
                                <span>Canva</span>
                            </div>
                            <div className="skill-item">
                                <img src="/images/capcut.png" alt="CapCut" />
                                <span>CapCut</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 