import express from "express";
import { findAllOrders } from "../controller/orders.controller";
const orderRouter = express.Router();

// Retrieve all employees
orderRouter.get("/", findAllOrders);
// // Create a new employee
// router.post("/", employeeController.create);
// // Retrieve a single employee with id
// router.get("/:id", employeeController.findById);
// // Update a employee with id
// router.put("/:id", employeeController.update);
// // Delete a employee with id
// router.delete("/:id", employeeController.delete);
export { orderRouter };
