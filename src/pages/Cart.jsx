import React from 'react';
import { useCart } from '../Context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="ml-4">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-500">Tenure: {item.tenure} months</p>
                  <p className="text-primary font-bold">₹{item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
