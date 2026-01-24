const COMMENT=require("../Models/CommentSchema")
const POST=require("../Models/PostSchema")
exports.createComment=async(req,res)=>{
    try{
        const {username,body,postId}=req.body
        const newComment=await new COMMENT({username,body,postId}).save();
        console.log("newComment=",newComment)
        // add comment id to post schema
        const updatedpost=await POST.findByIdAndUpdate(postId,{$push:{comment:newComment._id}},{new:true})
        .populate("comment").exec();

        res.status(201).json({
            success:true,
            message:"commented on post",
            data:updatedpost
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while commenting on post",
            error:error.message
        })
    }
}