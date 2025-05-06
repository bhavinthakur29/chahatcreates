import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">{props.siteName}</div>
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
            </div>
        </footer>
    );
};

export default Footer; 