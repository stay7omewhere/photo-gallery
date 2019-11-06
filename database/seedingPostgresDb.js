// This file imports each data generation file and creates csv files containing data

const listings = require('./generateListings.js');
const photos = require('./generatePhotos.js');
const users = require('./generateusers.js');

// Let's also use this file to seed our database