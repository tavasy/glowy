import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchPersonalProducts() {
  //     try {
  //       const response = await fetch(
  //         'http://localhost:5050/api/personal-products',
  //       );
  //       const data = await response.json();
  //       setProducts(data.products); // Update to access the 'products' array
  //     } catch (error) {
  //       console.error('Error fetching personal products:', error);
  //     }
  //   }

  //   fetchPersonalProducts();
  // }, []);

  return (
    <div>
      <h1>Trending Beauty Products for Silky Hair</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
