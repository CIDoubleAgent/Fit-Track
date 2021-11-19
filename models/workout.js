const mongoose = require('mongoose');
const Schema = mongoose.Schema;

WorkoutSchema = new Schema({
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
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number
            }
        }
    ], 
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;