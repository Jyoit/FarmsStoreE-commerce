import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";

// Import category images
import fruitsImg from "../../assets/fruits.png";
import vegetablesImg from "../../assets/vegetables.png";
import nutsImg from "../../assets/nuts.png";
import spicesImg from "../../assets/spices.png";
import beveragesImg from "../../assets/beverages.png";
import riceImg from "../../assets/rice.png";
import chocolateImg from "../../assets/chocolate.png";
import dairyImg from "../../assets/dairy.png";
import snacksImg from "../../assets/snacks.png";
import teaImg from "../../assets/tea.png";

const categories = [
  { id: 1, name: "Fruits", description: "Apples, Banana, Mango, Orange, Papaya.", img: fruitsImg, link: "/category/fruits" },
  { id: 2, name: "Vegetables", description: "Green Leafy Vegetables, Onion, Tomato, Potato, Garlic.", img: vegetablesImg, link: "/category/vegetables" },
  { id: 3, name: "Nuts", description: "Dry Fruits, Almond, Cashew, Apricot.", img: nutsImg, link: "/category/nuts" },
  { id: 4, name: "Spices", description: "Spices, Exotic Herbs, stems, Flowers, Leaves...", img: spicesImg, link: "/category/spices" },
  { id: 5, name: "Beverages", description: "Juices, Beverages, Shakes, Energy Drinks...", img: beveragesImg, link: "/category/beverages" },
  { id: 6, name: "Rice", description: "Apples, Banana, Mango, Orange, Papaya.", img: riceImg, link: "/category/rice" },
  { id: 7, name: "Sweet Craving", description: "Chocolates, Sweets, Desserts...", img: chocolateImg, link: "/category/sweets" },
  { id: 8, name: "Dairy Products", description: "Milk, Cheese, Butter, Yogurt.", img: dairyImg, link: "/category/dairy" },
  { id: 9, name: "Snacks", description: "Biscuits, Chips, Namkeen, Cookies.", img: snacksImg, link: "/category/snacks" },
  { id: 10, name: "Tea, Green Tea", description: "Herbal Tea, Green Tea, Energy Drinks...", img: teaImg, link: "/category/tea" },
];

const Category = () => {
  return (
    <div className="category-section">
      <h2 className="category-title">
        Browse <span className="highlight">Categories</span>
      </h2>
      <div className="category-grid">
        {categories.map((category) => (
          <Link to={category.link} key={category.id} className="category-card">
            <img src={category.img} alt={category.name} className="category-img" />
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
