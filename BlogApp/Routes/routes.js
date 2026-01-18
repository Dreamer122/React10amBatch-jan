const router=require("express").Router();
const {createPost}=require("../Controllers/CreatePost")
router.post("/createpost",createPost)

module.exports=router;