const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signUp = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model( "signUp", signUp)