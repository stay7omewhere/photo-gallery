const express = require('express');
const path = require('path');
const newrelic = require('newrelic');

const controllers = require('../database/dbMethods.js');

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/rooms/:id/photos', controllers.getPhotosOfListing);
app.post('/api/rooms/:id/save', controllers.saveListing);

app.listen(port, () => console.log(`Listening on port ${port}`));
