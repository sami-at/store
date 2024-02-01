import React from 'react';
import './Footer.css'; // Ensure you have a CSS file for styling
// Import your email icon if you have one
// import { EmailIcon } from './path-to-your-icons'; // Adjust the path as necessary

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>FOOTER MENU</h4>
                <a href="/about">About us</a>
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/shipping">Shipping Policy</a>
                <a href="/returns">Return & Refund Policy</a>
                <a href="/affiliate">Affiliate Program</a>
                <a href="/search">Search</a>
            </div>

            <div className="footer-section">
                <h4>MAIN MENU</h4>
                <a href="/adidas">Adidas</a>
                <a href="/nike">Nike</a>
                <a href="/puma">Puma</a>
                <a href="/under-armour">Under Armour</a>
                <a href="/track-order">Track Your Order</a>
                <a href="/contact">Contact us</a>
            </div>

            <div className="footer-section">
                <h4>SIGN UP AND SAVE</h4>
                <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                <div className="email-input-container">
                    {/* SVG Email Icon */}
                    <svg className="email-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM4 18V8L12 13L20 8V18H4Z" fill="#333"/>
                    </svg>
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>

            <div className="footer-rights">
                <p>© 2024 NO LIMIT. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
