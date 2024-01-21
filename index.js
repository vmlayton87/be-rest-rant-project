require(`dotenv`).config()

const express = require('express')
const app = express()

//homepage
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//wildcard 404 page
app.get(`*`, (req, res)=>{
    res.status(404).send(`<h1>404 Page</h1>`)
})
app.listen(process.env.PORT)
