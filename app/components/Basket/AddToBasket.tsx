'use client';
import React from 'react';
import { useBasket } from './BasketContext';  // Import the useBasket hook

interface AddToBasketProps {
  productId: string;
  productName: string;
  productPrice: number;
}

const AddToBasket = ({ productId, productName, productPrice } : AddToBasketProps) => {
  const { addToBasket } = useBasket();  // Access the addToBasket function from context

  return (
    <div>
      <button
        className="btn btn-active"
        onClick={() => {addToBasket(productId, productName, productPrice)}} 
      >
        Add to Basket
      </button>
    </div>
  );
};

export default AddToBasket;
