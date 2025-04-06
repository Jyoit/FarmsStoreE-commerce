import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/ProductList.css';
import products from '../../components/ProductData.js';
import { FiGrid, FiList, FiArrowDown } from 'react-icons/fi';
import fi_10407118 from "../assets/fi_10407118.png";
import rightImage from '../assets/wepik-export-20231129053636QBpy-2.png';
import leftImage from '../assets/wepik-export-20231129053636QBpy-1.png';


const ProductList = () => {

    const ProductCard = ({ product }) => {
        return (
          <div className="product-card">
            {/* Discount Badge - Only shows if discount exists */}
            {product.discount && (
              <div className="discount-badge">{product.discount}</div>
            )}
            
            {/* Product Image */}
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image" 
                onError={(e) => {
                  e.target.src = 'path-to-fallback-image.png'; // Add fallback image
                }}
              />
            </div>
            
            {/* Product Info */}
            <div className="product-info">
              <h4 className="product-title">{product.name}</h4>
              <p className="product-weight">{product.weight}</p>
              
              <div className="price-container">
                <span className="current-price">{product.currentPrice}</span>
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        );
      };

  return (
    <div className="grocery-store">
      <div className="grocery-header-container">
      {/* Left Image */}
      <div className="header-image left-image">
        <img src={leftImage} alt="Fresh vegetables" />
      </div>

      {/* Green Background Overlay */}
      <div className="green-overlay"></div>

      {/* Header Content */}
      <header className="store-header">
        <h1>Grocery Store</h1>
        <h2>Vegetables</h2>
      </header>

      {/* Right Image */}
      <div className="header-image right-image">
        <img src={rightImage} alt="Fresh produce" />
      </div>
    </div>

      <div className="store-container">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <div className="search-now">
            <h3>Search now</h3>
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button>Search</button>
            </div>
          </div>

          <div className="categories">
            <h3>Cartagories</h3>
            <ul>
              <li>Frutis: 35</li>
              <li>Vegetables: 15</li>
              <li>Spices: 6</li>
              <li>Beverages: 10</li>
              <li>Herbs: 34</li>
              <li>Fresh Nuts: 46</li>
            </ul>
          </div>

          <div className="price-filter">
            <h3>Filter By Price</h3>
            <input type="range" min="0" max="1000" />
            <div className="price-range">0 - 1000</div>
          </div>

          <div className="tags">
            <h3>Togs</h3>
            <div className="tag-container">
              <span className="tag">Organic</span>
              <span className="tag">Fresh</span>
              <span className="tag">Fruits</span>
              <span className="tag">Nutex</span>
              <span className="tag">Rice</span>
            </div>
          </div>

          <div className="best-selling">
            <h3>Best Selling</h3>
            <ul>
              <li>Yellow Capsicum
              <p>1 piece</p>
                  <div className="prices">
                    <span className="discounted-price">Re 90</span>
                    <span className="original-price">Re 180</span>
                  </div>
              </li>
              <li>Green Capsicum<p>1 piece</p>
                  <div className="prices">
                    <span className="discounted-price">Re 90</span>
                    <span className="original-price">Re 180</span>
                  </div></li>
              <li>Onion<p>500 gm</p>
                  <div className="prices">
                    <span className="discounted-price">Re 90</span>
                    <span className="original-price">Re 180</span>
                  </div></li>
            </ul>
          </div>
        </aside>

        {/* Main Products */}
        <main className="products-main">
        <div className="results-header-container">
      {/* Results Count */}
      <div className="results-count">
        Showing 1 - 9 of 50 results
      </div>

      {/* Sort Options */}
      <div className="sort-options">
        <div className="sort-by">
          <span className="sort-icon"><img src={fi_10407118} alt=' Farmers'/></span>
          <span className="sort-text">Sort By</span>
          <FiArrowDown className="arrow-icon" />
        </div>
        
        <div className="view-options">
          <FiGrid className="view-icon grid-view" />
          <FiList className="view-icon list-view" />
        </div>
      </div>
    </div>

          <div className="products-grid">
            
            <div className="product-table">
              
              
              <div className="table-row">

              <div className="products-container">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
                {/* <div className="product-card">
                  <h4>Potato</h4>
                  <p>1 kg</p>
                  <div className="prices">
                    <span className="original-price">Re 27</span>
                    <span className="discounted-price">Re 24</span>
                  </div>
                </div>
                
                <div className="product-card">
                  <h4>Cauliflower</h4>
                  <p>1 pc (Agenex. 400g - 600g)</p>
                  <div className="prices">
                    <span className="original-price">Re 16</span>
                    <span className="discounted-price">Re 60</span>
                  </div>
                </div>
                
                <div className="product-card">
                  <h4>Ovion - 5 kg</h4>
                  <p>5 kg</p>
                  <div className="prices">
                    <span className="original-price">Re 200</span>
                    <span className="discounted-price">Re 300</span>
                  </div>
                </div>
              </div>

              
              <div className="table-row">
                <div className="product-card">
                  <h4>Mushroom Button</h4>
                  <p>1 pc (Agenex. 190g - 200g)</p>
                  <div className="prices">
                    <span className="original-price">Re 45</span>
                    <span className="discounted-price">Re 66</span>
                  </div>
                </div>
                
                <div className="product-card">
                  <h4>Graves</h4>
                  <p>Grocer</p>
                  <div className="prices">
                    <span className="original-price">Re 40</span>
                    <span className="discounted-price">Re 60</span>
                  </div>
                </div>
                
                <div className="product-card">
                  <h4>English Cucumber</h4>
                  <p>200 g - 600 g</p>
                  <div className="prices">
                    <span className="original-price">Re 50</span>
                    <span className="discounted-price">Re 60</span>
                  </div>
                </div>*/}
              </div> 
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;