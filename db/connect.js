const mongoose = require("mongoose");

const connectDB =  (uri)=>{
   console.log("My db is connected");
    mongoose.connect(uri);
}


module.exports = connectDB ;













