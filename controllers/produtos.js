module.exports = app => {
  app.get('/produtos', (req, res) => {
    return res.json({pagina: 'produtos'})
  });
}