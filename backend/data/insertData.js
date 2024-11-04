import mongoose from "mongoose";
import "dotenv/config";
import {
  raviProductData,
  srinuProductData,
  gopiProductData,
} from "./productData.js";
import Product from "../model/Product.js";

mongoose
  .connect(
    "mongodb+srv://webdevelopersrinu9:VcYbVR3jKlhxTQ9v@naturalfarms.m4h6n.mongodb.net/"
  )
  .then(() => console.log("db Conection is success..."))
  .catch(() =>
    console.log("db Conection is not success something went worng...")
  );

async function dataInsert() {
  try {
    const dataInsert = await Product.create(gopiProductData);
    console.log("data insert successfully");
  } catch (err) {
    console.log(err);
    console.log("data not insert something went worng!");
  }
}
async function dataDelete() {
  try {
    const dataInsert = await Product.deleteMany();
    console.log("data delete successfully");
  } catch (err) {
    console.log(err);
    console.log("data not delete something went worng!");
  }
}

