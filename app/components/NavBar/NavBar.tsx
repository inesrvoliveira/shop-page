import React from 'react';
import { categories } from '../Product/ProductCategories';
import NavCategory from './NavCategory';

const Navbar = () => {
  return (
    <div className="navbar fixed bg-slate-200 px-4 z-10">
      {/* Logo Section */}
      <div className="navbar-start">
        <a className="text-xl font-bold">kencko</a>
      </div>

      {/* Center Section - Using Flexbox to layout items horizontally */}
      <div className="navbar-center space-x-4">
        {/* Map through the categories array to dynamically create list items */}
        {categories.map((category) => (
          <NavCategory key={category.name} name={category.name} displayName={category.displayName} />
        ))}
      </div>

      {/* Basket Section */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {/* Basket Icon */}
          <button
            tabIndex={0}
            className="btn btn-ghost btn-square indicator">
            <img
              src="/basket-shopping.svg" 
              alt="Basket"
              className="h-8 w-8"
            />
            <span className="badge badge-sm indicator-item bg-indigo-950 text-white">3</span>
          </button>

          {/* Dropdown Content */}
          <div
            tabIndex={0}
            className="dropdown-content bg-base-100 shadow-md mt-3 w-52 rounded-md">
            <div className="p-4">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info block mt-1">Subtotal: $999</span>
              <button className="btn btn-primary btn-block mt-2">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
