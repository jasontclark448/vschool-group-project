const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 7777

app.get('/', (req, res) => {
    res.send('up and running')
})
app.get('/users', (req, res) => {
    res.send('users routes working')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})