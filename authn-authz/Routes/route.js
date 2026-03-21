const express=require("express")
const router=express.Router()
const {Signup,logIn}=require("../Controllers/Signup")
const {auth,isStudent,isAdmin}=require("../Middleware/Auth")
router.post("/signup",Signup)
router.post("/login",logIn)
router.get("/student",auth,isStudent,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"welcome to the student route"
    })

})
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"welcome to the admin route"
    })

})
module.exports=router;