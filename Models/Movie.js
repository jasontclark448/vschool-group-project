const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    vote: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Movie", videoSchema)