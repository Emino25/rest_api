const express = require("express");
const { addProduct , getAll ,deleteProduct} = require("../controllers/productController");
const productModel = require("../model/productModel")
const router = express.Router();

/**
 * @params Post /product/addproduct
 * @description ajut d'un nve produit
 * @access public
 */

router.post("/addproduct",addProduct)

/**
 * @params Get /product/allproducts
 * @description display all products
 * @access public
 */

router.get("/allproducts",getAll)

/**
 * @params Get /product/allproducts
 * @description display all products
 * @access public
 */

router.delete("/delete/:id",deleteProduct)
module.exports=router