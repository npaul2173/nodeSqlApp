import { OkPacket, RowDataPacket } from "mysql2";
import { db } from "../db/db.config";
import { Product } from "../types/product/product";

export const create = (product: Product, callback: Function) => {
  const queryString =
    "INSERT INTO Product (name, description, instock_quantity, price) VALUES (?, ?, ?, ?)";

  db.query(
    queryString,
    [product.name, product.description, product.instockQuantity, product.price],
    (err, result) => {
      if (err) {
        callback(err);
      }

      const insertId = (<OkPacket>result).insertId;
      callback(null, insertId);
    }
  );
};

export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM Product`;

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }

    const rows = <RowDataPacket[]>result;
    const products: Product[] = [];

    rows.forEach((row) => {
      const product: Product = {
        name: row.name,
        description: row.description,
        id: row.id,
        instockQuantity: row.instockQuantity,
        price: row.price,
      };
      products.push(product);
    });
    callback(null, products);
  });
};
