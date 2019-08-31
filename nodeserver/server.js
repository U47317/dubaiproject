const express = require('express')
const app = express()
const port = 3001
app.listen(port, () => console.log(`Listnening to port ${port}!`))

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/kiosk',{useNewUrlParser: true})
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error!'));
db.once('open',function callback(){
    console.log('Connected to Mongo Database!!')
})
