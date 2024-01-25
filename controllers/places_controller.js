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

//GET places/new to show the form for adding another place
router.get(`/new`, (req, res)=> {
  res.render(`places/new`)
})

// GET places/:id

//POST /places uses the new form
router.post( `/`, (req, res)=>{
  console.log(req.body)
  res.send("POST /places")
})

module.exports = router













// const router = require(`express`).Router()
// // const places = require(`../models/place_list.js`)
// let places = [{
//   name: 'H-Thai-ML',
//   city: 'Seattle',
//   state: 'WA',
//   cuisines: 'Thai, Pan-Asian',
//   pic: '/images/paul-rogers-FlYgsQGoxhA-unsplash.jpg'
// }, {
//   name: 'Coding Cat Cafe',
//   city: 'Phoenix',
//   state: 'AZ',
//   cuisines: 'Coffee, Bakery',
//   pic: '/images/nathan-dumlao-z3em1GBRhvY-unsplash.jpg'
// }]
// // Index page listing all places
// router.get(`/`, (req, res)=>{
 
//   res.render(`places/index`, {places})
// })

// //New place
// router.get(`/new`, (req, res)=>{
//   res.render(`places/new`)
// })

// //Show individual place
// router.get('/:id', (req, res) => {
//   if (places[req.params.id]) {
//     res.render('places/show', {
//       place:places[req.params.id]
//     })
//   } else {
//     res.render('error404')
//   }
// })

// //adds a new place to the places list
// router.post(`/`, (req, res)=>{
//   places.push(req.body)
//   res.render(`places/index`)
// })

// module.exports = router