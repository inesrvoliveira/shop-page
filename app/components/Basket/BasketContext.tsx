'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the Product interface with id, name, quantity, and price
interface Product {
  id: string;       // Product ID
  name: string;     // Product Name
  quantity: number; // Quantity in the basket
  price: number;    // Price of the product
}

interface BasketContextType {
  basket: Product[];     // Array of products, each with id, name, quantity, and price
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

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<Product[]>([]); // Initialize as an array

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
    // Check if the basket is empty and if the product is being added for the first time
    const isBasketEmpty = prevBasket.length === 0;

    // Add the free bottle only when the basket is empty
    if (isBasketEmpty) {
      const freeBottle: Product = {
        id: 'freebottleid',
        name: 'universal shaker bottle FREE',
        quantity: 1,
        price: 0, // Free product
      };

      // Add both the free bottle and the product to the basket
      return [
        { id: productId, name, quantity: 1, price },
        freeBottle,
        ...prevBasket, // Preserve existing items if any
      ];
    }

    // Find the existing product in the basket
    const existingProduct = prevBasket.find((product) => product.id === productId);

    // If the product exists, increase the quantity. Otherwise, add the new product.
    if (existingProduct) {
      return prevBasket.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    }
    // If the product does not exist, add it to the basket
    return [...prevBasket, { id: productId, name, quantity: 1, price }];
  });
};



  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
