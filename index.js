const express = require("express");
const app = express();
require("dotenv").config()
const { PORT, BACKEND_URL } = process.env
const cors = require("cors")



//middleware
app.use((req, res, next) => {
    console.log("Incoming request")
    next()
})

app.use(express.json())

app.use(cors())


//routes
const route = require("./routes/videos")
app.use("/videos", route)

//listener
app.listen(process.env.PORT, () =>{
    // console.log(process.env.BACKEND_URL+`:${PORT}`)
    console.log("server is running on port 8080")
})
