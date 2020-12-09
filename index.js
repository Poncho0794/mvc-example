const express = require('express')
const bodyParser = require('body-parser')

const BlogController = require('./controllers/blog.controller')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.get('/', BlogController.renderAllBlog)
const port = process.env.PORT || 3000
app.listen(port , () => {
  console.log(`App listening at http://localhost:${port}`)
})