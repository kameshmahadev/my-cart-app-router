// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ product, isInCart, onAddToCart, onRemoveFromCart }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col">
      <img src={product.image} alt={product.title} className="h-48 object-contain mb-2" />
      <h2 className="font-semibold text-sm line-clamp-2 mb-1">{product.title}</h2>
      <p className="text-lg font-bold mb-2">${product.price}</p>
      <button
        onClick={() => (isInCart ? onRemoveFromCart(product.id) : onAddToCart(product))}
        className={`mt-auto px-4 py-2 rounded text-white ${
          isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
