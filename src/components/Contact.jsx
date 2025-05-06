import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiRevision } from 'react-icons/bi';
import { BsPlayCircle } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Information</h2>
            <p className="section-subtitle">Ready to collaborate on your next project? Get in touch with me!</p>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-details">
                        <a href="mailto:chahatsharma1470@gmail.com" target='_blank'>
                            <div className="contact-item">
                                <MdEmail className="contact-icon" />
                                <p>
                                    chahatsharma1470@gmail.com
                                </p>
                            </div>
                        </a>
                        <a href="https://wa.me/918899620911" target='_blank'>
                            <div className="contact-item">
                                <FaWhatsapp className="contact-icon" />
                                <p>
                                    Whatsapp <em style={{ color: 'gray' }}>[contact hidden]</em>
                                </p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/chahat-sharma-2ab711241/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <div className="contact-item">
                                <FaLinkedin className="contact-icon" />
                                <span>Linkedin</span>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/chahat.creates/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <div className="contact-item">
                                <FaInstagram className="contact-icon" />
                                <span>Instagram</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h3>FAQ</h3>
                    <p className="faq-subtitle">Frequently Asked Questions:</p>
                    <div className="faq-list">
                        <div className="faq-item">
                            <div className="faq-header">
                                <IoMdTime className="faq-icon" />
                                <h4>What is your turnaround time?</h4>
                            </div>
                            <p>I typically deliver projects within 2-7 days, depending on complexity and requirements.</p>
                        </div>
                        <div className="faq-item">
                            <div className="faq-header">
                                <RiMoneyDollarCircleLine className="faq-icon" />
                                <h4>What are your prices?</h4>
                            </div>
                            <p>My pricing varies based on the project type and scope. Contact me for a <strong>custom quote</strong>.</p>
                        </div>
                        <div className="faq-item">
                            <div className="faq-header">
                                <BiRevision className="faq-icon" />
                                <h4>Do you offer revisions?</h4>
                            </div>
                            <p>Yes, I offer <strong>up to 1-2 free revisions</strong> to ensure the final video meets your expectations.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Reel Section */}
            <div className="video-reel">
                <h3>Video Reel</h3>
                <p>
                    Check out my highlight reel for a quick overview of my work.
                    <a
                        href="https://www.instagram.com/reel/C6yiOaEpUJc/?igsh=MWlqNDE1MWFpaDd4Yg=="
                        className="watch-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsPlayCircle className="reel-icon" /> Watch the Reel
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact; 