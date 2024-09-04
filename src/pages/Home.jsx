import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import laneige from '../images/laneige.png';
import amika from '../images/amika.png';
import colorwow from '../images/colorwow.png';
import cosrx from '../images/cosrx.png';
import keys from '../images/keys.png';
import nars from '../images/nars.png';
import olaplex from '../images/olaplex.png';

function Home() {
  const [trendingProducts] = useState([
    {
      brand: 'NARS',
      title: 'Powder Blush',
      image: nars,
      link: 'https://www.narscosmetics.com',
    },
    {
      brand: 'Amika',
      title: 'Perk Up Dry Shampoo',
      image: amika,
      link: 'https://www.loveamika.com',
    },
    {
      brand: 'Color Wow',
      title: 'Dream Coat Anti-Humidity Hair Spray',
      image: colorwow,
      link: 'https://www.colorwowhair.com',
    },
    {
      brand: 'Cosrx',
      title: 'Snail Mucin 96% Power Repairing Essence',
      image: cosrx,
      link: 'https://www.cosrx.com',
    },
    {
      brand: 'Keys Soulcare',
      title: 'Squalane Facial Oil',
      image: keys,
      link: 'https://www.cosrx.com',
    },
    {
      brand: 'Laneige',
      title: 'Lip Sleeping Mask',
      image: laneige,
      link: 'https://www.laneige.com',
    },
    {
      brand: 'Olaplex',
      title: 'No.7 Bonding Oil',
      image: olaplex,
      link: 'https://www.olaplex.com',
    },
  ]);

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
        <Carousel trendingProducts={trendingProducts} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
