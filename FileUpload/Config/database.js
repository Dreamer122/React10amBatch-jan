const mongoose=require("mongoose")
require("dotenv").config()

exports.dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{console.log("db ka connection thik se ho gya hai")})
    .catch((error)=>{console.log("db connection mei gadbad ho gyi hai",error)})
}