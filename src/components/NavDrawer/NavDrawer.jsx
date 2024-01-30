import React from 'react';
import './NavDrawer.css';

function NavDrawer({ isOpen, onClose }) {
    return (
        <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>&times;</button>
            <a href="/adidas">Adidas</a>
            <a href="/nike">Nike</a>
            <a href="/puma">Puma</a>
            <a href="/under-armour">Under Armour</a>
        </div>
    );
}

export default NavDrawer;
