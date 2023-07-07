const express = require('express')
const breads = express.Router();

const Bread = require('../models/bread')
const seedData = require('../seeds')


//INDEX /breads/

breads.get('/', (req,res) => {
    // res.send(Bread)    //'This is the index at /breads/'
    Bread.find()
    .then(foundBreads => {
        res.render('index', {
        breads : foundBreads,
        title: 'Index Page'
        })
    })
})


//  NEW
breads.get('/new',(req,res) => {
    console.log('hello')
    res.render('new')
})




//SHOW
breads.get('/:id', function(req,res) {
    const id = req.params.id;

    Bread.findById(id)
        .then(foundBread => {
            const bakersName = foundBread.baker;
            Bread.findBakersOtherBreads(bakersName)
            .then((bakersOtherBreads) => {
                console.log({bakersOtherBreads})
                 res.render('show', {
                bread: foundBread,
                bakersOtherBreads
            })
            })
            const bakedBy = foundBread.getBakedBy()
            console.log(bakedBy)

            // console.log(foundBread)  //shows what bread object is passed

          
        })
        .catch(err => {
            res.render('404')
        })





    // if(Bread[req.params.arrayIndex]) {
    //     res.render('Show', {
    //     bread: Bread[req.params.arrayIndex],
    //     index: req.params.arrayIndex
    //     })
    // } else {
    //     // res.send('404')
    //     //adding a view for bread that is not in the database
    //     res.render('404')  //rendering the jsx file named 404
    // }
    
})

//  CREATE
breads.post('/',(req,res) => {
    if (!req.body.image) {
         req.body.image = undefined
    }

    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    Bread.create(req.body)
    .then(() => {
       res.redirect('/breads') 
    })
    .catch ((error) => {
        res.render('new', {
            error
        })
    })
    


})


// DELETE
breads.delete('/:id', (req,res) => {
    // Bread.splice(req.params.indexArray,1)

    Bread.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(303).redirect('/breads')
    })
})

//UPDATE
breads.put('/:id', (req,res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    // Bread[req.params.arrayIndex] = req.body

    const id = req.params.id

    Bread.findByIdAndUpdate(id, req.body, {new: true} )
    .then (foundBread => {
        res.redirect(`/breads/${id}`)
    })
})

//EDIT 
breads.get('/:id/edit' , (req,res) => {

    Bread.findById(req.params.id)
        .then(foundBread => {
            console.log(foundBread)
            res.render('edit', {
                bread: foundBread,
                title:'Edit Page'
            })
        })
})


//SEED ROUTE

breads.get('/data/seed', (req,res) => {
    Bread.insertMany(seedData).then(() => {
        res.redirect('/breads')
      })
})

breads.get('/data/updatefield', (req, res) => {
    Bread.updateMany({baker: {$exists: false}}, {baker: 'Rachel'})
    .then(() => {
      res.redirect('/breads')
    })
  })

module.exports = breads

