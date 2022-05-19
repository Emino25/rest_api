// add product
const productModel = require("../model/productModel")

const addProduct = async (req,res) => {
    try {
        const product = new productModel(req.body)
        await product.save()

        // console.log("test");
        res.send({product,message:"prod succf added"})
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error);
    }
}

const getAll = async (req,res) => {
    try {
        const allProducts = await productModel.find({})
        res.send(allProducts)
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error);
    }
}

const deleteProduct = async (req,res) => {
    try {
      const deletedproduct = await productModel.deleteOne({ _id: req.params.id });
        console.log(deletedproduct);
       
        res.send({message:"product is deleted"})
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error);  
    }
}
module.exports = {addProduct, getAll,deleteProduct}