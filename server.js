const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 7777
require('dotenv').config() 
// npm install dotenv on root folder
const expressJwt = require('express-Jwt')
// npm install express-jwt

app.use(express.json())


mongoose.connect(
    "mongodb://localhost:27017/tings-video-db", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
    console.log("Connected to the DB")
})

app.get('/', (req, res) => {
    res.send('up and running')
})

app.use('/videos', require('./routes/VideoRoutes.js')) 

app.get('/users', (req, res) => {
    res.send('users routes working')
})



app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.use('/auth', require('./routes/auth'))
app.use('/api', expressJwt({secret:process.env.SECRET}))

// Add `/api` before your existing `app.use` of the todo routes.
// This way, it must go through the express-jwt middleware before
// accessing any todos, making sure we can reference the "currently
// logged-in user" in our todo routes.


// below replace todo with server where the object is
// app.use('./todo',)require('./routes/todo.js')
app.use('/api/todo', require('./routes/todo'))

app.use((err, req, next) => {
    console.error(err)
    if (err.name === 'UnauthorizedError'){
        res.status(er.status)
    }
    return res.send({ message: err.message})
})
