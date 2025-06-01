import React, { useEffect, useState } from 'react';
import './Product.css';
import axios from 'axios';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className='product__container'>
      <input
        type="text"
        placeholder='Searching...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product__wrapper">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.images[0]} alt={product.title} /> {/* TO‘G‘RILANDI */}
            <h3>{product.title.slice(0, 11)}</h3>
            <p>{product.description.slice(0, 68)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
