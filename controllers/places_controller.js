const router = require(`express`).Router()
const places = require(`../models/place_list.js`)

// places index
router.get(`/`, (req, res)=>{
  res.render(`places/index`, {places})
})

//New place
router.get(`/new`, (req, res)=>{})

//Show individual place
router.get('/:id', (req, res) => {
  if (places[req.params.id]) {
    res.render('places/show', {
      place:places[req.params.id]
    })
  } else {
    res.render('error404')
  }
})

module.exports = router