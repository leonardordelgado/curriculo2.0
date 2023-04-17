import express  from "express";
const router = express();


router.get("/instagram",(req, res)=>{
    res.redirect("https://www.instagram.com/desenvolvedor.l.delgado/")
})
router.get("/linkedin", (req,res)=>{
    res.redirect("https://www.linkedin.com/in/leonardo-resende-bbb670204/?original_referer=")
})

router.get("/git", (req,res)=>{
    res.redirect("https://github.com/leonardordelgado")
})


export default router;