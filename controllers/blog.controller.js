const blogModel = require('../models/blog.model')

exports.renderAllBlog = (req,res) => {
  const blogs = blogModel.getAll()
  res.render('blogs-list', { title: "Lista de Blogs" ,blogs })
}