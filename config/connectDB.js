const mongoose = require("mongoose")

const connectDB = async () => { 
    try {
        await mongoose.connect(process.env.mongoURL) 
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
 }

module.exports=connectDB;