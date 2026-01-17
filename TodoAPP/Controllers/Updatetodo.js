const Todo=require("../Models/Todo")

exports.updateTodo=async(req,res)=>{
    try{
        const {id,title,description}=req.body
        const updatedtodo= await Todo.findByIdAndUpdate({_id:id}, {title,description,updatedAt:Date.now()}, { new: true } )
        res.status(200).json({
            success:true,
            message:"Todo updated successfully",
            data:updatedtodo
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