DROP DATABASE IF EXISTS photo_gallery;
CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  listingId INT NOT NULL,
  photoUrl TEXT NOT NULL,
  photoDescription VARCHAR(160)
);

CREATE TABLE listings (
  id SERIAL PRIMARY KEY
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100)
);

CREATE TABLE relationUsersListings (
  userId INT NOT NULL,
  listingId INT NOT NULL,
  UNIQUE (userID, listingId)
);

ALTER TABLE photos ADD FOREIGN KEY (listingId) REFERENCES listings (id) ON DELETE CASCADE;
ALTER TABLE relationUsersListings ADD FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE;
ALTER TABLE relationUsersListings ADD FOREIGN KEY (listingId) REFERENCES listings (id) ON DELETE CASCADE;

COPY users(username,firstName,lastName)
FROM '/Users/Faith/Documents/SDC/photo-gallery/database/csvdatafiles/users.csv' DELIMITER ',' CSV HEADER;