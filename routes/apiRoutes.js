const router = require("express").Router();
const { Router } = require("express");
const { Workout } = require("../models");
const path = require("path");

router.get("/stats", (req, res) => {
    res.sendFile(path.resolve() + path.join("/../public/stats.html"))
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.resolve() + path.join("/../public/exercise.html"))
})

router.post("/api/workouts", (req, res) => {
    const workout = new Workout(req.body);
    workout.save(function (err) {
        res.json( workout )
    })
})

router.post("/exercise", (req, res) => {

})

module.exports = router