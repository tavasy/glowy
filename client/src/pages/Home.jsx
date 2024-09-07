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
          'https://glowy-gm9s.onrender.com/api/trending-products',
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
                <a href={'/products?goal=silky-hair'} rel="noopener noreferrer">
                  <button>Silky hair</button>
                </a>
                <a href={'/products?goal=long-hair'} rel="noopener noreferrer">
                  <button>Long hair</button>
                </a>
                <a
                  href={'/products?goal=blonde-hair'}
                  rel="noopener noreferrer"
                >
                  <button>Blonde hair</button>
                </a>
              </div>
              <p className="category-name">Skin</p>
              <div className="options-buttons">
                <a href={'/products?goal=clear-skin'} rel="noopener noreferrer">
                  <button>Clean skin</button>
                </a>
                <a
                  href={'/products?goal=no-dark-spots'}
                  rel="noopener noreferrer"
                >
                  <button>No dark spots</button>
                </a>
              </div>
              <p className="category-name">Makeup</p>
              <div className="options-buttons">
                <a
                  href={'/products?goal=natural-makeup'}
                  rel="noopener noreferrer"
                >
                  <button>Natural makeup</button>
                </a>
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
