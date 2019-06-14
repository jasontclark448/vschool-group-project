const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')


todoRouter.get('/', (req, res, next) => {
    Todo.find({user: req.user._id}, (err, todos) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(todos)
    })
})




todoRouter.post('/', (req, res, next) => {
    const todo = new todo
    todo.user = req.user._id

    //same as previously set up
    todo.save((err, newTodo) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newTodo)
    })
    
})