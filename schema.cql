DROP KEYSPACE IF EXISTS photo_gallery;
DROP TABLE IF EXISTS photo_gallery.photos;

CREATE KEYSPACE IF NOT EXISTS photo_gallery
  WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE photo_gallery;

CREATE TABLE IF NOT EXISTS photos (
  id int,
  listingId int,
  photoUrl text,
  description text,
  PRIMARY KEY (listingId, id)
);

CREATE TABLE IF NOT EXISTS users (
  id int,
  savedListingId int,
  username text,
  firstName text,
  lastName text,
  PRIMARY KEY (id, savedListingId)
);

COPY photo_gallery.users (id,savedListingId,username,firstName,lastName) FROM '/Users/Faith/Documents/photo-gallery/database/csvdatafiles/userswithsavedlistings.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY photo_gallery.photos (id,listingId,photoUrl,description) FROM '/Users/Faith/Documents/photo-gallery/database/csvdatafiles/photoswithid.csv' WITH DELIMITER=',' AND HEADER=TRUE;