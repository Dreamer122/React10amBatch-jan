const express=require('express');
const router=express.Router();
const {createTodo}=require("../Controllers/Createtodo")

router.post("/createtodo",createTodo)
module.exports=router;