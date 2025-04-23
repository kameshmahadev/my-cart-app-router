// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  const discountedTotal = (total * 0.9).toFixed(2); // Apply 10% discount

  if (cart.length === 0) {
    return <div className="text-center p-6 text-xl">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              <button onClick={() => removeFromCart(item.id)} className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6 text-xl font-semibold">
        Total: ${total}
      </div>
      <div className="text-right mt-2 text-lg">
        Discounted Total (10% Off): <span className="font-bold">${discountedTotal}</span>
      </div>
    </div>
  );
}

export default Cart;
