import React from 'react'
import ProductCard from './ProductCard';
import { categories } from './ProductCategories';

interface Product {
  id: number;
  name: string;
  market_prices:{
    subscription_price: number;
  }
  productPackaging: {
    url: string;
  }; 
  category: string;
}

const ProductCardGrid = async () => {

  // Fetch products from the backend
  const res = await fetch('https://www.kencko.com/api/v1/products/US?shop_domain=vip-kencko.myshopify.com')
  const products: Product[] = await res.json();
  
  // Pre-process the products into a category-based map
  const productsByCategory = products.reduce<{ [key: string]: Product[] }>((acc, product) => {
    const category = product.category;
  
    if (!acc[category]) {
      acc[category] = [];
    }
  
    acc[category].push(product);
    return acc;
  }, {});
  
  return (
    <div className="flex justify-center z-0">
      <div>
        {/* Loop through categories */}
        {categories.map((category) => {
          // Retrieve filtered products directly from the preprocessed map
          const filteredProducts = productsByCategory[category.name] || [];
  
          return (
            <div key={`key-${category.name}`} id={category.name}>
              {/* Category Navbar */}
              <div className="navbar bg-slate-200 mt-20 mb-2 flex justify-center">
                <h1 className="text-2xl">{category.displayName}</h1>
              </div>
  
              {/* Product Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    <ProductCard 
                      productPackagingUrl={product.productPackaging.url} 
                      name={product.name} 
                      price={product.market_prices.subscription_price}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCardGrid