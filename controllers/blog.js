module.exports = app => {
  app.get('/blog', (req, res) => {
    return res.json({pagina: 'blog'})
  })
}