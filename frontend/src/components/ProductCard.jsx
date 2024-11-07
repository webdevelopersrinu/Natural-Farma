import React, { useContext } from "react";
import { CartContext } from "../context/shopContext";

const ProductCard = ({ id, image, title, description, rating, price }) => {
  const { addToCard } = useContext(CartContext);
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-xs">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Product Info */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {/* Star Rating */}
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.44 4.408h4.63c.969 0 1.371 1.24.588 1.81l-3.748 2.718 1.439 4.409c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.761 2.654c-.785.57-1.84-.197-1.54-1.118l1.44-4.409-3.749-2.718c-.783-.57-.38-1.81.589-1.81h4.63l1.44-4.408z" />
            </svg>
          ))}

          {/* Numeric Rating */}
          <span className="ml-2 text-gray-600 text-sm">{rating}/5</span>
        </div>

        {/* Price */}
        <div className="mt-3 text-lg font-bold text-green-600">${price}</div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* Wishlist Button */}
          <button className="bg-gray-200 text-gray-600 py-1 px-2 rounded hover:bg-gray-300 transition">
            Add to Wishlist
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCard({ id, price, image, title })}
            className="bg-green-700 text-white py-1 px-2 rounded hover:bg-green-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
