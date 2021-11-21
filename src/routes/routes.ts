import express from "express";
import { findAllOrders } from "../controller/orders.controller";
import {
  createProduct,
  findAllProducts,
} from "../controller/products.controller";
const orderRouter = express.Router();

// Retrieve all Orders
orderRouter.get("/", findAllOrders);

// Create a new product
orderRouter.post("/createProduct", createProduct);
// Get all Products
orderRouter.get("/products", findAllProducts);

export { orderRouter };
