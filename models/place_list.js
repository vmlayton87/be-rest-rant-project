const mongoose = require(`mongoose`)

const placeSchema = new mongoose.Schema({
  name: {type: String, required:true}, 
  city: {type:String, default:`Anytown`},
  state: {type:String, default: `USA`},
  cuisine: {type: String, required:true},
  pic: {type: String, default: `http://placekitten.com/300/200`}, 
  founded: Number
})

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