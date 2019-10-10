const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Promise = require('bluebird');
const faker = require('faker');
const db = require('./index.js');

var seedDb = function(maxRecords) {
  var listings = [];
  var counter = 0;
  for (let i = 0; i < maxRecords; i++) { 
    counter = (counter < 4) ? counter + 1 : 0; // increment or reset counter, to rotate through 5 sets of photos
    var numOfPics = 3 + Math.floor(Math.random() * 4); // get 3-6 photos per listing
    var photos = [];
    for (let j = 0; j < numOfPics; j++) {
      photos.push({
        url: `https://o2znz-photos.s3.us-east-2.amazonaws.com/${counter}-${j}.jpg`,
        description: faker.lorem.words()
      });
    }
    listings.push(db.insertListing({listingId: i, photos: photos}));
  }
  Promise.all(listings).then(function() {
      console.log('All listings inserted into db! Disconnecting mongoose..');
      mongoose.disconnect();
  });
}

// seed database with photos for 100 listings
seedDb(100);
