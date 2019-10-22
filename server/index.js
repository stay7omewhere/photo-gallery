const express = require('express');
const app = express();
const port = 3001;
const db = require('../database/index.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/:listingid', express.static('public'));

app.get('/:listingid', (req, res) => {
  res.end();
});

app.get('/photos/:listingid', (req, res) => {
  db.findListing(req.params.listingid)
    .then((data) => {
      var listing = data[0];
      console.log('Photos retrieved: ', listing.photos);
      res.send(listing.photos);
    })
    .catch((err) => {
      console.log('Error retrieving photos: ', err);
      res.end();
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
