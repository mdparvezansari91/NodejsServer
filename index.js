const express = require("express");
const router = require("./routes/route");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json());
app.use("/api",router);

app.get("/", (req, res) => {
    console.log("hit on home")
    res.json({
        sucess:true,
        message: "Welcome to the API",
    });
});

app.listen(PORT,()=>{
    console.log("server is listening")
})

// Export the app as a serverless function
module.exports = app;