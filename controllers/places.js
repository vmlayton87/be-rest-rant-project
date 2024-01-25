const router = require(`express`).Router()

// Get /places
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


module.exports = router