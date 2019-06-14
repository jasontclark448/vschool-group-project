const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interactionSchema = new Schema({
    userId: {
        required: true,
        type: String
    },
    movieId: {
        required: true,
        type: String
    },
    emoji: String,
    comment: String,
    vote: Number
})

module.exports = interactionSchema