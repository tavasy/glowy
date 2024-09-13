import React from 'react';

function OptionsHome() {
  return (
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
            <a href={'/products?goal=blonde-hair'} rel="noopener noreferrer">
              <button>Blonde hair</button>
            </a>
          </div>
          <p className="category-name">Skin</p>
          <div className="options-buttons">
            <a href={'/products?goal=clear-skin'} rel="noopener noreferrer">
              <button>Clear skin</button>
            </a>
            <a href={'/products?goal=no-dark-spots'} rel="noopener noreferrer">
              <button>No dark spots</button>
            </a>
          </div>
          <p className="category-name">Makeup</p>
          <div className="options-buttons">
            <a href={'/products?goal=natural-makeup'} rel="noopener noreferrer">
              <button>Natural makeup</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsHome;
