import React, { useState, useRef, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import feather from 'feather-icons';

const Carousel = ({ trendingProducts }) => {
  const cardsRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(300);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    feather.replace();
  }, []);

  useEffect(() => {
    if (cardsRef.current && cardsRef.current.children.length > 0) {
      setCardWidth(cardsRef.current.children[0].offsetWidth);
      updateScrollPosition();
    }
  }, [trendingProducts]);

  const updateScrollPosition = () => {
    const slider = cardsRef.current;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    const scrollTolerance = 2;
    setIsAtStart(slider.scrollLeft <= scrollTolerance);
    setIsAtEnd(slider.scrollLeft >= maxScrollLeft - scrollTolerance);
  };

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
    updateScrollPosition();
  };

  const handleScroll = () => {
    updateScrollPosition();
  };

  return (
    <div className="categories-wrapper">
      <button
        className={`arrow ${isAtStart ? 'disabled' : ''}`}
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        <i data-feather="chevron-left"></i>
      </button>
      <div
        className="categories-cards"
        ref={cardsRef}
        onScroll={handleScroll}
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
        className={`arrow ${isAtEnd ? 'disabled' : ''}`}
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        <i data-feather="chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
