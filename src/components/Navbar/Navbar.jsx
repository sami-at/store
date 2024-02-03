import {  useState } from 'react';
import NavDrawer from '../NavDrawer/NavDrawer';
import './Navbar.css';


function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    
    return (
        <nav className="navbar">
            <div className="navbar-menu-icon" onClick={toggleDrawer}>
                <span>&#9776;</span> {/* Menu Icon */}
            </div>
            

            <div className="navbar-logo">
                <img src="src\images\Logo.png" alt="Store Logo" />
            </div>
            
            <div className={`navbar-drawer ${isDrawerOpen ? 'open' : ''}`}>
                <a href="/adidas">Adidas</a>
                <a href="/nike">Nike</a>
                <a href="/puma">Puma</a>
                <a href="/under-armour">Under Armour</a>
            </div>

            <div className="navbar-cart">
                <i className="fa fa-shopping-cart"></i>
            </div>

            <NavDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </nav>
    );
}

export default Navbar;
