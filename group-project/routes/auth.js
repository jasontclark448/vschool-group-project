const express = require('express')
const user = require('../models/login')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/signUp', (req, res, next) => {
    user.findOne({username: req.body.username}, (err, existingUser) => {
        if (err){
            res.status(500)
            return next (err)
        }
        if (existingUser !==null) {
            res.status(400)
            return next(new Error('That username already exists!'))
        }
        const newUser = new user(req.body)
        newUser.save((err, user) => {
            if (err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success: true, user: user.toObject(), token})
        })
    })
})

authRouter.post('/login', (res, req, next) => {
    user.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
        return next(err)
        }
        if (!user || user.password !== req.body.password){
            res.status(403)
            return next(new Error('Email or password are incorrect'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)

        return res.send({token: token, user: user.toObject(), success: true})
    })
})

module.exports = authRouter