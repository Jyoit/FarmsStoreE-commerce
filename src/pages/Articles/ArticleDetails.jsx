import React , { useState }  from "react";
// import Reactfrom "react";  // ✅ Fix missing useState import

import { useParams, Link } from "react-router-dom";
import { articles } from "./LearnArticles"; // Import articles
import "../../styles/ArticleDetails.css"; // Import styles
import { FaHeart, FaEye } from "react-icons/fa"; // Icons for likes & views
import JoinEventPopup from "../Events/JoinEventPopup";

const ArticleDetails = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));
  const [showPopup, setShowPopup] = useState(false); // State for modal visibility

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className="article-details-container">
      {/* Article Image */}
      <div className="article-image-container">
        <img src={article.image} alt={article.title} className="article-image" />
      </div>

      {/* Article Content */}
      <div className="article-content-container">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-meta">
          <span className="article-author">By {article.author}</span> | 
          <span className="article-date"> {article.date}</span>
        </p>

        {/* Likes & Views */}
        <div className="article-stats">
          <span className="likes">
            <FaHeart className="icon" /> {article.likes} Likes
          </span>
          <span className="views">
            <FaEye className="icon" /> {article.views} Views
          </span>
        </div>

        {/* Article Description */}
        <p className="article-description">{article.description}</p>

        {/* Back to Articles Button */}
        
        <div className="join-button-container">
          <button className="join-button" onClick={() => setShowPopup(true)}>
            Join Event
          </button>
        </div>
      </div>
      {showPopup && <JoinEventPopup onClose={() => setShowPopup(false)} />}


      {/* Ingredients Used Section */}
      <div className="ingredients-section">
        <h2 className="ingredients-title">Ingredients Used</h2>
        <div className="ingredients-container">
          {articles.map((ingredient) => (
            <div key={ingredient.id} className="ingredient-card">
              <div className="ingredient-badge">{ingredient.discount}</div>
              <img src={ingredient.image} alt={ingredient.title} className="ingredient-image" />
              <h3 className="ingredient-name">{ingredient.title}</h3>
              <p className="ingredient-weight">{ingredient.weight}</p>
              <p className="ingredient-price">
                Rs {ingredient.price} <span className="old-price">Rs {ingredient.oldPrice}</span>
              </p>
              <button className="add-to-cart">+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
