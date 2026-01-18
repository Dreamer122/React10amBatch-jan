const POST=require("../Models/PostSchema")

exports.createPost=async(req,res)=>{
    try{
        const {title,description,category}=req.body
        const post= await POST.create({title,description,category})
        res.status(201).json({
            success:true,
            message:"Post created successfully",
            post

        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error in creating post",
            error:error.message
        })
    }
}