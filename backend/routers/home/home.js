import express  from "express";
import Post from "../../models/post.js";
import { lerJasonTitle } from "../../js/lerJson.js";
import { lerJasonCourse } from "../../js/lerJson.js";
const router = express()

router.get("/", async(req, res)=>{
    const post =  await Post.findAll()
    const titleAlura =  lerJasonTitle()
    const courseAlura =  lerJasonCourse()
    res.render("home/home", {post:post, titleAlura:titleAlura, lerJasonCourse:lerJasonCourse})
})


export default router