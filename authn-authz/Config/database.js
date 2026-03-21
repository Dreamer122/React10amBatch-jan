const mongoose=require("mongoose")
const dbconnect=()=>{
    mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("database connected successfully")
}).
catch((error)=>{
console.log("error occured while connected database"+error)
})
}
module.exports=dbconnect