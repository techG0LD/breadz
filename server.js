const express = require('express')
const morgan =require('morgan')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT;

app.use(morgan('tiny'))



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))


// console.log(PORT)

//ROUTES

app.get('/', function(req,res){
    res.send('Welcome to an amazing app about BREADZ')
})


//BREADS ROUTES

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController)

//CATCH ALL ROUTE    404 PAGE 
app.get('*',(req,res) => {
    res.send('404')
})



app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
})