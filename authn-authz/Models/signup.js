const mongoose=require("mongoose")
const signupSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:["Student","Admin"]
    }
})
module.exports=mongoose.model("signUp",signupSchema)