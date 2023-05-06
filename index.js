const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello, world!')
})

const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app;
