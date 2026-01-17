const express=require('express');
const router=express.Router();
const {createTodo}=require("../Controllers/Createtodo")
const {getAllTodos}=require("../Controllers/Alltodo")
const {deleteTodo}=require("../Controllers/Deletetodo")
const {updateTodo}=require("../Controllers/Updatetodo")

router.post("/createtodo",createTodo)
router.get("/getalltodos",getAllTodos)
router.delete("/deletetodo",deleteTodo)
router.put("/updatetodo",updateTodo)
module.exports=router;