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
      photos: [{url: 'https://picsum.photos/id/1040/300/200', description: `Some description for first photo of listingId ${i}`}, {url: 'https://picsum.photos/300/200', description: `Some description for second photo of listingId ${i}`}]
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
