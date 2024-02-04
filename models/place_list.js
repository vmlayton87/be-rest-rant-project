const mongoose = require(`mongoose`)

const placeSchema = new mongoose.Schema({
  name: {type: String, required:true}, 
  city: {type:String, default:'Anytown'},
  state: {type:String, default: `USA`},
  cuisine: {type: String, required:true},
  pic: {type: String, default: `https://placekitten.com/300/200`}, 
  founded: {
    type: Number, 
    min:[1673, `Wait, how old is this place?`],
    max:[new Date().getFullYear(), `Can I borrow your time machine?`]
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


module.exports = mongoose.model(`Place`, placeSchema)


// before mongoose
// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisine: 'Thai, Pan-Asian',
//     pic: '/images/paul-rogers-FlYgsQGoxhA-unsplash.jpg'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisine: 'Coffee, Bakery',
//     pic: '/images/nathan-dumlao-z3em1GBRhvY-unsplash.jpg'
//   }]