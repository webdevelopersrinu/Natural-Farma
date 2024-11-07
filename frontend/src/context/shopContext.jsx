import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cardItem, setCardItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const addToCard = (product) => {
    const existingProduct = cardItem.find((item) => item.id === product.id);
    if (existingProduct) {
      setCardItem(
        cardItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cardItem, { ...product, quantity: 1 }]);
    }
    console.log(cardItem);
  };
  const increaseQuantity = (productId) => {
    setCardItem(
      cardItem.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (productId) => {
    const product = cardItem.find((item) => item.id === productId);
    if (product.quantity > 1) {
      setCardItem(
        cardItem.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      deleteCartItem(productId);
    }
  };
  const deleteCartItem = (productId) => {
    setCardItem(cardItem.filter((item) => item.id !== productId));
  };
  const calculateTotalQuantity = () => {
    const total = cardItem.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  };
  useEffect(() => {
    calculateTotalQuantity();
  }, [cardItem]);
  const value = {
    cardItem,
    addToCard,
    increaseQuantity,
    decreaseQuantity,
    deleteCartItem,
    totalQuantity
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
