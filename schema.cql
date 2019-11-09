DROP KEYSPACE IF EXISTS photo_gallery;

CREATE KEYSPACE IF NOT EXISTS photo_gallery
  WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE photo_gallery;

CREATE TABLE IF NOT EXISTS photos (
  id integer,
  listingId integer,
  photoUrl text,
  description text,
  PRIMARY KEY (listingsId, id)
);

CREATE TABLE IF NOT EXISTS users (
  id integer,
  savedListingId integer,
  username text,
  firstName text,
  lastName text,
  PRIMARY KEY (id, savedListingId)
);

COPY photo_gallery.users (id,savedListingId,username,firstName,lastName) FROM '/Users/Faith/Documents/photo-gallery/database/csvdatafiles/photoswithid.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY photo_gallery.photos (id,listingId,photoUrl,description) FROM '/Users/Faith/Documents/photo-gallery/database/csvdatafiles/photoswithid.csv' WITH DELIMITER=',' AND HEADER=TRUE;