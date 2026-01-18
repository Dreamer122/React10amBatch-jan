const mongoose=require("mongoose")
const commentSchema=new mongoose.Schema({
    username:{type:String,required:true},
    body:{type:String,required:true},
    postId:{type:mongoose.Schema.Types.ObjectId,
        ref:"POST",
        required:true}
})
module.exports= mongoose.model("COMMENT",commentSchema);