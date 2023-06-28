const express = require('express')
const breads = express.Router();

const Bread = require('../models/bread')


//INDEX /breads/

breads.get('/', (req,res) => {
    // res.send(Bread)    //'This is the index at /breads/'
    res.render('index' , {
        breads : Bread,
        title: 'Index Page'
    })
})


//  NEW
breads.get('/new',(req,res) => {
    res.render('new')
})


//EDIT 
breads.get('/:indexArray/edit' , (req,res) =>{
    res.render('edit', {
        bread: Bread[req.params.indexArray],
        index: req.params.indexArray,
        title:'Edit Page'
    })
})


//SHOW
breads.get('/:arrayIndex', function(req,res) {
    // const index = req.params.arrayIndex
    // res.send(Bread[index])
    if(Bread[req.params.arrayIndex]) {
        res.render('Show', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex
        })
    } else {
        // res.send('404')
        //adding a view for bread that is not in the database
        res.render('404')  //rendering the jsx file named 404
    }
    

})

//  CREATE
breads.post('/',(req,res) => {
    if (!req.body.image) { req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
})


// DELETE
breads.delete('/:indexArray', (req,res) => {
    Bread.splice(req.params.indexArray,1)
    res.status(303).redirect('/breads')
})

//UPDATE
breads.put('/:arrayIndex', (req,res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
    
})





module.exports = breads

