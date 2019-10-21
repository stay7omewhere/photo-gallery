const express = require('express');
const app = express();
const port = 3001;
const db = require('../database/index.js');
var cors = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.end();
});

app.get('/photos/:listingid', (req, res) => {
  db.findListing(req.params.listingid)
    .then((data) => {
      var listing = data[0];
      console.log('Photos retrieved: ', listing.photos);
      res.set(cors).send(listing.photos);
    })
    .catch((err) => {
      console.log('Error retrieving photos: ', err);
      res.set(cors).end();
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
