const router = require(`express`).Router()
const places = require(`../models/place_list.js`)

// Get /places
router.get(`/`, (req, res)=>{
    res.render(`places/index`, {places})
})

//GET places/new to show the form for adding another place
router.get(`/new`, (req, res)=> {
  res.render(`places/new`)
})

// GET places/:id
router.get(`/:id`, (req, res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render(`error404`)
  } 
  else if (!places[id]) {
    res.render(`error404`)
  } 
  else {
    res.render(`places/show`, {place:places[id], id})
  }
})

//EDIT a place
router.get(`/:id/edit`, (req, res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render(`error404`)
  } 
  else if (!places[id]) {
    res.render(`error404`)
  } 
  else {
    res.render(`places/edit`, {place:places[id], index:id})
  }
})

//POST /places uses the new form to CREATE a new place card/object
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (req.body.state === "Choose a state") {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect(`/places`)
})

//DELETE a place
router.delete(`/:id`, (req, res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render(`error404`)
  } 
  else if (!places[id]) {
    res.render(`error404`)
  } 
  else {
  places.splice(id, 1)
  res.status(303).redirect(`/places`)
  }
})

module.exports = router
