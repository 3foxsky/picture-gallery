const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = require('./db.json');

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin: *');
  res.header('Access-Control-Allow-Headers: X-Requested-With');
  res.header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.get('/pictures', (req, res) => res.send(db));
app.post('/update-rate', (req, res) => {
  const { index, rate } = req.body;
  db.data[index].rate = rate;

  fs.writeFile('./src/server/db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
  });
  res.send(index, rate);
});


app.listen(8080, () => console.log('Listening on port 8080'));
