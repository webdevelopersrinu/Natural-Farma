import React from 'react';

const CardItem = ({ product, increaseQuantity, decreaseQuantity, deleteItem }) => {
  const { image, title, price, quantity } = product;

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 mb-4">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Product Details */}
      <div className="ml-4 flex-1">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>

        {/* Quantity Controls */}
        <div className="flex items-center mt-2">
          {/* Decrease Quantity Button */}
          <button
            onClick={() => decreaseQuantity(product.id)}
            className="bg-gray-300 text-gray-600 px-2 py-1 rounded hover:bg-gray-400"
          >
            -
          </button>

          {/* Quantity */}
          <span className="mx-4 text-gray-800">{quantity}</span>

          {/* Increase Quantity Button */}
          <button
            onClick={() => increaseQuantity(product.id)}
            className="bg-gray-300 text-gray-600 px-2 py-1 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => deleteItem(product.id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
      >
        Delete
      </button>
    </div>
  );
};

export default CardItem;
