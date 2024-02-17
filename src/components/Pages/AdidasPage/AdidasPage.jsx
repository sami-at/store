// AdidasPage.jsx
import { useState, useEffect } from 'react';
import './AdidasPage.css'; // Ensure you have this CSS file for styles
import ScrollToTop from '../../ScrollToTop';

const AdidasPage = () => {
  const initialProducts = [
    { id: 1, name: 'Adidas Running Shoes', price: 100, oldPrice: 120, imgSrc: 'path/to/image1.jpg' },
    { id: 2, name: 'Adidas Football', price: 30, oldPrice: '', imgSrc: 'path/to/image2.jpg' },
    { id: 3, name: 'Adidas Basketball', price: 60, oldPrice: 80, imgSrc: 'path/to/image3.jpg' },
    { id: 4, name: 'Adidas Casual Shoes', price: 80, oldPrice: '', imgSrc: 'path/to/image4.jpg' },
  ];

  useEffect(() => {
    document.title = 'ADIDAS - Section'; // Set the title here

  }, []);

  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    sortProducts();
  }, [sortOption]);

  const sortProducts = () => {
    let sortedProducts = [...initialProducts];
    switch (sortOption) {
      case 'bestSelling':
        // Assume this is the default order or implement your own logic
        break;
      case 'alphaAZ':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alphaZA':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'priceLowHigh':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="adidas-page">
      <div className="sidebar">
        <ul>
          <li>Running</li>
          <li>Football</li>
          <li>Basketball</li>
          {/* More categories as needed */}
        </ul>
      </div>
      <div className="main-content">
        <div className="filter-sort">
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="bestSelling">Best Selling</option>
            <option value="alphaAZ">Alphabetically, A-Z</option>
            <option value="alphaZA">Alphabetically, Z-A</option>
            <option value="priceLowHigh">Price, low to high</option>
            <option value="priceHighLow">Price, high to low</option>
          </select>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.imgSrc} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="product-price">{`$${product.price}`}
                {product.oldPrice && <span className="product-old-price"> ${product.oldPrice}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AdidasPage;
