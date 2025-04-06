import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import { FiShoppingCart, FiUser, FiMapPin } from "react-icons/fi";
import "../../styles/Header.css";
import headerLogo from "../../assets/Header.png"; // Correct image import

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token"); // Check if user is logged in

  // const handleAccountClick = () => {
  //   if (isAuthenticated) {
  //     navigate("/account"); // Redirect to My Account if logged in
  //   } else {
  //     navigate("/login"); // Redirect to Login if not logged in
  //   }
  // };
  return (
    <header className="header">
      <div className="header-container">
      {/* Wrap logo in Link to make it clickable */}
      <Link to="/" className="logo-container">
        <img src={headerLogo} alt="The Farmers Store" className="logo" />
      </Link>
      
      <div className="location-container">
        <FiMapPin className="icon" />
        <span className="location-text">
          Delivery to <strong>Home 2</strong> - Pitampura, New Delhi
        </span>
      </div>
      
      <div className="actions-container">
        {/* Wrap cart in Link */}
        <Link to="/cart" className="cart-container">
          <FiShoppingCart className="icon" />
          <span className="cart-text">My Cart</span>
        </Link>
        
        {/* Wrap login in Link */}
        <Link className="login-container" to="/account">
            <FiUser className="icon" />
            <span className="login-text">My Account</span>
          </Link>
      </div>
      </div>
    <nav className="category-nav">
    <div className="nav-container">
      <Link to="/category/category"><button><span className="nav-title">Shop by Category</span></button></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Learn</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/mode-2-order">Mode 2 Order</Link>
        <Link to="/subscription">Subscription</Link>
      </div>
    </div>
  </nav>
    </header>




  );
};

export default Header;