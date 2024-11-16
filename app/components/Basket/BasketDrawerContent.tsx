import React from 'react';
import { useBasket, useBasketTotals} from './BasketContext';

const BasketDrawerContent = () => {
  const { basket } = useBasket();
  const { totalPrice } = useBasketTotals();

  return (
    <div className="bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col">
      <h2 className="text-xl font-bold pb-5">Review your cart</h2>

      {/* List of products */}
      {basket.length > 0 ? (
        <ul className="space-y-4 flex-grow">
          {basket.map((item) => (
            <li key={item.product.id} className="flex justify-between items-center">
              <span>{item.product.name}</span>
              <div className="flex items-center space-x-2">
                <span>Quantity: {item.quantity}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your basket is empty.</p>
      )}

      {/* Suggestions from other categories should go here */}

      {/* Total price and Checkout button at the bottom */}
      <div className="mt-auto pt-4 border-t border-gray-300">
        <div className="flex justify-between items-center font-bold">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button className="btn btn-active" onClick={() => {}}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketDrawerContent;
