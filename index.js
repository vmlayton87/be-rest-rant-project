// DEPENDENCIES
const express = require('express')

//CONFIGURATION
require(`dotenv`).config()
const app = express()
const methodOverride = require(`method-override`)

// MIDDLEWARE
// require jsx for the view engine
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())
// uses a public folder to have items/files that are used by all
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride(`_method`))

// ROUTES



// The home page
app.get('/', (req, res) => {
    res.render('home')
})

//use the places_controller.js file to create all places pages
app.use(`/places`, require(`./controllers/places_controller`))

//wildcard 404 page
app.get(`*`, (req, res)=>{
    res.status(404).render(`error404`)
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
