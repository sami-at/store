// ScrollToTop.js
import  { useState, useEffect } from 'react';
import { ArrowUp } from 'react-feather';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      // Show button when page is scrolled more than 400px
      setShowScroll(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showScroll && (
        <button onClick={scrollTop} style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          fontSize: '2rem',
          borderRadius: '50%',
          textAlign: 'center',
          zIndex: 1000,
          cursor: 'pointer',
          backgroundColor: '#353535',
          color: 'white',
          border: 'none',
          display:"grid",
          placeContent: "center"
        }}>
            <ArrowUp />
    
        </button>
      )
  );
};



export default ScrollToTop;
