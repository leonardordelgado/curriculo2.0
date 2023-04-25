import express  from "express";
import Post from "../../models/post.js";
import { lerJasonTitle } from "../../js/lerJson.js";
import { lerJasonCourse } from "../../js/lerJson.js";
const router = express()
import { axiosAlura } from "../../js/Axiosalura.js";

router.get("/", async(req, res)=>{
    axiosAlura()
    const post =  await Post.findAll()
    
    res.render("home/home", {post:post, lerJasonTitle:lerJasonTitle, lerJasonCourse:lerJasonCourse})
})


export default router