import React from 'react';

const CategoryCard = ({ brand, title, image, link }) => {
  return (
    <div className="card">
      <div className="image">
        <div className="image-wrapper">
          <img
            src={image}
            alt={title}
            className="image-product"
            loading="lazy"
          />
        </div>
      </div>
      <p className="brand">{brand}</p>
      <p className="title">{title}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="buy-button">See more</button>
      </a>
    </div>
  );
};

export default CategoryCard;
