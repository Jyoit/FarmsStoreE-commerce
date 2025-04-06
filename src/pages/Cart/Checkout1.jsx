import React from "react";
import "../../styles/Checkout1.css";
import { Link } from "react-router-dom";

const Checkout1 = () => {
  return (
    <div className="checkout-container">
      {/* Shipping Details Form */}
      <div className="shipping-details">
        <h2>Shipping Details</h2>
        <form>
          <label>
            Flat/Floor/House No.:
            <input type="text" placeholder="Enter Flat/Floor/House No." />
          </label>
          <label>
            Landmark:
            <input type="text" placeholder="Enter Landmark" />
          </label>
          <label>
            State:
            <input type="text" placeholder="Enter State" />
          </label>
          <label>
            Floor:
            <input type="text" placeholder="Enter Floor" />
          </label>
          <label>
            City:
            <input type="text" placeholder="Enter City" />
          </label>
          <label>
            Pincode:
            <input type="text" placeholder="Enter Pincode" />
          </label>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Price: ₹99</p>
        <p>Subtotal: ₹99</p>
        <p>Shipping Fees: ₹20</p>
        <p>Coupon/Discount: ₹40</p>
        <p>Taxes: ₹20</p>
        <p className="total">Total: ₹89</p>
        <p className="points">You Will Earn 16 TFS+ Points</p>
        <Link to="/checkout/payment">
          <button className="proceed-btn">
            Proceed
          </button>
          </Link>
      </div>
    </div>
  );
};

export default Checkout1;