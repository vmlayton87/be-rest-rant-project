const router = require('express').Router()
const db = require(`../models`)

// get /places/index: shows a list of all restaurants
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

// creates a new restaurant
router.post('/', (req, res) => {
  res.send('POST /places stub')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
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
