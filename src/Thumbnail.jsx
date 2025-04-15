import React from 'react';
import './ThumbNail.css';

const ThumbNail = () => {
  return (
    <div className="thumbnail-container">
      <img src="Image 73.png" alt="Background" className="thumbnail-bg" />

      <div className="card">
        <div className="tag">Recipe of the day</div>

        <h2 className="title">Salad Caprese</h2>
        <p className="description">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil,
          and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>

        <div className="author">
          <img src="avatar.png" alt="Author" className="avatar" />
          <span>Salad Caprese</span>
        </div>

        <button className="view-btn">
          View now <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ThumbNail;