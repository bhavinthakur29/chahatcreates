import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <h2>Testimonials</h2>
            <p className="section-subtitle">Here are some of the feedback from my clients:</p>

            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p>"Working with Chahat Sharma has been an absolute game-changer for my YouTube channel. Her video editing and motion graphics skills have taken my content to the next level, making my videos more engaging and visually stunning. She understands my vision perfectly and always delivers beyond expectations. Highly recommended!"</p>
                        <div className="testimonial-author">
                            <div className="author-initial">R</div>
                            <div className="author-info">
                                <h4>Rahul Mehta</h4>
                                <p>YouTube Creator</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p>"Chahat is a magician when it comes to video editing and motion graphics. She has helped our brand create high-quality promotional videos that captivate our audience and drive engagement. Her attention to detail, creativity, and quick turnaround make her an invaluable asset to any marketing team!"</p>
                        <div className="testimonial-author">
                            <div className="author-initial">N</div>
                            <div className="author-info">
                                <h4>Neha Kapoor</h4>
                                <p>Digital Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p>"Chahat's work speaks for itself! She transformed our brand's video content with her incredible editing skills and eye-catching motion graphics. Our social media engagement has skyrocketed thanks to her creativity. If you're looking for a professional who truly understands visual storytelling, Chahat is the one!"</p>
                        <div className="testimonial-author">
                            <div className="author-initial">A</div>
                            <div className="author-info">
                                <h4>Amit Verma</h4>
                                <p>Founder, AV Productions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 