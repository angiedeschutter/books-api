const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const bookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
  })

  module.exports = mongoose.model('Book', bookSchema)