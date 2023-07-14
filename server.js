const express = require('express')
const morgan =require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
// const mongoURI = `mongodb://localhost:27017/breads`
require('dotenv').config()
const app = express()

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to Mongo Successfully');
        })
        .catch(err => {
            console.error('Failed to connect to Mongo: ' + err);
        });
}





const PORT = process.env.PORT;

app.use(morgan('tiny'))



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))



// console.log(PORT)

//ROUTES

app.get('/', function(req,res){
    res.send('Welcome to an amazing app about BREADZ')
})


//BREADS ROUTES
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController)

// Baker Routes
const bakerController = require('./controllers/bakers_controllers.js')
app.use('/bakers',bakerController)


//CATCH ALL ROUTE    404 PAGE 
app.get('*',(req,res) => {
    res.send('404')
})

connectToMongo()

app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
    console.log(`http://localhost:${PORT}/breads`)
})