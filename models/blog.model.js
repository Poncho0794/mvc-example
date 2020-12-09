const blogs = [{
  id: 1,
  title: "Blog 1",
  description: "Es un blog test",
  likes: "20"
},
{
  id: 2,
  title: "Blog 2",
  description: "Es un blog test",
  likes: "20"
},
{
  id: 3,
  title: "Blog 3",
  description: "Es un blog test",
  likes: "20"
},
{
  id: 4,
  title: "Blog 4",
  description: "Es un blog test",
  likes: "20"
}]

exports.getAll = () => blogs;
exports.getById = (id) => blogs.find(item => id === item.id)
exports.create = (blog) => {
  blogs.push({
    id: blogs.length,
    ...blog
  })
}
exports.update = (id, blogInfo) => {
  const blogToUpdateIndex = blogs.findIndex(item => item.id === id);
  blogs[blogToUpdateIndex] = Object.assign({}, blogs[blogToUpdateIndex], blogInfo)
  return blogs[blogToUpdateIndex]
}