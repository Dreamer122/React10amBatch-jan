const Todo=require("../Models/Todo")

exports.deleteTodo=async(req,res)=>{
    try{
        const {id} =req.body
        const deleted_todo= await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Todo deleted successfully",
            data:deleted_todo
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