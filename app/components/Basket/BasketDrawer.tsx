'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useBasketTotals } from './BasketContext';  // Import the useBasket hook
import BasketDrawerContent from './BasketDrawerContent';

const BasketDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerCheckboxRef = useRef<HTMLInputElement | null>(null);
  const { totalItems } = useBasketTotals();

  const toggleDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = !drawerCheckboxRef.current.checked;
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  return (
    <div>
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
            <img src="/basket-shopping.svg" alt="Basket" className="h-8 w-8" />
            <span className="badge badge-sm indicator-item bg-indigo-950 text-white">
              {totalItems}
            </span>
          </button>
        </div>

        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <BasketDrawerContent />
        </div>
      </div>
    </div>
  );
};

export default BasketDrawer;
