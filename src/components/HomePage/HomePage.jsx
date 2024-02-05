import './HomePage.css'; // Ensure this path matches where you save your CSS

function HomePage() {
    return (
        <div className="home-page">
            {/* Adidas Section */}
            <section className="brand-section adidas">
                <h2>Adidas</h2>
                <p>Explore the latest Adidas sports gear and fashion.</p>
                <button>Shop Now</button>
            </section>

            {/* Nike Section */}
            <section className="brand-section nike">
                <h2>Nike</h2>
                <p>Discover innovative products and performance styles.</p>
                <button>Shop Now</button>
            </section>

            {/* Puma Section */}
            <section className="brand-section puma">
                <h2>Puma</h2>
                <p>Get your hands on the newest arrivals from Puma.</p>
                <button>Shop Now</button>
            </section>

            {/* Under Armour Section */}
            <section className="brand-section under-armour">
                <h2>Under Armour</h2>
                <p>Push your limits with Under Armour's sportswear.</p>
                <button>Shop Now</button>
            </section>
        </div>
    );
}

export default HomePage;
