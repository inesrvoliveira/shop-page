'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { BasketItem, bottlePrice, freeBottle } from '../Product/ProductTypes';

interface BasketContextType {
  basket: BasketItem[];     
  addToBasket: (productId: string, name: string, price: number) => void; 
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};

export const useBasketTotals = () => {
  const { basket } = useBasket();

  const totalItems = basket.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = basket.reduce((total, item) => {
    if (item.product.id === freeBottle.product.id) {
      if (item.quantity > 1) {
        return total + bottlePrice * (item.quantity - 1); // Free bottle logic
      }
      return total;
    }
    return total + item.product.price * item.quantity;
  }, 0);

  return { totalItems, totalPrice };
};

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]); // Initialize as an array

  // Load basket from localStorage when the app is mounted
  useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket)); // Load basket from localStorage
    }
  }, []);

  // Save basket to localStorage whenever the basket state changes
  useEffect(() => {
    if (basket.length > 0) {
      localStorage.setItem('basket', JSON.stringify(basket)); // Save basket to localStorage
    }
  }, [basket]);

  const addToBasket = (productId: string, name: string, price: number) => {
    setBasket((prevBasket) => {
      const isBasketEmpty = prevBasket.length === 0;
  
      // Add the free bottle only when the basket is empty
      if (isBasketEmpty) {
        // Add both the free bottle and the product to the basket
        return [
          { product: { id: productId, name, price }, quantity: 1 }, // Add product
          freeBottle, // Add free bottle
          ...prevBasket, // Preserve existing items if any
        ];
      }
  
      // Find the existing product in the basket
      const existingProduct = prevBasket.find(
        (item) => item.product.id === productId
      );
  
      // If the product is already in the basket, update the quantity
      if (existingProduct) {
        //just increase the quantity
        return prevBasket.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
  
      // If the product does not exist in the basket, add it to the basket
      return [
        ...prevBasket,
        { product: { id: productId, name, price }, quantity: 1 },
      ];
    });
  
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
