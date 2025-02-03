const express = require("express");

const router = express.Router();



router.get("/test", (req,res)=>{
    console.log("hit on /test")
    res.status(200).json({
        success:true,
        message:"Response From Test URL"

    })

})


module.exports = router;
