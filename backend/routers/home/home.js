import express  from "express";
import Post from "../../models/post.js";
import { lerJasonTitle } from "../../js/lerJson.js";
import { lerJasonCourse } from "../../js/lerJson.js";
const router = express()
import { axiosAlura } from "../../js/Axiosalura.js";

router.get("/", async(req, res)=>{
    axiosAlura()
    const post =  await Post.findAll()
    const titleAlura =  lerJasonTitle()
    const courseAlura =  lerJasonCourse()
    res.render("home/home", {post:post, titleAlura:titleAlura, courseAlura:courseAlura})
})


export default router