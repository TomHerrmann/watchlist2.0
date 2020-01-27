const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/userWatchlist', (req, res) => {

})

app.get('/', (req, res) => {
  res.status(200).send(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(3000, () => console.log('Listneing on 3000'))