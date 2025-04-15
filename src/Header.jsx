import React from 'react';
import './header.css'; 

const Header = () => {
  return (
    <header className="header">
     
      <div className="logo-container">
        <img src="Group 9.png" alt="Logo" className="logo" />
      </div>
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="search-input"
        />
      </div>
      <nav className="nav-links">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
        <button className="login-btn">Login</button>
        <button className="subscribe-btn">Subscribe</button>
      </nav>
    </header>
  );
};

export default Header;
