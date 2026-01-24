const LIKE=require("../Models/LikeSchema");
const POST=require("../Models/PostSchema");
exports.LikePost=async(req,res)=>{
    try
    {
        const {postId,username}=req.body;
        const like=await new LIKE({postId,username}).save();
        console.log("new like=",like)
      const updatedpost=  await POST.findByIdAndUpdate(postId,{$push:{likes:like._id}},{new:true}).populate("likes").exec();
    res.status(201).json({
        success:true,
        message:"Post liked successfully",
        data:updatedpost
    })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error in liking post",
            error:error.message
        })
    }

}