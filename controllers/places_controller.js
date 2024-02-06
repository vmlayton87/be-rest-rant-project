const router = require('express').Router()
const db = require('../models/mongoose_index') 
// isn't working with just models folder unless folder is index.js
// will work with specified folder, but won't load defaults from schema: because the form is collecting an empty string, not nothing.

// get /places/index: shows a list of all restaurants render uses file path
router.get('/', (req, res) => {
  db.Place.find()
  .then((places)=> {
    res.render(`places/index`, {places})
  })
  .catch( err => {
    console.log(err)
    res.render(`error404`)
  })
  
})

// creates a new restaurant redirect uses url path
router.post('/', (req, res) => {
  console.log(req.body)
  // this turns an object's keys into an array of the key's and looks to see if the key has a value of an empty string. 
    Object.keys(req.body).forEach(key => req.body[key] = req.body[key] === '' ? undefined : req.body[key])

  if (req.body.state == "Choose a state") {
    req.body.state = undefined
  }

  console.log(req.body)

  db.Place.create(req.body)
  .then(()=>{
    res.redirect(`/places`)
  })
  .catch( err => {
    console.log(err)
    res.render(`error404`)
  })
})
// name: {type: String, required:true}, 
//   city: {type:String, default:'Anytown'},
//   state: {type:String, default: `USA`},
//   cuisine: {type: String, required:true},
//   pic: {type: String, default: `https://placekitten.com/300/200`}, 
//   founded: Number

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate(`comments`)
  .then((place)=>{
    res.render(`places/show`, {place})
  })
  .catch( err => {
    console.log(err)
    res.render(`error404`)
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


// const router = require(`express`).Router()
// const places = require(`../models/place_list.js`)

// // Get /places
// router.get(`/`, (req, res)=>{
//     res.render(`places/index`, {places})
// })

// //GET places/new to show the form for adding another place
// router.get(`/new`, (req, res)=> {
//   res.render(`places/new`)
// })

// // GET places/:id
// router.get(`/:id`, (req, res)=>{
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render(`error404`)
//   } 
//   else if (!places[id]) {
//     res.render(`error404`)
//   } 
//   else {
//     res.render(`places/show`, {place:places[id], id})
//   }
// })

// //EDIT a place
// router.get(`/:id/edit`, (req, res)=>{
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render(`error404`)
//   } 
//   else if (!places[id]) {
//     res.render(`error404`)
//   } 
//   else {
//     res.render(`places/edit`, {place:places[id], index:id})
//   }
// })

// //POST /places uses the new form to CREATE a new place card/object
// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (req.body.state === "Choose a state") {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect(`/places`)
// })

// // Update place info in array
// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//       req.body.city = 'Anytown'
//     }
//     if (req.body.state === "Choose a state") {
//       req.body.state = 'USA'
//     }
//     places[id] =req.body
//     res.redirect(`/places/${id}`)
//   }
// })


// //DELETE a place
// router.delete(`/:id`, (req, res)=>{
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render(`error404`)
//   } 
//   else if (!places[id]) {
//     res.render(`error404`)
//   } 
//   else {
//   places.splice(id, 1)
//   res.status(303).redirect(`/places`)
//   }
// })

// module.exports = router
