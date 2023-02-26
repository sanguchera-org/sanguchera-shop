import { Router } from "express";
import { getProductById, getProducts } from "../controllers/product.controller";

export const productRouter = Router()

productRouter.get("/all", getProducts)

productRouter.get("/:id", getProductById)
