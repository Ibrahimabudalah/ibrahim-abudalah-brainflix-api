const express = require("express");
const app = express();


//middleware
app.use((req, res, next) => {
    console.log("Incoming request")
    next()
})

//routes
const route = require("./routes/videos")
app.use("/videos", route)

//listener
app.listen(8080, () =>{
    console.log("server is running on port 8080")
})
