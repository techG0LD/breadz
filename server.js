const express = require('express')
const morgan =require('morgan')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT;

app.use(morgan('tiny'))

// console.log(PORT)

//ROUTES

app.get('/', function(req,res){
    res.send('Welcome to an amazing app about BREADZ')
})


//BREADS ROUTES

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController)



app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
})