const mongoose=require('mongoose');
require("dotenv").config();
const connectDB=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{console.log("Database connected successfully")})
    .catch((err)=>{console.log("Database connection error:", err)});
}
module.exports=connectDB;