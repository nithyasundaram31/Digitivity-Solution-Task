const express=require("express");
const { createProduct, updateProduct, deleteProduct, getProducts } = require("../controllers/productController");
const productRoute=express.Router();
productRoute.get("/",getProducts);
productRoute.post("/",createProduct);
productRoute.put("/:id",updateProduct);
productRoute.delete("/:id",deleteProduct)

module.exports=productRoute