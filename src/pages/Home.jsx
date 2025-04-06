import React from 'react';
import { FiSearch, FiHeadphones, FiTag, FiTruck, FiCreditCard } from 'react-icons/fi';
import { FaArrowRight, FaArrowLeft ,  FaHeart, FaPlay, FaClock, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const features = [
    {
      icon: <FiHeadphones size={26} />,
      title: "Customer Support",
      description: "We’re here to help you 24/7 with any queries."
    },
    {
      icon: <FiTag size={26} />,
      title: "Best Prices", 
      description: "Enjoy the best deals and discounts available."
    },
    {
      icon: <FiTruck size={26} />,
      title: "Fast Delivery",
      description: "We ensure quick and safe delivery at your doorstep."
    },
    {
      icon: <FiCreditCard size={26} />,
      title: "Easy Payments",
      description: "Multiple secure payment options for your ease."
    }
  ];

  const categories = [
    {
      title: 'Fruits',
      desc: 'Apples, Banana, Mango, Orange, Papaya...',
      img: '/images/fruits.png',
      bg: '#fff3dc'
    },
    {
      title: 'Vegetables',
      desc: 'Green leafy veggies, Onion, Tomato, Garlic...',
      img: '/images/veggies.png',
      bg: '#e9ffe6'
    },
    {
      title: 'Nuts',
      desc: 'Dry fruits, Almond, Cashew, Apricot...',
      img: '/images/nuts.png',
      bg: '#ffecec'
    },
    {
      title: 'Spices',
      desc: 'Spices, Exotic herbs, stems, flowers...',
      img: '/images/spices.png',
      bg: '#f0efff'
    },
    {
      title: 'Beverages',
      desc: 'Fresh juices, health drinks, tea, coffee...',
      img: '/images/beverages.png',
      bg: '#fef6d5'
    }
  ];

  const products = [
    {
      name: "Potato",
      weight: "1 kg",
      oldPrice: 34,
      newPrice: 27,
      image: "/images/products/potato.png",
    },
    {
      name: "Cauliflower",
      weight: "1 pc (Approx. 400g - 600g)",
      oldPrice: 20,
      newPrice: 16,
      image: "/images/products/cauliflower.png",
    },
    {
      name: "Onion - 5 kg",
      weight: "5 kg",
      oldPrice: 320,
      newPrice: 200,
      image: "/images/products/onion.png",
    },
    {
      name: "Mushroom Button",
      weight: "1 pack (Approx. 190g - 200g)",
      oldPrice: 56,
      newPrice: 45,
      image: "/images/products/mushroom.png",
    },
    {
      name: "Fresho Orange - Imported",
      weight: "1 kg",
      oldPrice: 200,
      newPrice: 148,
      image: "/images/products/orange.png",
    },
    {
      name: "Green Capsicum",
      weight: "2 Piece",
      oldPrice: 60,
      newPrice: 40,
      image: "/images/products/capsicum.png",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-image"></div>
        <div className="content-section">
          <h1 className="main-heading">Live Long, Have Some Veggies</h1>
          <p className="subheading">The treasure of good life hidden in fruits and veggies</p>
          <div className="search-container">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="search-input" 
                aria-label="Search items"
              />
            </div>
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">{feature.icon}</div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="xplore-section">
        <div className="explore-heading">
          <h2>Explore by <span className="highlight">Categories</span></h2>
          <div className="arrow-buttons">
            <button className="arrow" aria-label="Scroll Left"><FaArrowLeft /></button>
            <button className="arrow right" aria-label="Scroll Right"><FaArrowRight /></button>
          </div>
        </div>

        <div className="category-scroll">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundColor: category.bg }}
            >
              <img src={category.img} alt={category.title} className="category-img" />
              <h3 className="category-title">{category.title}</h3>
              <p className="category-desc">{category.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="offers-section">
      {/* Promo Banners */}
      <div className="promo-banners">
        <div className="promo-card">
          <img src="/images/banners/nuts-banner.png" alt="Nuts Offer" className="promo-img" />
          <div className="promo-content">
            <div className="discount-badge">10%</div>
            <h3>Shop Entire Range of Nuts</h3>
            <p>Lorem ipsum dolor sit consectetur adipiscing elit, sed do</p>
            <button className="promo-btn">Shop Now</button>
          </div>
        </div>
        <div className="promo-card right">
          <img src="/images/banners/spices-banner.png" alt="Spices Offer" className="promo-img" />
          <div className="promo-content">
            <div className="promo-label">PROMOTION</div>
            <h4>Spices</h4>
            <p>-15% discount on all Herbs and Spices</p>
            <button className="promo-btn">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Made 2 Order Section */}
      <div className="products-section">
        <div className="section-heading">
          <h2><span className="highlight-green">Made <span className="green-2">2</span></span> Order – Instant Delivery</h2>
          <div className="arrow-controls">
            <button className="arrow-btn"><FaArrowLeft /></button>
            <button className="arrow-btn"><FaArrowRight /></button>
          </div>
        </div>

        <div className="products-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={item.image} alt={item.name} />
                <span className="discount-tag">15% OFF</span>
                <button className="wishlist-icon">♡</button>
              </div>
              <div className="product-info">
                <h4 className="product-name">{item.name}</h4>
                <p className="product-weight">{item.weight}</p>
                <div className="price-section">
                  <span className="new-price">Rs {item.newPrice}</span>
                  <span className="old-price">Rs {item.oldPrice}</span>
                </div>
                <button className="add-btn">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="subscription-articles-wrapper">
      {/* Subscription Section */}
      <section className="subscription-section">
        <div className="section-header">
          <h2>Subscription Products</h2>
          <a href="#" className="see-all">See All</a>
        </div>
        <div className="products-container">
          {[
            { name: 'Amul Taaza Homogenised Toned Milk', weight: '1 ltr', price: 'Rs 71', oldPrice: 'Rs 74', image: 'milk.png' },
            { name: 'Bingo Hashtags Spicy Masala Potato Chips', weight: '350g', price: 'Rs 16', oldPrice: 'Rs 20', image: 'chips.png' },
            { name: 'Eggaz Farm Fresh White Eggs', weight: '10 Pieces', price: 'Rs 126', oldPrice: 'Rs 155', image: 'eggs.png' },
            { name: 'Urban Platter Unsweetened Coconut Cream', weight: '50g', price: 'Rs 125', oldPrice: '', image: 'coconutcream.png' },
            { name: 'Epigamia Oat Beverage (Classic)', weight: '1 ltr', price: 'Rs 300', oldPrice: 'Rs 400', image: 'oatdrink.png' },
            { name: 'Harvest Gold 100% Atta Whole Wheat Bread', weight: '450g', price: 'Rs 55', oldPrice: '', image: 'bread.png' },
          ].map((item, idx) => (
            <div className="product-card" key={idx}>
              <div className="discount">15% OFF</div>
              <img src={item.image} alt={item.name} />
              <p className="product-name">{item.name}</p>
              <p className="product-weight">{item.weight}</p>
              <div className="price-section">
                <span className="price">{item.price}</span>
                {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
              </div>
              <button className="add-button">+</button>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <h2>Learn Articles</h2>
        <div className="articles-container">
          {[
            { tag: 'Breakfast', title: '7-Day No-Sugar High-Protein Anti-Inflammatory Meal Plan', date: '23 Nov, 2023', image: 'breakfast.png', likes: 42, ingredients: 4, time: '25:00' },
            { tag: 'Nutrition Stripped', title: '7-Day High-Fiber Meal Plan for Insulin Resistance', date: '20 Nov, 2023', image: 'fiber.png', likes: 22, ingredients: 7, time: '10:09' },
            { tag: 'Gluten-Free', title: 'From Farm to Fork - A Journey', date: '09 Nov, 2023', image: 'glutenfree.png', likes: 68, ingredients: 6, time: '32:30' },
          ].map((article, idx) => (
            <div className="article-card" key={idx}>
              <img src={article.image} alt={article.title} className="article-img" />
              <div className="time-badge">{article.time}</div>
              <span className="tag">{article.tag}</span>
              <h4>{article.title}</h4>
              <div className="article-info">
                <p>{article.ingredients} Ingredients</p>
                <p>{article.date}</p>
              </div>
              <div className="reactions">
                <span className="likes">❤️ {article.likes}</span>
                <span className="share">🔁</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    <div className="subscription-articles">
      {/* Deal of the Day Section */}
      <div className="deal-section">
        <div className="deal-banner">
          <div className="deal-text">
            <p className="deal-label">Special</p>
            <h2>
              Healthy and Fresh <span>Vegetable</span>
            </h2>
            <p className="deal-offer">20%</p>
          </div>
        </div>
        <div className="deal-products">
          <div className="deal-timer">
            <h3>Deal of The Day</h3>
            <div className="timer">
              <div><span>09</span><small>Hours</small></div>
              <div><span>45</span><small>Minutes</small></div>
              <div><span>23</span><small>Seconds</small></div>
            </div>
          </div>
          <div className="product-cards">
            {[
              { name: "Cream Ball Cassata Chops Ice Cream", weight: "150 ml", price: 40, actualPrice: 48, discount: "15%" },
              { name: "Parle Hide & Seek Chocolate Chip Cookies", weight: "400g", price: 108, actualPrice: 150, discount: "15%" },
              { name: "NIC Tender Coconut", weight: "137g", price: 78, actualPrice: 88, discount: "15%" },
              { name: "Pintola Chocolate Peanut Butter", weight: "350g", price: 160, actualPrice: 200, discount: "15%" }
            ].map((item, index) => (
              <div className="product-card" key={index}>
                <div className="discount-tag">{item.discount} OFF</div>
                <p className="product-title">{item.name}</p>
                <p className="product-weight">{item.weight}</p>
                <div className="product-price">
                  <span>Rs {item.price}</span>
                  <small>Rs {item.actualPrice}</small>
                </div>
                <button className="add-btn">+</button>
              </div>
            ))}
            <div className="slider-nav">
              <button><FaChevronLeft /></button>
              <button><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Snacks & Munchies Section */}
      <div className="snacks-section">
        <div className="section-header">
          <h3>Snacks & Munchies</h3>
          <a href="#">See All</a>
        </div>
        <div className="product-cards">
          {[
            { name: "Lay's Crispz Herb & Onion Potato Chips", weight: "47g", price: 20 },
            { name: "Bingo Hashtags Spicy Masala Potato Chips", weight: "2 x 55g", price: 16, actualPrice: 20, discount: "15%" },
            { name: "Lay's India's Magic Masala Potato Chips", weight: "137g", price: 67, actualPrice: 78, discount: "15%" },
            { name: "Onion & Parsley Kerala Banana Chips", weight: "125g", price: 45, actualPrice: 55, discount: "15%" },
            { name: "Haldiram's Takatak Chatpata Masala Stick", weight: "125g", price: 22, actualPrice: 25, discount: "5%" },
            { name: "Snac Lite Fun Wheels Spicy Masala Namkeen", weight: "85g", price: 20, actualPrice: 25, discount: "15%" }
          ].map((item, index) => (
            <div className="product-card" key={index}>
              {item.discount && <div className="discount-tag">{item.discount} OFF</div>}
              <p className="product-title">{item.name}</p>
              <p className="product-weight">{item.weight}</p>
              <div className="product-price">
                <span>Rs {item.price}</span>
                {item.actualPrice && <small>Rs {item.actualPrice}</small>}
              </div>
              <button className="add-btn">+</button>
            </div>
          ))}
          <div className="slider-nav">
            <button><FaChevronLeft /></button>
            <button><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </div>


    <div className="farmer-store-wrapper">
      <div className="download-section">
        <div className="phone-images">
          <img src="/images/farmer-app-front.png" alt="App Front" className="phone-front" />
          <img src="/images/farmer-app-back.png" alt="App Back" className="phone-back" />
        </div>
        <div className="download-content">
          <p className="download-text">Download the</p>
          <h2 className="app-name">The Farmer Store</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <div className="store-buttons">
            <img src="/images/appstore.png" alt="App Store" />
            <img src="/images/playstore.png" alt="Play Store" />
          </div>
        </div>
      </div>

      <div className="quality-section">
        <div className="quality-text">
          <h3>Best Quality Healthy And <br /><span className="green-text">Fresh Grocery</span></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <ul className="features-list">
            <li>🚚 Delivery at Your Doorsteps</li>
            <li>📦 Track And Manage Orders</li>
            <li>💬 Customer Support</li>
            <li>🏷️ Best Prices</li>
          </ul>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="quality-image">
          <img src="/images/smiling-guy-grocery.png" alt="Grocery Guy" />
        </div>
      </div>
    </div>


    </div>
  );
};

export default Home;
