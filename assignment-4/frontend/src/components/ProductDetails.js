import React from "react";

const ProductDetails = ({ product, onBack }) => {
  return (
    <div className="p-10">
      <button onClick={onBack} className="mb-4 bg-gray-500 text-white px-4 py-2 rounded">
        Back
      </button>
      <div className="border p-6 rounded-lg shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-xl text-gray-700 mt-2">${product.price}</p>
        <p className="mt-4 text-gray-600">This is a great product with amazing features.</p>
      </div>
    </div>
  );
};

export default ProductDetails;
