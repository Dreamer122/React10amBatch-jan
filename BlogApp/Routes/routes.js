const router=require("express").Router();
const {createPost,getAllPosts,deletedPost}=require("../Controllers/CreatePost")
const {LikePost}=require("../Controllers/LikePost")
const {createComment}=require("../Controllers/CommentPost")
router.post("/createpost",createPost)


router.post("/likepost",LikePost)
router.post("/commentpost",createComment)
router.get("/allpost",getAllPosts)
router.delete("/deletepost",deletedPost)
// router.delete("/deletepost/:id",deletedPost)
module.exports=router;