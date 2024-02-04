import React, { useState } from 'react';
import './Footer.css'; // Ensure this path is correct

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FooterM = () => {
  const [showFooterMenu, setShowFooterMenu] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleFooterMenu = () => setShowFooterMenu(!showFooterMenu);
  const toggleMainMenu = () => setShowMainMenu(!showMainMenu);
  const toggleSignUp = () => setShowSignUp(!showSignUp);

  return (
    <footer className="footer-mobile">
      <div className={`footer-section ${showFooterMenu ? 'active' : ''}`}>
        <h3 onClick={toggleFooterMenu}>FOOTER MENU <FontAwesomeIcon icon={faAngleDown} className={`icon ${showFooterMenu ? 'rotate' : ''}`} /></h3>
        {showFooterMenu && (
          <div className="content">
            <a href="/about">About us</a>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/shipping">Shipping Policy</a>
            <a href="/returns">Return & Refund Policy</a>
            <a href="/affiliate">Affiliate Program</a>
            <a href="/search">Search</a>
          </div>
        )}
      </div>

      <div className={`footer-section ${showMainMenu ? 'active' : ''}`}>
        <h3 onClick={toggleMainMenu}>MAIN MENU <FontAwesomeIcon icon={faAngleDown} className={`icon ${showMainMenu ? 'rotate' : ''}`} /></h3>
        {showMainMenu && (
          <div className="content">
            <a href="/adidas">Adidas</a>
            <a href="/nike">Nike</a>
            <a href="/puma">Puma</a>
            <a href="/under-armour">Under Armour</a>
            <a href="/track-order">Track Your Order</a>
            <a href="/contact">Contact us</a>
          </div>
        )}
      </div>

      <div className={`footer-section ${showSignUp ? 'active' : ''}`}>
        <h3 onClick={toggleSignUp}>SIGN UP AND SAVE <FontAwesomeIcon icon={faAngleDown} className={`icon ${showSignUp ? 'rotate' : ''}`} /></h3>
        {showSignUp && (
            <div className="content">
                <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                <div className="email-input-container">
                    {/* SVG Email Icon */}
                    <svg className="email-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4h3C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20h30C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6h30ZM4 18V8L12 13L20 8V18h3Z" fill="#333"/>
                    </svg>
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>
        )}
      </div>

      <div className="footer-rights">
        <p>© 2024 NO LIMIT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterM;
