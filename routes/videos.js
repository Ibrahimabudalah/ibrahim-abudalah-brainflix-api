const express = require("express");
const router = express.Router();
const fs = require("fs")


const selectVideo = () =>{
    const readVideos =  JSON.parse(fs.readFileSync("./data/videos.json"))
    return readVideos
}
//route for videos
router.get("/", (req, res) => {
    res.send(selectVideo())
    .status(200)
})


module.exports = router