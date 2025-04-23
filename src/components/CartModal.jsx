// src/components/CartModal.jsx
import React from "react";

function CartModal({ cartItems, onClose, onRemove }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">Price: ${item.price}</p>
              <button
                className="text-red-600 hover:underline mt-2 text-sm"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
