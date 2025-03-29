import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        <>
          <Hero />
          <ProductList onViewDetails={setSelectedProduct} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
