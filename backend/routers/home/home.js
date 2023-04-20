import express  from "express";
import Post from "../../models/post.js";

const router = express()

router.get("/", async(req, res)=>{
    const post =  await Post.findAll()
    res.render("home/home", {post:post})
})

export default router