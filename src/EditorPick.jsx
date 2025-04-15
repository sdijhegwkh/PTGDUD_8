import React from 'react';
import './EditorPick.css';

const EditorPick = () => {
  const picks = [
    {
      title: 'Stuffed sticky rice ball',
      time: '34 minutes',
      image: 'Image 72.png',
      author: 'Jennifer King',
      authorImg: 'avatar.jpg',
      desc: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
    },
    {
      title: 'Strawberry smoothie',
      time: '40 minutes',
      image: 'Image 93.png',
      author: 'Matthew Martinez',
      authorImg: 'avatar.png',
      desc: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
    },
    {
      title: 'Latte Art',
      time: '19 minutes',
      image: 'Image 72.png',
      author: 'Sarah Hill',
      authorImg: 'avatar.png',
      desc: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
    },
    {
      title: 'Butter fried noodles',
      time: '16 minutes',
      image: 'Image 93.png',
      author: 'Julia Lopez',
      authorImg: 'avatar.png',
      desc: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
    },
    {
      title: 'Butter fried noodles',
      time: '16 minutes',
      image: 'Image 93.png',
      author: 'Julia Lopez',
      authorImg: 'avatar.png',
      desc: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
    },
    {
      title: 'Butter fried noodles',
      time: '16 minutes',
      image: 'Image 93.png',
      author: 'Julia Lopez',
      authorImg: 'avatar.png',
      desc: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
    },
  ];

  return (
    <div className="editor-pick-container">
      <h2 className="editor-title">Editor's pick</h2>
      <p className="editor-subtitle">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>

      <div className="editor-grid">
        {picks.map((item, index) => (
          <div className="editor-card" key={index}>
            <img src={item.image} alt={item.title} className="editor-image" />
            <div className="editor-info">
              <div className="editor-header">
                <h3>{item.title}</h3>
                <button className="editor-bookmark-btn">🔖</button>
              </div>
              <span className="editor-time">{item.time}</span>
              <div className="editor-author">
                <img src={item.authorImg} alt={item.author} className="author-img" />
                <span>{item.author}</span>
              </div>
              <p className="editor-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorPick;
