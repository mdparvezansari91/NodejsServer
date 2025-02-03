const express = require("express");

const router = express.Router();



router.get("/test", (req,res)=>{
    console.log(req)
    res.status(200).json({
        success:true,
        message:"Response From Test URL"

    })

})


module.exports = router;
