import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo" onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>
                    {props.siteName}
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/chahat-sharma-2ab711241/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/chahat.creates/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://wa.me/918899620911" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
                <p>&copy; 2024 Chahat Creates. All rights reserved.</p>
                <p style={{ fontSize: '12px', color: 'gray' }}>Designed, Developed & Maintained by <br /><a href="https://www.linkedin.com/in/bhavinthakur/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'cyan', fontWeight: 'bold' }}>Bhavin Thakur</a>.</p>
            </div>
        </footer>
    );
};

export default Footer; 