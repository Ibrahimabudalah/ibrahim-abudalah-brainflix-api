const express = require("express");
const router = express.Router();
const fs = require("fs");
const { title } = require("process");
const { v4: uuidv4 } = require('uuid');


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

//route for the video post
router.post("/", (req, res) => {
    const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
    }
    const readFile = selectVideos();
    readFile.push(newVideo)


    fs.writeFileSync("./data/videos.json", JSON.stringify(readFile))
    res.json(newVideo).status(200)
    console.log(newVideo)
})


module.exports = router