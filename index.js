require(`dotenv`).config()

const express = require('express')
const app = express()

// require jsx for the view engine
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())

//use the places.js file to create all places pages
app.use(`/places`, require(`./controllers/places`))

//homepage
app.get('/', (req, res) => {
    res.render('home')
})

//wildcard 404 page
app.get(`*`, (req, res)=>{
    res.status(404).send(`<h1>404 Page</h1>`)
})
app.listen(process.env.PORT)
