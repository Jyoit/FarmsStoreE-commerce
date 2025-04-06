import React from "react";
import "../../styles/Checkout2.css";
import { Link } from "react-router-dom";

const Checkout2 = () => {
  return (
    <div className="checkout-container">
      {/* Payment Methods Section */}
      <div className="payment-methods">
        <h2>Payment Methods</h2>
        <div className="method">
          <input type="radio" id="wallet" name="payment" />
          <label htmlFor="wallet">Wallet (₹1560)</label>
        </div>
        <div className="method">
          <input type="radio" id="apple-pay" name="payment" />
          <label htmlFor="apple-pay">Apple Pay</label>
        </div>
        <div className="method">
          <input type="radio" id="credit-card" name="payment" />
          <label htmlFor="credit-card">Credit/Debit Card</label>
        </div>
        <div className="method">
          <input type="radio" id="pay-on-delivery" name="payment" />
          <label htmlFor="pay-on-delivery">Pay On Delivery</label>
        </div>
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
        <Link to="/checkout/confirmation">
                  <button className="proceed-btn">
                    Proceed
                  </button>
                  </Link>
      </div>
    </div>
  );
};

export default Checkout2;