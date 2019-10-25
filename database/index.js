const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://database/o2znzPhotos');

var listingSchema = mongoose.Schema({
  listingId: {
    type: Number,
    unique: true
  },
  photos: Array
});

var ListingModel = mongoose.model('Listing', listingSchema);

var insertListing = function(listing) {
  return new ListingModel(listing).save();
};

var findListing = function(listingId) {
  return ListingModel.find({listingId: listingId}).exec();
};

exports.insertListing = insertListing;
exports.findListing = findListing;
