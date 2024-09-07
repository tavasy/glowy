import React, { useRef, useEffect, useState } from 'react';
import feather from 'feather-icons';
import { useLocation } from 'react-router-dom';

const ProductsLine = () => {
  const optionsButtonsRef = useRef(null);
  const activeButtonRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);
  const location = useLocation();

  const currentPath = location.pathname + location.search;

  useEffect(() => {
    feather.replace();
  }, []);

  const checkScrollPosition = () => {
    if (optionsButtonsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        optionsButtonsRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Scroll left
  const handleScrollLeft = () => {
    if (optionsButtonsRef.current) {
      optionsButtonsRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  // Scroll right
  const handleScrollRight = () => {
    if (optionsButtonsRef.current) {
      optionsButtonsRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const optionsButtonsElement = optionsButtonsRef.current;
    if (optionsButtonsElement) {
      checkScrollPosition(); // Initial check
      optionsButtonsElement.addEventListener('scroll', checkScrollPosition);
    }

    return () => {
      if (optionsButtonsElement) {
        optionsButtonsElement.removeEventListener(
          'scroll',
          checkScrollPosition,
        );
      }
    };
  }, []);

  useEffect(() => {
    if (activeButtonRef.current && optionsButtonsRef.current) {
      const button = activeButtonRef.current;
      const { left: buttonLeft, right: buttonRight } =
        button.getBoundingClientRect();
      const { left: containerLeft, right: containerRight } =
        optionsButtonsRef.current.getBoundingClientRect();

      // Check if the button is not fully visible in the viewport
      if (buttonLeft < containerLeft || buttonRight > containerRight) {
        const offset =
          buttonLeft -
          containerLeft -
          optionsButtonsRef.current.clientWidth / 2 +
          button.offsetWidth / 2;
        optionsButtonsRef.current.scrollBy({
          left: offset,
          behavior: 'smooth',
        });
      }
    }
  }, [currentPath]);

  return (
    <div className="options-buttons-line-wrapper">
      <button
        className={`arrow-products ${isAtStart ? 'disabled' : ''}`}
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        <i data-feather="chevron-left"></i>
      </button>
      <div className="options-buttons" ref={optionsButtonsRef}>
        <a href={'/products?goal=silky-hair'} rel="noopener noreferrer">
          <button
            ref={
              currentPath === '/products?goal=silky-hair'
                ? activeButtonRef
                : null
            }
            className={
              currentPath === '/products?goal=silky-hair' ? 'active' : ''
            }
          >
            Silky hair
          </button>
        </a>
        <a href={'/products?goal=long-hair'} rel="noopener noreferrer">
          <button
            ref={
              currentPath === '/products?goal=long-hair'
                ? activeButtonRef
                : null
            }
            className={
              currentPath === '/products?goal=long-hair' ? 'active' : ''
            }
          >
            Long hair
          </button>
        </a>
        <a href={'/products?goal=blonde-hair'} rel="noopener noreferrer">
          <button
            ref={
              currentPath === '/products?goal=blonde-hair'
                ? activeButtonRef
                : null
            }
            className={
              currentPath === '/products?goal=blonde-hair' ? 'active' : ''
            }
          >
            Blonde hair
          </button>
        </a>
        <a href={'/products?goal=clear-skin'} rel="noopener noreferrer">
          <button
            ref={
              currentPath === '/products?goal=clear-skin'
                ? activeButtonRef
                : null
            }
            className={
              currentPath === '/products?goal=clear-skin' ? 'active' : ''
            }
          >
            Clear skin
          </button>
        </a>
        <a href={'/products?goal=no-dark-spots'} rel="noopener noreferrer">
          <button
            ref={
              currentPath === '/products?goal=no-dark-spots'
                ? activeButtonRef
                : null
            }
            className={
              currentPath === '/products?goal=no-dark-spots' ? 'active' : ''
            }
          >
            No dark spots
          </button>
        </a>
        <a href={'/products?goal=natural-makeup'} rel="noopener noreferrer">
          <button
            ref={
              currentPath === '/products?goal=natural-makeup'
                ? activeButtonRef
                : null
            }
            className={
              currentPath === '/products?goal=natural-makeup' ? 'active' : ''
            }
          >
            Natural makeup
          </button>
        </a>
      </div>
      <button
        className={`arrow-products ${isAtEnd ? 'disabled' : ''}`}
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        <i data-feather="chevron-right"></i>
      </button>
    </div>
  );
};

export default ProductsLine;
