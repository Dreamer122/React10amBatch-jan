const express=require("express")
const router=express.Router()

const {ImageUpload,VideoUpload,ImageSizeReducer}=require("../Controller/Uploadfiles")
router.post("/uploadimage",ImageUpload)
router.post("/uploadvideo",VideoUpload)
router.post("/uploadimagewithquality",ImageSizeReducer)
module.exports=router