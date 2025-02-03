const express = require("express");
const router = require("./routes/route");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000

app.use(cors())
app.use("/api",router);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API",
    });
});

app.listen(PORT,()=>{
    console.log("server is listening")
})

// Export the app as a serverless function
module.exports = app;