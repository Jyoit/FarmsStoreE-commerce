// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* About Us Section */}
            <div className="about-hero">
                <h1>About Us</h1>
                <h2>About us - Farmer's Store</h2>
                
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="feature">
                    <div className="feature-icon">
                        {/* Replace with actual icon/image */}
                        <img src="/images/customer-support-icon.png" alt="Customer Support" />
                    </div>
                    <h4>Customer Support</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur i consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="feature">
                    <div className="feature-icon">
                        {/* Replace with actual icon/image */}
                        <img src="/images/best-prices-icon.png" alt="Best Prices" />
                    </div>
                    <h4>Best Prices</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur i consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="feature">
                    <div className="feature-icon">
                        {/* Replace with actual icon/image */}
                        <img src="/images/fast-delivery-icon.png" alt="Fast Delivery" />
                    </div>
                    <h4>Fast Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur i consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="feature">
                    <div className="feature-icon">
                        {/* Replace with actual icon/image */}
                        <img src="/images/easy-payments-icon.png" alt="Easy Payments" />
                    </div>
                    <h4>Easy Payments</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur i consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            {/* Questions Section */}
            <div className="questions-section">
                <h4>Have Questions?</h4>
                <div className="question-items">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.</p>
                </div>
                <Link to="/contact" className="contact-link">Contact Us</Link>
            </div>
        </div>
    );
};

export default About;