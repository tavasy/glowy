import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import OptionsHome from '../components/OptionsHome';

function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  const apiBaseUrl =
    window.location.hostname === 'localhost'
      ? 'http://localhost:5050'
      : 'https://glowy-gm9s.onrender.com';

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${apiBaseUrl}/api/trending-products`);
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
        <OptionsHome />
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
