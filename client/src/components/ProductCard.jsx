import React from 'react';

const ProductCard = ({ brand, title, description, link }) => {
  return (
    <div className="card">
      <p className="brand">{brand}</p>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="buy-button">See more</button>
      </a>
    </div>
  );
};

export default ProductCard;
