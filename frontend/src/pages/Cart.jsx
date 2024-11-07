import React, { useContext, useState } from "react";
import { CartContext } from "../context/shopContext";
import CardItem from "../components/CardItem";
const Cart = () => {
  const {
    cardItem,
    increaseQuantity,
    decreaseQuantity,
    deleteCartItem,
  } = useContext(CartContext);
  return (
    <div className="bg-[#F3FAF2] p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Cart
      </h1>

      {/* Render each product */}
      <div className="max-w-3xl mx-auto">
        {cardItem.length > 0 ? (
          cardItem.map((product) => (
            <CardItem
              key={product.id}
              product={product}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteCartItem}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
