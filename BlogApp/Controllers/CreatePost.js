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

// get all post 
exports.getAllPosts=async(req,res)=>{
    // get all post
    try{
    const allposts=await POST.find({}).populate("likes").populate("comment").exec()
    res.status(200).json({
        success:true,
        message:"all posts fetched successfully",
        data:allposts
    })
}
catch(error){
    res.status(500).json({
        success:false,
        message:"error occured while fetching all post ",
        error:error.message
    })
}
}

// find a post by id