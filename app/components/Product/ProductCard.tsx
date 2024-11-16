import React from 'react'
import AddToBasket from '../Basket/AddToBasket';

interface ProductCard {
  id: string;
  name: string;
  productPackagingUrl: string;
  price: number;
}

const ProductCard = ({ id, name, productPackagingUrl, price } : ProductCard) => {
    return (
      <div className="card bg-base-100 w-72 h-96 shadow-xl border p-4 rounded-lg flex flex-col">
        <figure className="h-2/3 w-full overflow-hidden">
          <img
            src={productPackagingUrl}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-col justify-between h-1/3">
          <h2 className="text-lg font-semibold text-center">{name}</h2>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">${price}</h2>
            <div className="card-actions">
              <AddToBasket 
              productId={id}
              productName={name}
              productPrice={price}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard