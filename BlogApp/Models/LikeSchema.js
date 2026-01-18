const mongoose=require("mongoose")
const likeSchema=new mongoose.Schema({
    username:{type:String,required:true},
    postId:{type:mongoose.Schema.Types.ObjectId,
        ref:"POST",
        required:true}
})
module.exports= mongoose.model("LIKE",likeSchema);