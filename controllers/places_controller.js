const router = require(`express`).Router()
const Place = require()
// places index
router.get(`/`, (req, res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/paul-rogers-FlYgsQGoxhA-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/nathan-dumlao-z3em1GBRhvY-unsplash.jpg'
      }]

    res.render(`places/index`, {places})
})

//New place
router.get(`/new`, (req, res)=>{})

//Show individual place
router.get('/:id', (req, res) => {
  if (Place[req.params.id]) {
    res.render('Show', {
      place:Place[req.params.id]
    })
  } else {
    res.render('error404')
  }
})

module.exports = router