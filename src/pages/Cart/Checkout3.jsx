import React from "react";
import "../../styles/Checkout3.css";
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Checkout3 = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <nav className="breadcrumb">
        <span>Choose Payment Method</span>
        <span>Shipping &gt; Payment &gt; <strong>Review</strong></span>
      </nav>
      
      <div className="checkout-content">
        <div className="left-section">
          <div className="address-box">
            <h3>Address Details</h3>
            <p><strong>Theresa Webb</strong></p>
            <p>2972 Westheimer Rd, Santa Ana, Illinois 85486</p>
            <p>(319) 555-0115</p>
            <button className="change-address">Change/ Add Address</button>
          </div>

          <div className="payment-box">
            <h3>Payment Method</h3>
            <div className="card-details">
              <FaRegCreditCard className="card-icon" />
              <div>
                <p className="card-type">Credit/ Debit Card</p>
                <p>Card Number: 1232 ******** 2762 (Visa)</p>
                <p>Card Holder: <strong>Arjun Rawat</strong></p>
                <p>Expired: May 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="offers-box">
            <p><strong>Avail Offers & Coupons</strong></p>
            <p>Avail offers and coupons on your order</p>
          </div>
          
          <div className="price-summary">
            <div className="price-row"><span>Price</span><span>Rs. 99</span></div>
            <div className="price-row"><span>Subtotal</span><span>Rs. 99</span></div>
            <div className="price-row"><span>Shipping Fees</span><span>Rs. 20</span></div>
            <div className="price-row discount"><span>Coupon/ Discount</span><span>Rs. 40</span></div>
            <div className="price-row"><span>Taxes</span><span>Rs. 20</span></div>
            <div className="total"><span>Total</span><span><strong>Rs. 89</strong></span></div>
          </div>
          
          <div className="reward-points">
            <BsFillCheckCircleFill className="reward-icon" />
            <p>You Will Earn <strong>16 TFS+ Points</strong></p>
            <p>Use it on your next purchase</p>
          </div>
          
          <button className="proceed-btn">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout3;
