import React from 'react';
import './RecipeVideo.css';

const RecipeVideo = () => {
  const videoRecipes = [
    {
      title: 'Salad with cabbage and shrimp',
      time: '32 minutes',
      image: 'Image 72.png',
    },
    {
      title: 'Salad of cove beans, shrimp and potatoes',
      time: '20 minutes',
      image: 'Image 93.png',
    },
    {
      title: 'Sunny-side up fried egg',
      time: '15 minutes',
      image: 'Image 72.png',
    },
    {
      title: 'Lotus delight salad',
      time: '20 minutes',
      image: 'Image 93.png',
    },
  ];

  return (
    <div className="video-container">
      <h2 className="video-title">Recipes With Videos</h2>
      <p className="video-subtitle">Cooking Up Culinary Creations with Step-by-Step Videos</p>

      <div className="recipe-video-list">
        {videoRecipes.map((item, index) => (
          <div className="recipe-video-card" key={index}>
            <img src={item.image} alt={item.title} className="recipe-video-img" />
            <div className="recipe-video-info">
              <h3>{item.title}</h3>
              <div className="video-bottom-info">
                <span className="video-time-tag">{item.time}</span>
                <button className="video-bookmark-btn">🔖</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeVideo;
