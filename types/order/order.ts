import { BasicProduct, Product } from "../product/product";
import { BasicCustomer, Customer } from "../customer/customer";

export interface BasicOrder {
  product: BasicProduct;
  customer: BasicCustomer;
  productQuantity: number;
}

export interface Order extends BasicOrder {
  orderId: number;
}

export interface OrderWithDetails extends Order {
  product: Product;
  customer: Customer;
}
