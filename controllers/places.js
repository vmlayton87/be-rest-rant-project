const router = require(`express`).Router()

// Get /places
router.get(`/`, (req, res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/chris-liverani-oCsaxvGCehM-unsplash.jpg'
      }]

    res.render(`places/index`, {places})
})


module.exports = router