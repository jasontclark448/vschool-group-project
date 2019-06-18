const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
    author: {
        type: String,
        required: String
    },
    vote: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true
    },
    videoSource: String,
    description: String,
    thumbnail: String,
    uploadDate: String,
})

module.exports = mongoose.model("Movie", videoSchema)