const express = require('express');
const app = express();
const port = 3001;
const controllers = require('../database/dbMethods.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/rooms/:id', express.static('public'));

app.get('/api/rooms/:id/photos/', controllers.getPhotosOfListing);

app.listen(port, () => console.log(`Listening on port ${port}`));
