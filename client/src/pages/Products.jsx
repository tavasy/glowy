import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import ProductsLine from '../components/ProductsLine';
import Spinner from '../components/Spinner';

function Products() {
  const [products, setProducts] = useState([]);
  const [goalExists, setGoalExists] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const hasFetched = useRef(false);

  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  const goal = getQueryParams().get('goal');

  const goalTextMap = {
    'silky-hair': 'silky hair',
    'blonde-hair': 'blonde hair',
    'clear-skin': 'clear skin',
    'no-dark-spots': 'no dark spots',
    'natural-makeup': 'natural makeup',
  };

  useEffect(() => {
    if (!goal) {
      setGoalExists(false);
      return;
    }

    setGoalExists(true);

    async function fetchPersonalProducts() {
      if (hasFetched.current) return;

      const storedProducts = localStorage.getItem(`products_${goal}`);

      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
        return;
      }

      hasFetched.current = true;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:5050/api/personal-products?goal=${goal}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products from server');
        }
        const data = await response.json();
        if (Array.isArray(data.products)) {
          setProducts(data.products);
          localStorage.setItem(
            `products_${goal}`,
            JSON.stringify(data.products),
          );
        } else {
          console.error('Invalid products data', data.products);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching personal products:', error);
        setError(
          'An error occurred while fetching products. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPersonalProducts();
  }, [goal]);

  if (!goalExists) {
    return (
      <div className="container">
        <Navbar />
        <div className="container-top-text"></div>
        <div className="container-personal-products">
          <p className="no-products-text">Please specify the goal</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar />
      <div className="container-top-text">
        <h2 className="text-products-image">
          Best&nbsp;
          <span className="goal-text">trending</span>
          &nbsp;products for
          <span className="goal-text">&nbsp;{goalTextMap[goal]}</span>
        </h2>
      </div>
      <div className="container-options-line">
        <ProductsLine />
      </div>

      <div className="container-personal-products">
        {loading ? (
          <div className="loading-container">
            <Spinner />
            <p className="loading-text">
              Loading products... May take up to 10 seconds
            </p>
          </div>
        ) : error ? (
          <div className="loading-container">{error}</div>
        ) : (
          <div className="product-cards">
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  brand={product.brand}
                  title={product.title}
                  description={product.description}
                  link={product.link}
                />
              ))
            ) : (
              <p className="no-products-text">No products available</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
