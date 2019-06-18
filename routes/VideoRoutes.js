const express = require("express")
const videoRouter = express.Router()
const Movie = require('../models/Movie.js')

// Add One - Insert
videoRouter.post("/", (req, res) => {
    console.log(req.body)
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// Get all - Entire Collection (sub-collection)
videoRouter.get("/", (req, res) => {
    Movie.find((err, allTheMovies) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(allTheMovies)
    })
})

// Get one
videoRouter.get("/:_id", (req, res) => {
    Movie.findOne({_id: req.params._id}, (err, foundMovie) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundMovie)
    })
})

// Delete One
videoRouter.delete("/:_id", (req, res) => {
    Movie.findOneAndDelete({_id: req.params._id}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully delete movie ${deletedItem.title}`)
    })
})

// Put - Update
videoRouter.put("/:_id", (req, res) => {
    Movie.findOneAndUpdate(
        {_id: req.params._id}, //  Go find this movie with this _id
        req.body,              //  Update it with this object from the user
        {new: true},           //  Send back the updated version of the object plz.
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedMovie)
        }  
    )
})


// UPVOTE by One
videoRouter.put("/vote/:_id", (req, res) => {
    Movie.findOneAndUpdate(
        {_id: req.params._id}, //  Go find this movie with this _id
        {$inc: {vote: 1}},              //  Update it with this object from the user
        {new: true},           //  Send back the updated version of the object plz.
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedMovie)
        }  
    )
})

// Request from the front end to the vote route:

// axios.put("/movies/vote/${movieId}").then(res => {
//     console.log(res) // updatedMovie with new vote
// })

module.exports = videoRouter


