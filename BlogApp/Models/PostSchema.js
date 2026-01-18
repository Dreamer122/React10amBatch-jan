const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LIKE"
    }],
    comment:[{
         type:mongoose.Schema.Types.ObjectId,
        ref:"COMMENT"
    }]
})

module.exports=mongoose.model("POST",postSchema);