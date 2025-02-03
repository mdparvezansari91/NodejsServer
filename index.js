const express = require("express");
const router = require("./routes/route");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000

app.use("/api",router);

app.get("/", (req, res) => {
    res.send("Hello world mondified");
});

app.listen(PORT,()=>{
    console.log("server is listening")
})

// Export the app as a serverless function
module.exports = app;