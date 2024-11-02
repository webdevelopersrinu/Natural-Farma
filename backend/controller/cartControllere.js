import Cart from "../model/Cart";
import Product from "../model/Product";
import asyncError from "../utils/asyncError";

export const addToCart = asyncError(async (req, res, nxet) => {
  const { userId, productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }
  const itemIndex = cart.items.findIndex((item) =>
    item.productId.equals(productId)
  );
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.status(200).json({
    status: "success",
    cart,
  });
});
