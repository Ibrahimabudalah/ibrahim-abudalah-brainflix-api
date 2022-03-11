const express = require("express");
const router = express.Router();
const fs = require("fs")


const selectVideos = () =>{
    const readVideos =  JSON.parse(fs.readFileSync("./data/videos.json"))
    return readVideos
}
//route for videos
router.get("/", (req, res) => {
    res.send(selectVideos())
    .status(200)
})

//route for the individual video id
router.get("/:id", (req, res) => {
    const selectedVideo = selectVideos().find((video) => video.id == req.params.id)
    console.log(selectedVideo)
    res.send(selectedVideo)
    .status(200)
})


module.exports = router