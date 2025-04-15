import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="email-form">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>

        <div className="footer-section">
          <h4>Learn More</h4>
          <ul>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Recipes</h4>
          <ul>
            <li><a href="#">What to Cook This Week</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Healthy</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <span className="logo-icon"><img src="Group 9.png" alt="" /></span> <span className="logo-text"></span>
        </div>
        <p>2023 Cheffy Company</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
