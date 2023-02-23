const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//this function is to read the JSON file in order to modify it
const selectVideos = () => {
  const readVideos = JSON.parse(fs.readFileSync("./data/videos.json"));
  return readVideos;
};

//route for videos
router.get("/", (req, res) => {
  res.send(selectVideos()).status(200);
});

//route for the individual video id
router.get("/:id", (req, res) => {
  const selectedVideo = selectVideos().find(
    (video) => video.id == req.params.id
  );
  res.send(selectedVideo).status(200);
});

//route for the video post
router.post("/", (req, res) => {
  //making a new video with the hardCoded data and the appropriate image.
  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    channel: "CodeBro",
    image: "https://brainflix-api-1233.onrender.com/images/image9.jpg",
    description: req.body.description,
    views: 1,
    likes: 1,
    timestamp: Date.now(),
    comments: [
      {
        name: "Ibrahim Abudalah",
        comment:
          "We recently stayed at the Inn for our honeymoon. I definitely recommend the experience. We can’t wait to return for our anniversary!",
        timestamp: Date.now(),
        likes: 0,
      },
    ],
  };
  // storing the JSON file in a variable and then pushing the new created video to that file
  let writeToFile = selectVideos();
  writeToFile.push(newVideo);

  //writing to the JSON file
  fs.writeFileSync("./data/videos.json", JSON.stringify(writeToFile));
  res.json(newVideo).status(201);
});

module.exports = router;
