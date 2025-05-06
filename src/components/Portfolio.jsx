import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <div className="portfolio-item">
                    <div className="portfolio-image">
                        <img src="/images/video-editing.png" alt="Video Editing" />
                    </div>
                    <div className="portfolio-info">
                        <h3>Motion Graphics</h3>
                        <p>Animation & Effects</p>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-image">
                        <img src="/images/graphic-designing.png" alt="Graphic Designing" />
                    </div>
                    <div className="portfolio-info">
                        <h3>Video Editing</h3>
                        <p>Commercial & Brand Videos</p>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-image">
                        <img src="/images/motion-graphics.png" alt="Motion Graphics" />
                    </div>
                    <div className="portfolio-info">
                        <h3>Social Media</h3>
                        <p>Content Creation</p>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-image">
                        <img src="/images/visual-story-telling.png" alt="Motion Graphics" />
                    </div>
                    <div className="portfolio-info">
                        <h3>Visual Storytelling</h3>
                        <p>Effects & Animation</p>
                    </div>
                </div>
            </div>

            <div className="social-embeds">
                <div className="embed-container">
                    <h3>Long Form Content - YouTube Videos</h3>
                    <div className="youtube-grid">
                        <div className="youtube-embed">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/-mPDbejpyvk"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="youtube-embed">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/sy12rFCHYys"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="youtube-embed">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/zV7qI-tfzks"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="youtube-embed">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/ijeHMRqyY6k"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="embed-container">
                    <h3>Short Form Content - Reels & Shorts</h3>
                    <div className="instagram-grid">
                        <div className="instagram-embed">
                            <iframe
                                src="https://www.instagram.com/p/C6d7I8LRYUD/embed"
                                width="100%"
                                height="450"
                                allowTransparency="true"
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                                title="Instagram Embed"
                            ></iframe>
                        </div>
                        <div className="instagram-embed">
                            <iframe
                                src="https://www.instagram.com/p/CripdVZpwoQ/embed"
                                width="100%"
                                height="450"
                                allowTransparency="true"
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                                title="Instagram Embed"
                            ></iframe>
                        </div>
                        <div className="instagram-embed">
                            <iframe
                                src="https://www.instagram.com/p/DEPvwpEzqN2/embed"
                                width="100%"
                                height="450"
                                allowTransparency="true"
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                                title="Instagram Embed"
                            ></iframe>
                        </div>
                        <div className="instagram-embed">
                            <iframe
                                src="https://www.instagram.com/p/CutY893LG1x/embed"
                                width="100%"
                                height="450"
                                allowTransparency="true"
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                                title="Instagram Embed"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio; 