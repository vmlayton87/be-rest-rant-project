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

//POST /places uses the new form
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

module.exports = router
