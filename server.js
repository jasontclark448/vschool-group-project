const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 7777

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