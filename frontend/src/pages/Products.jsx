import React from "react";
import ProductCard from "../components/ProductCard.jsx";
import products from "../utils/productData.js";

const Products = () => {
  return (
    <div className="bg-[#F3FAF2] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Natural Farms Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
