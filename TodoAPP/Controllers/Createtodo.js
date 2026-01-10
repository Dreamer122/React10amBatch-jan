const todo=require("../Models/Todo")

exports.createTodo=async(req,res)=>{
    try{
        // get data from request body
        const {title,description}=req.body
        console.log(req)
        // create document
        const newTodo=await todo.create({title,description})
        console.log("new todod",newTodo)
        // send resposnse
        res.status(201).json({
            success:true,
            message:"Todo created successfully",
            data:newTodo
        })


    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
            data:"internal server error"
        })
    }
}