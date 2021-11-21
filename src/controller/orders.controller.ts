import express, { Request, Response } from "express";
import * as orderModel from "../models/order";
import { Order } from "../types/order/order";

export const findAllOrders = (req: Request, res: Response) => {
  orderModel.findAll((err: Error, orders: Order[]) => {
    console.log(err);

    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }

    res.status(200).json({ data: orders });
  });
};
