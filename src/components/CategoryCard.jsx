import React from 'react';
import corsx from '../images/cosrx.webp';

function CategoryCard() {
  return (
    <div className="card">
      <div className="image">
        <img src={corsx} className="image-product" />
      </div>
      <p className="brand">Cosrx</p>
      <p className="title">All-in-one cream</p>
      <button className="buy-button">Buy</button>
    </div>
  );
}

export default CategoryCard;
