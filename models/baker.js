const mongoose = require('mongoose')
const Bread = require('./bread')
const {Schema} = mongoose   //new modern way
// const Schema = mongoose.Schema



const bakerSchema = new Schema({
    name:{
        type:String,
        require:true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
    },
    startDate: {type: Date, require:true},
    bio: {type: String}
}, {toJSON: { virtuals: true}})

bakerSchema.virtual('breads',{
    ref:'Bread',
    localField:'_id',
    foreignField: 'baker'
})

//hooks
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id})
    .then(deleteStatus => {
        console.log(deleteStatus)
    })
    
})

const Baker = mongoose.model('Baker',bakerSchema)
module.exports = Baker