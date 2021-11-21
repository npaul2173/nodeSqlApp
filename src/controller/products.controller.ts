import { Request, Response } from "express";
import * as productModel from "../models/product";
import { Product } from "../types/product/product";

export const createProduct = (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  productModel.create(newProduct, (err: Error, insertId: number) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json({ insertId });
  });
};

export const findAllProducts = (req: Request, res: Response) => {
  productModel.findAll((err: Error, orders: Product[]) => {
    console.log(err);

    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }

    res.status(200).json({ data: orders });
  });
};
