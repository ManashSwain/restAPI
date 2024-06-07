require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/product");
const products = require("./products.json");

const start = async ()=>{
    try {
        connectDB(process.env.MONGODB_URL);
        await product.deleteMany();
         await product.create(products)
        console.log("succes")
    }
    catch (error){
     console.log(error)
    }
  
}


start()