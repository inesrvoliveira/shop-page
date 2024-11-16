'use client';
import React from 'react';
import { useBasket } from './BasketContext';  // Import the useBasket hook
import { Product } from '../Product/ProductTypes';

const AddToBasket = ({ id, name, price } : Product) => {
  const { addToBasket } = useBasket();  // Access the addToBasket function from context

  return (
    <div>
      <button
        className="btn btn-active"
        onClick={() => {addToBasket(id, name, price)}} 
      >
        Add to Basket
      </button>
    </div>
  );
};

export default AddToBasket;
