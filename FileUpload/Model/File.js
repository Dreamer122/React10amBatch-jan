const mongoose=require("mongoose")

const FileUpload=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    },
    email:{
         type:String,
        required:true,
    },
    fileUrl:{
         type:String,
        required:true,
    }
})

module.exports=mongoose.model("FileUpload",FileUpload)