import React from "react";
import "../styles/ProductDetails.css";
import apple from "../assets/apple.png"; // Replace with actual image path
// import appleSlice from ".../assets/appleSlice.png"; // Replace with actual image path
import videoThumbnail from "../assets/videoThumbnail.png"; // Replace with actual image path

const ProductDetails = () => {
  return (
    <div className="product-container">
      <div className="product-main">
        <div className="product-image">
          <img src={apple} alt="Red Apples" />
        </div>
        <div className="product-info">
          <h2>Red Apples</h2>
          <div className="rating">⭐⭐⭐⭐☆ (27)</div>
          <p className="price">
            <span className="current-price">Rs 2,000</span>
            <span className="old-price">Rs 2,500</span>
          </p>
          <p className="description">
            Short description about the product goes here.
          </p>
          <div className="quantity">
            <button>250gm</button>
            <button>500gm</button>
            <button>1kg</button>
          </div>
          <div className="subscription">
            <span>Subscription:</span>
            <input type="radio" name="subscription" /> Yes
            <input type="radio" name="subscription" /> No
          </div>
          <button className="add-to-cart">Add to Cart</button>
          <p className="category">Category: Fruits</p>
          <p className="tags">Tags: Fruits and vegetables, Categories</p>
          <div className="share-icons">🔗 📘 🐦 📷</div>
        </div>
      </div>
      <div className="product-details">
        <h3>Product Details</h3>
        <p>Description about apples goes here...</p>
        <h3>Key Features</h3>
        <p>Details about key features...</p>
        <h3>Ingredients</h3>
        <p>List of ingredients...</p>
      </div>
      <div className="product-video">
        <img src={videoThumbnail} alt="Video Thumbnail" className="video-thumbnail" />
        <button className="play-button">▶</button>
      </div>
    </div>
  );
};

export default ProductDetails;