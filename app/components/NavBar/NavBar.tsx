import React from 'react';
import { categories } from '../Product/ProductCategories';
import NavCategory from './NavCategory';
import BasketDrawer from '../Basket/BasketDrawer';

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
        <BasketDrawer />
      </div>
    </div>
  );
};

export default Navbar;
