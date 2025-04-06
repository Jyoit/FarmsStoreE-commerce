import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LearnArticles.css";
import groceryImage from "../../assets/grocery.png";
import cookingImage from "../../assets/cooking.png";
import farmImage from "../../assets/farm.png";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import rightImage from '../../assets/wepik-export-20231129053636QBpy-2.png';
import leftImage from '../../assets/wepik-export-20231129053636QBpy-1.png';

export const articles = [
  {
    id: 1,
    category: "Grocery",
    title: "Your Grocery Cart - Get Groceries Delivered in Clicks!",
    date: "23 Nov, 2023",
    image: groceryImage,
    duration: "25:00",
    likes: 42,
    views: 1200,
    isVideo: true,
    buttonText: "Join Event",
    author: "John Doe",
    description: "Potatoes are a staple ingredient used in many recipes.",
    weight: "1kg",
    price: "27",
    oldPrice: "34",
    discount: "15% OFF",
    ingredients: [  // ✅ Added ingredients array
      {
        name: "Salt",
        image: "/images/salt.jpg",
        weight: "500g",
        price: "20",
        oldPrice: "25",
      },
      {
        name: "Oil",
        image: "/images/oil.jpg",
        weight: "1L",
        price: "150",
        oldPrice: "180",
      }
    ]
  },
  {
    id: 2,
    category: "Cooking",
    title: "A List of Essentials for Cooking Dishes",
    date: "20 Nov, 2023",
    image: cookingImage,
    duration: "10:00",
    likes: 22,
    views: 850,
    author: "Jane Smith",
    description: "Cauliflower is a versatile vegetable perfect for curries.",
    weight: "600g - 900g",
    price: "16",
    oldPrice: "20",
    discount: "20% OFF",
    ingredients: [
      {
        name: "Ginger",
        image: "/images/ginger.jpg",
        weight: "250g",
        price: "30",
        oldPrice: "40",
      },
      {
        name: "Garlic",
        image: "/images/garlic.jpg",
        weight: "200g",
        price: "25",
        oldPrice: "35",
      }
    ]
  },
  {
    id: 3,
    category: "Essentials",
    title: "From Farm to Fork - A Journey",
    date: "09 Nov, 2023",
    image: farmImage,
    duration: "30:00",
    likes: 68,
    views: 1500,
    author: "Emma Johnson",
    description: "Onions add flavor to various dishes and are widely used.",
    weight: "5kg",
    price: "200",
    oldPrice: "320",
    discount: "30% OFF",
    ingredients: [
      {
        name: "Tomato",
        image: "/images/tomato.jpg",
        weight: "1kg",
        price: "50",
        oldPrice: "60",
      },
      {
        name: "Chili Powder",
        image: "/images/chili.jpg",
        weight: "100g",
        price: "40",
        oldPrice: "50",
      }
    ]
  }
];



const LearnArticles = () => {
  return (
    <div className="learn-section">
      <div className="learn-hero">
        <div className="hero-image left-image"><img src={leftImage} alt="Learning concept" /></div>
        <div className="green-overlay"></div>
        <div className="hero-content">
          <h2 className="learn-title">Learn</h2>
          <p className="learn-subtitle">Recent Updates and Blogs</p>
        </div>
        <div className="hero-image right-image"><img src={rightImage} alt="Education background" /></div>
      </div>

      <div className="learn-buttons">
        <button className="active">Nutrition</button>
        <button>Recipes</button>
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <Link to={`/articles/${article.id}`} key={article.id} className="article-link">
            <div className="article-card">
              <div className="article-image-container">
                <img src={article.image} alt={article.title} className="article-image" />
                <span className="duration">{article.duration}</span>
                <span className="category-tag">{article.category}</span>
                {article.isVideo && <div className="play-icon">▶</div>}
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-date">{article.date}</p>
                <div className="article-footer">
                  <span className="likes"><FaHeart className="icon" /> {article.likes}</span>
                  <FaShareAlt className="icon share-icon" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearnArticles;
