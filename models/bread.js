//require mongoose
const mongoose = require('mongoose')
//creating shorthand for the schema constructor
const {Schema} = mongoose




// schema
const breadSchema = new Schema ({
    name: {type: String, required: true},
    hasGluten: Boolean,
    image: {type: String, default: 'http://placehold.it/500x500.png'},

    //this id is ass with a doc in the 
    baker: {type: Schema.Types.ObjectId, ref:'Baker'}
    })


//helper methods


//instance method
 breadSchema.methods.getBakedBy = function() {
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}


//static method
breadSchema.statics.findBakersOtherBreads = function(bakersName) {
    return this.find({baker: bakersName})
}



// model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread








//local array data
// module.exports = [
//     {
//       name: 'Rye',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//       ingredients : ['yeast', "baking powder" , 'baking soda', 'water']
//     },
//     {
//       name: 'French',
//       hasGluten: true,
//        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//        ingredients : ['yeast', "baking powder" , 'baking soda', 'water']
//     },
//     {
//       name: 'Gluten-Free',
//       hasGluten: false,
//       image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//       ingredients : ['yeast', "baking powder" , 'baking soda', 'water']
//     },
//     {
//       name: 'Pumpernickel',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//       ingredients : ['yeast', "baking powder" , 'baking soda', 'water']
//     }
//   ]
  
