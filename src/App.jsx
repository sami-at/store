// Import BrowserRouter and Route components from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"


// Import your components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import FooterM from './components/Footer/Footerm';

// Import page components
import AdidasPage from './components/Pages/AdidasPage/AdidasPage';
import NikePage from './components/Pages/NikePage/NikePage';
import PumaPage from './components/Pages/PumaPage/PumaPage';
import UnderArmourPage from './components/Pages/UnderArmourPage/UnderArmourPage';
import TrackOrderPage from './components/Pages/TrackOrderPage/TrackOrderPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                {/* <HomePage /> */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/adidas" element={<AdidasPage />} />
                    <Route path="/nike" element={<NikePage />} />
                    <Route path="/puma" element={<PumaPage />} />
                    <Route path="/under-armour" element={<UnderArmourPage />} />
                    <Route path="/track-order" element={<TrackOrderPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
                <FooterM />
            </div>
        </Router>
    );
}

export default App;

