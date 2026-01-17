const Todo=require("../Models/Todo")

exports.getAllTodos=async(req,res)=>{
    try{
        const alltodo= await Todo.find({})
        res.status(200).json({
            success:true,
            message:"All todos fetched successfully",
            data:alltodo
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
            data:"internal server error"
        })
    }
}