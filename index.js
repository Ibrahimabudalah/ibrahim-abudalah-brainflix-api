require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
// const { PORT, BACKEND_URL } = process.env

//this will use the public folder to display the images and it will be as in "http://localhost:8080/images/<imageName>"
app.use(express.static("public"))

//this is used to access the request.body in the POST request
app.use(express.json())

//enables cors
app.use(cors())


//middleware
app.use((req, res, next) => {
    console.log("Incoming request")
    next()
})

//routes
const route = require("./routes/videos")
app.use("/videos", route)

//listener
app.listen(process.env.PORT, () =>{
    console.log("server is running on port 8080")
})
