const express=require("express")
const router=express.Router()

const {ImageUpload}=require("../Controller/Uploadfiles")
router.post("/uploadimage",ImageUpload)
module.exports=router