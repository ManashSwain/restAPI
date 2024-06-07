const mongoose = require("mongoose");

const connectDB =  (uri)=>{
   console.log("My db is connected");
    mongoose.connect(uri);
}


module.exports = connectDB ;













// const mongoose = require("mongoose");

// uri =
//  "mongodb+srv://manash0802:Mlo7S4Syh9wcoOAZ@manash.fjanfjb.mongodb.net/?retryWrites=true&w=majority&appName=Manash"

// const connectDB = async ()=>{
//     console.log("Db connected")
//   await mongoose.connect(uri);
// }

// module.exports = connectDB ;