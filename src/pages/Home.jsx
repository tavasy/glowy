import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          'http://localhost:5050/api/trending-products',
        );
        const data = await response.json();
        setTrendingProducts(data);
      } catch (error) {
        console.error('Error fetching trending products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Marquee />
      <div className="container-achieve">
        <div className="container-options">
          <div className="container-options-div">
            <div className="achieve-text">
              <h2>What is your goal?</h2>
            </div>
            <div className="options-wrapper">
              <p className="category-name">Hair</p>
              <div className="options-buttons">
                <button>Silky hair</button>
                <button>Long hair</button>
                <button>Blonde hair</button>
              </div>
              <p className="category-name">Skin</p>
              <div className="options-buttons">
                <button>Clean skin</button>
                <button>No dark spots</button>
              </div>
              <p className="category-name">Makeup</p>
              <div className="options-buttons">
                <button>Natural makeup</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-image-text">
          <p className="text-image">
            Choose your goal and explore the trending products tailored just for
            you
          </p>
        </div>
      </div>
      <div className="container-trending-products">
        <h2>Trending products</h2>
        <div className="trending-products-background">
          <Carousel trendingProducts={trendingProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
