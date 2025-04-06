import React from "react";
import "../../styles/Footer.css";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiUser, 
  FiHeart, 
  FiTag, 
  FiMessageSquare, 
  FiCreditCard, 
  FiHelpCircle, 
  FiLock, 
  FiFileText, 
  FiXCircle, 
  FiRefreshCw, 
  FiInfo, 
  FiBook, 
  FiPhoneCall, 
  FiAward, 
  FiShoppingCart 
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Newsletter Section */}
      <div className="newsletter">
        <h3>SUBSCRIBE TO NEWSLETTER</h3>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter Email Address" />
          <button>
            <FiMail />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Contacts Section */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p><FiMapPin /> Shop 4, Videocon Building, Pali Village, Bandra West, Mumbai</p>
          <p><FiPhone /> +91 981-900-0300, 987 658 7654</p>
          <p><FiMail /> contact@thefarmersstore.in</p>
          <p><FiClock /> Work Hours: 8:00am - 12pm</p>
        </div>

        {/* Account & Help Center Section */}
        <div className="footer-column">
          <h4>Account</h4>
          <p><FiUser /> My Orders</p>
          <p><FiHeart /> My Wishlist</p>
          <p><FiTag /> Latest Offers</p>
          <p><FiMessageSquare /> Feedback</p>
          <p><FiCreditCard /> Payments</p>
        </div>
<div className="footer-column">
          <h4>Help Center</h4>
          <p><FiUser /> Your Account</p>
          <p><FiLock /> Privacy Policy</p>
          <p><FiFileText /> Terms and Conditions</p>
          <p><FiXCircle /> Cancellation Policy</p>
          <p><FiRefreshCw /> Refund & Return</p>
          </div>
        {/* Useful Links Section */}
        <div className="footer-column">
          <h4>Useful links</h4>
          <p><FiInfo /> About Us</p>
          <p><FiBook /> Blog</p>
          <p><FiPhoneCall /> Contact</p>
          <p><FiAward /> Deal of the day</p>
          <p><FiShoppingCart /> Best Seller</p>
        </div>
      </div>

      {/* Copyright & Social Links */}
      <div className="footer-bottom">
        <p>© 2023, All Rights Reserved by <span>The Farmer's Store</span></p>
        <div className="social-icons">
          <a href="#"><FiPhoneCall /></a>
          <a href="#"><FiMail /></a>
          <a href="#"><FiMapPin /></a>
          <a href="#"><FiClock /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
