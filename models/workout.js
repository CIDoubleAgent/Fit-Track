const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;