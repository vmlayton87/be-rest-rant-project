// DEPENDENCIES
const express = require('express')

//CONFIGURATION
require(`dotenv`).config()
const app = express()

// MIDDLEWARE
// require jsx for the view engine
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())
// uses a public folder to have items/files that are used by all
app.use(express.static('public'))

// ROUTES

//use the places.js file to create all places pages
app.use(`/places`, require(`./controllers/places_controller`))

//homepage
app.get('/', (req, res) => {
    res.render('home')
})

//wildcard 404 page
app.get(`*`, (req, res)=>{
    res.status(404).render(`error404`)
})

// LISTEN
app.listen(process.env.PORT)
