import express  from "express";

const router = express()

router.get("/",(req, res)=>{
    res.render("home/home")
})

export default router