import React, { useEffect, useState } from 'react'
import './Product.css'
import axios from 'axios';

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='product__container'>
      <input type="text" placeholder='Searching...' />


      <div className="product__wrapper">
        {products.map((product) => (
         <div className="product" key={product.id}>
         <img src={product.image} alt={product.title} />
         <h2>{product.description.slice(0, 100)}...</h2>
       </div>
        ))}
      </div>
      
    </div>
  )
}
