const express = require("express");
const app = express()
require("dotenv").config();
const connectDB = require("./config/connectDB")


connectDB();
app.use(express.json())
app.use("/product",require("./routes/productRoute"))


app.listen(process.env.port, (error) => error ? console.log(error) : console.log(`server is running on ${process.env.port}`))