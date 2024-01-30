// const mongoose = require(`mongoose`)

// mongoose.connect(process.env.MONGO_URI)

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(console.log('connected to mongo: ', process.env.MONGO_URI))

// making a one-stop shop for our connection instead of doing a const require then an exports
module.exports.Place = require(`./place_list`)