import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="container-image">
        <div className="overlay-text">
          <p className="bold-text-image">FIND THE PERFECT PRODUCTS FOR YOU</p>
          <p className="main-text-image">
            Our beauty philosophy is to make one of everything really good. To
            us, that means a collection of intentional, high-performance
            essentials you reach for on a daily basis.
          </p>
        </div>
      </div>
      <div className="container-achieve">
        <h2>What do you want to achieve?</h2>
        <div className="container-options">
          <p className="category-name">Hair</p>
          <div className="options-buttons">
            <button>Silky hair</button>
            <button>Long hair</button>
            <button>Blonde hair</button>
          </div>
          <p className="category-name">Skin</p>
          <div className="options-buttons">
            <button className="skin">Clean skin</button>
            <button className="skin">No dark spots</button>
          </div>
          <p className="category-name">Makeup</p>
          <div className="options-buttons">
            <button>Natural makeup</button>
          </div>
        </div>
      </div>
      <div className="container-trending-products">
        <h2>Trending products</h2>
        <p className="categories-title">Skincare</p>
        <div className="categories-cards">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <p className="categories-title">Haircare</p>
        <div className="categories-cards">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <p className="categories-title">Makeup</p>
        <div className="categories-cards">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
