import React from 'react';
import Header from './Header';
import Thumbnail from './Thumbnail';
import SummerRecipe from './SummerRecipe';
import RecipeVideo from './RecipeVideo';
import EditorPick from './EditorPick';
import Footer from './Footer';
import Dashboard from './DashBoard'; 
import './index.css';  

const App = () => {
  return (
    <div className="app-grid">
      <header className="header highlight-box">
        <Header />
      </header>

      <section className="thumbnail highlight-box">
        <Thumbnail />
      </section>

      <main className="summer-recipe highlight-box">
        <SummerRecipe />
      </main>

      <section className="recipe-video highlight-box">
        <RecipeVideo />
      </section>

      <section className="editor-pick highlight-box">
        <EditorPick />
      </section>
      
      <section className="dashboard highlight-box">
        <Dashboard />
      </section>

      <footer className="footer highlight-box">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
