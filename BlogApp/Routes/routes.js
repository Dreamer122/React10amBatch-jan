const router=require("express").Router();
const {createPost,getAllPosts}=require("../Controllers/CreatePost")
const {LikePost}=require("../Controllers/LikePost")
const {createComment}=require("../Controllers/CommentPost")
router.post("/createpost",createPost)

router.post("/likepost",LikePost)
router.post("/commentpost",createComment)
router.get("/allpost",getAllPosts)
module.exports=router;