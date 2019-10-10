const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Promise = require('bluebird');
const db = require('./index.js');

var seedDb = function(maxRecords) {
  var listings = [];
  for (let i = 0; i < maxRecords; i++) {
    // todo: use lorem ipsum photos, descriptions
    // todo later: s3 links, varying number of pics
    var listing = {
      listingId: i,
      photos: [{url: 'https://picsum.photos/300/200', description: 'some description 0'}, {url: 'https://picsum.photos/300/200', description: 'some description 1'}]
    };
    listings.push(db.insertListing(listing));
  }
  Promise.all(listings).then(function() {
      console.log('All listings inserted into db! Disconnecting mongoose..');
      mongoose.disconnect();
  });
}

// seed database with photos for 100 listings
seedDb(100);
