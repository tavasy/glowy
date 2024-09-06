import React, { useRef, useEffect, useState } from 'react';
import feather from 'feather-icons';

const ProductCard = ({ brand, title, description, keyBenefits, link }) => {
  const keyBenefitsRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    feather.replace();
  }, []);

  const checkScrollPosition = () => {
    if (keyBenefitsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = keyBenefitsRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Scroll left
  const handleScrollLeft = () => {
    if (keyBenefitsRef.current) {
      keyBenefitsRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  // Scroll right
  const handleScrollRight = () => {
    if (keyBenefitsRef.current) {
      keyBenefitsRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const keyBenefitsElement = keyBenefitsRef.current;
    if (keyBenefitsElement) {
      checkScrollPosition(); // Initial check
      keyBenefitsElement.addEventListener('scroll', checkScrollPosition);
    }

    return () => {
      if (keyBenefitsElement) {
        keyBenefitsElement.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="card">
      <p className="brand">{brand}</p>
      <p className="title">{title}</p>
      <div className="key-benefits-container-wrapper">
        <button
          className={`arrow-products ${isAtStart ? 'disabled' : ''}`}
          onClick={handleScrollLeft}
          aria-label="Scroll left"
        >
          <i data-feather="chevron-left"></i>
        </button>
        <div className="container-key-benefits" ref={keyBenefitsRef}>
          {keyBenefits.map((benefit, index) => (
            <div className="key-benefits" key={index}>
              {benefit}
            </div>
          ))}
        </div>
        <button
          className={`arrow-products ${isAtEnd ? 'disabled' : ''}`}
          onClick={handleScrollRight}
          aria-label="Scroll right"
        >
          <i data-feather="chevron-right"></i>
        </button>
      </div>
      <p className="description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="buy-button">Buy</button>
      </a>
    </div>
  );
};

export default ProductCard;
