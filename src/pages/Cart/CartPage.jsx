import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import '../../styles/CartPage.css';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Apples", price: 69, discount: 99, image: "apple.png", qty: 1, delivery: "16 min" },
    { id: 2, name: "Blue Berries", price: 69, discount: 99, image: "blueberry.png", qty: 1, delivery: "Sat 6 Dec" },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart ({cartItems.length} items)</h2>
      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-meta">1 Box</p>
                  <p>
                    <span className="item-price">Rs. {item.price}</span>
                    <span className="item-discount">Rs. {item.discount}</span>
                  </p>
                  <p className="item-delivery">Delivery: {item.delivery}</p>
                </div>
              </div>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <Minus size={14} />
                </button>
                <span className="quantity-value">{item.qty}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>Rs. 99</span></div>
          <div className="summary-row"><span>Shipping</span><span>Rs. 20</span></div>
          <div className="summary-row"><span>Discount</span><span>-Rs. 40</span></div>
          <div className="summary-row"><span>Taxes</span><span>Rs. 20</span></div>
          <div className="summary-row summary-total"><span>Total</span><span>Rs. 89</span></div>
          <Link to="/checkout/address">
          <button className="proceed-btn">
            Proceed
          </button>
          </Link>
        </div>
      </div>

      {/* Delivery Partner Tip */}
      <div className="delivery-tip">
        <h3>Delivery Partner Tip</h3>
        <p>Your kindness means a lot! 100% of your tip will go directly to your delivery partner.</p>
        <div className="tip-options">
          {[20, 30, 50].map(tip => (
            <button key={tip} className="tip-btn">
              Rs {tip}
            </button>
          ))}
          <button className="tip-btn">
            Custom
          </button>
        </div>
      </div>

      {/* Try FarmerOne */}
      <div className="farmerone">
        <h3>Try FarmerOne</h3>
        <p>Get extra discounts & free delivery on orders above Rs 199</p>
        <button className="farmerone-btn">
          Buy Now @ Rs 199 for 3 Months
        </button>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h3>Related Products</h3>
        <div className="product-grid">
          {["Potato", "Cauliflower", "Onion", "Mushroom"].map((product, index) => (
            <div key={index} className="product-item">
              <img src={`${product.toLowerCase()}.png`} alt={product} />
              <p className="product-name">{product}</p>
              <p className="product-meta">1kg</p>
              <p className="product-price">Rs 45</p>
              <button className="product-btn">
                <ShoppingCart size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}