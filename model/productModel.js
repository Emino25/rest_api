const mongoose = require("mongoose")
const {Schema} = mongoose;

const productSchema = new Schema({
    name:  {type:String,required:true}, // String is shorthand for {type: String}
    price: Number,
    quantity: Number,
    image: String,
    createDate: { type: Date, default: Date.now },
    available: {type: Boolean,default: true},
  });
  module.exports= productModel = mongoose.model("product",productSchema)