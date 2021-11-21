const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [
        {
            name: {
                type: String
            },
            type: {
                type: String
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number
            }
        }
    ], 
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;