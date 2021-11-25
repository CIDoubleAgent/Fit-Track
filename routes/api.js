const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/workouts", async (req, res) => {
    try {
        const dbWorkout = await Workout.find();
        if (dbWorkout) {
            Workout.aggregate( [
                    {
                        $addFields: {
                            totalDuration: { $sum: "$exercises.duration" }
                        }
                    }
                ], (err, data) => {
                    if (err) {
                    res.json(err);
                    } else {
                        res.json(data);
                    }
                }
            )
        }
        } catch (err) {
            res.json(err);
        }
});

router.get("/workouts/range", async (req, res) => {
    try {
        const dbWorkout = await Workout.find();
        if (dbWorkout) {
            Workout.aggregate( [
                    {
                        $addFields: {
                            totalDuration: { $sum: "$exercises.duration" }
                        }
                    }
                ], (err, data) => {
                    if (err) {
                    res.json(err);
                    } else {
                        res.json(data);
                    }
                }
            )
        }
        } catch (err) {
            res.json(err);
        }
});

module.exports = router;