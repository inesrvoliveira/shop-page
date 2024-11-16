'use client';
import React, { useRef, useState, useEffect } from 'react';
import BasketDrawerContent from './BasketDrawerContent';

const BasketDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Track drawer state
  const [basket, setBasket] = useState<{ [key: string]: number }>({}); // Track basket content
  const drawerCheckboxRef = useRef<HTMLInputElement | null>(null); // Ref to access the checkbox

  // Load basket data from localStorage on mount
  useEffect(() => {
    const savedBasket = localStorage.getItem('basket'); // Get basket from localStorage
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket)); // Parse and set the basket state
    }
  }, []);

  // Save basket data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const toggleDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = !drawerCheckboxRef.current.checked;
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  const addToBasket = (productId: string) => {
    setBasket((prevBasket) => ({
      ...prevBasket,
      [productId]: (prevBasket[productId] || 0) + 1,
    }));
  };

  const removeFromBasket = (productId: string) => {
    setBasket((prevBasket) => {
      const updatedBasket = { ...prevBasket };
      if (updatedBasket[productId] > 1) {
        updatedBasket[productId] -= 1;
      } else {
        delete updatedBasket[productId];
      }
      return updatedBasket;
    });
  };

  const totalItems = Object.values(basket).reduce((total, count) => total + count, 0);

  return (
    <div>
      {/* Basket Icon in NavBar */}
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerCheckboxRef}
        />

        <div className="drawer-content">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-square indicator"
            onClick={toggleDrawer}
          >
            <img
              src="/basket-shopping.svg"
              alt="Basket"
              className="h-8 w-8"
            />
            <span className="badge badge-sm indicator-item bg-indigo-950 text-white">
              {totalItems}
            </span>
          </button>
        </div>

        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <BasketDrawerContent
          />
        </div>
      </div>
    </div>
  );
};

export default BasketDrawer;
