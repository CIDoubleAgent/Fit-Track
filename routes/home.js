const router = require("express").Router();

const path = require("path");

router.get("/stats", (req, res) => {
    res.sendFile(path.resolve() + path.join("/../public/stats.html"))
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.resolve() + path.join("/../public/exercise.html"))
})