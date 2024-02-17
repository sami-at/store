import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css'; // Ensure this path matches where you save your CSS file
import ScrollToTop from '../ScrollToTop';

function HomePage() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to the brand page
  const navigateToBrand = (brandPath) => {
    navigate(brandPath);
  };

  return (
    <div className="home-page">
      <div className="brand-section adidas" onClick={() => navigateToBrand('/adidas')}>
        <div className="brand-overlay">
          <h2>Adidas</h2>
          <p>Explore the latest Adidas sports gear and fashion.</p>
          <button onClick={() => navigateToBrand('/adidas')}>Shop Now</button>
        </div>
      </div>
      <div className="brand-section nike" onClick={() => navigateToBrand('/nike')}>
        <div className="brand-overlay">
          <h2>Nike</h2>
          <p>Discover innovative products and performance styles.</p>
          <button onClick={() => navigateToBrand('/nike')}>Shop Now</button>
        </div>
      </div>
      <div className="brand-section puma" onClick={() => navigateToBrand('/puma')}>
        <div className="brand-overlay">
          <h2>Puma</h2>
          <p>Get your hands on the newest arrivals from Puma.</p>
          <button onClick={() => navigateToBrand('/puma')}>Shop Now</button>
        </div>
      </div>
      <div className="brand-section under-armour" onClick={() => navigateToBrand('/under-armour')}>
        <div className="brand-overlay">
          <h2>Under Armour</h2>
          <p>Push your limits with Under Armour's sportswear.</p>
          <button onClick={() => navigateToBrand('/under-armour')}>Shop Now</button>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default HomePage;
