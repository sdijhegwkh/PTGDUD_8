import React from 'react';
import './SummerRecipe.css';

const recipes = [
  {
    title: 'Italian-style tomato salad',
    time: '14 minutes',
    image: 'Image 72.png'
  },
  {
    title: 'Spaghetti with vegetables and shrimp',
    time: '15 minutes',
    image: 'Image 93.png'
  },
  {
    title: 'Lotus delight salad',
    time: '20 minutes',
    image: 'Image 72.png'
  },
  {
    title: 'Snack cakes',
    time: '21 minutes',
    image: 'Image 93.png'
  }
];

const SummerRecipe = () => {
  return (
    <div className="summer-container">
      <h2 className="summer-title">This Summer Recipes</h2>
      <p className="summer-subtitle">We have all your Independence Day sweets covered.</p>

      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <div className="bottom-info">
                <span className="time-tag">{recipe.time}</span>
                <button className="bookmark-btn">🔖</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummerRecipe;