import React from "react";

const Product = ({ product, onViewDetails }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => onViewDetails(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Details
      </button>
    </div>
  );
};

export default Product;
