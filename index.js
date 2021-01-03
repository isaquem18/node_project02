const express = require('express');

const app = express();
const multerConfig = require('./a');
const multer = require('multer');
const crypto = require('crypto');

app.use(express.json());

//consign().include('controllers').into(app);


app.get('/', function (req, res) {
  return res.json({pagina: 'home'})
});

app.post('/upload',  multer(multerConfig).single('foto'), (req, res) => {
  return res.json({res: 'ok'})
});

app.listen(4000, () => console.log('server started on 4000 port!'));
