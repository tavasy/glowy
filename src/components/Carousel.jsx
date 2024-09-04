import React, { useState, useRef, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';

const Carousel = ({ trendingProducts }) => {
  const cardsRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(300);

  useEffect(() => {
    if (cardsRef.current && cardsRef.current.children.length > 0) {
      setCardWidth(cardsRef.current.children[0].offsetWidth);
    }
  }, [trendingProducts]);

  const handleScrollLeft = () => {
    cardsRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    cardsRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    const slider = cardsRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeft = slider.scrollLeft;
    slider.classList.add('dragging');
  };

  const handleDragMove = (e) => {
    const slider = cardsRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5;
    slider.scrollLeft = slider.scrollLeft - walk;
  };

  const handleDragEnd = () => {
    const slider = cardsRef.current;
    slider.isDown = false;
    slider.classList.remove('dragging');
  };

  return (
    <div className="categories-wrapper">
      <button
        className="arrow left"
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        left
      </button>
      <div
        className="categories-cards"
        ref={cardsRef}
        onMouseDown={handleDragStart}
        onMouseLeave={handleDragEnd}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
      >
        {trendingProducts.map((product, index) => (
          <CategoryCard
            key={index}
            brand={product.brand}
            title={product.title}
            image={product.image}
            link={product.link}
          />
        ))}
      </div>
      <button
        className="arrow right"
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        right
      </button>
    </div>
  );
};

export default Carousel;
