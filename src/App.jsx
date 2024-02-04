import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage'; // Adjust the import path based on your file structure
import Footer from './components/Footer/Footer';
import FooterM from './components/Footer/Footerm';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <HomePage /> {/* This renders the HomePage content */}
            <Footer />
            <FooterM />
        </div>
    );
}

export default App;
