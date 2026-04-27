import express from "express";
import {
  insertProducts,
  getProducts,
  getCheapProducts,
  getRatingIn,
  getRatingNotIn,
  getRatingEqual
} from "../controllers/productController.js";

const router = express.Router();

router.post("/seed", insertProducts);
router.get("/", getProducts);
router.get("/cheap", getCheapProducts);
router.get("/rating-in", getRatingIn);
router.get("/rating-not-in", getRatingNotIn);
router.get("/rating-eq", getRatingEqual);

export default router;