import React from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "Smartphone", price: 699, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
];

const ProductList = ({ onViewDetails }) => {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.id} product={product} onViewDetails={onViewDetails} />
      ))}
    </section>
  );
};

export default ProductList;
