DROP DATABASE IF EXISTS photo_gallery;
CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE photos (
  id INT SERIAL PRIMARY KEY,
  listingsId INT NOT NULL,
  photoUrl TEXT NOT NULL,
  photoDescription TEXT,
);

CREATE TABLE listings (
  id INT SERIAL PRIMARY KEY,
);

CREATE TABLE users (
  id INT SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100)
);

CREATE TABLE relationUsersListings (
  userId INT NOT NULL,
  listingsId INT NOT NULL,
  UNIQUE (usersID, listingsId)
);

ALTER TABLE photos ADD FOREIGN KEY (listingsId) REFERENCES listings (id) ON DELETE CASCADE;
ALTER TABLE relationUsersListings ADD FOREIGN KEY (usersId) REFERENCES users (id) ON DELETE CASCADE;
ALTER TABLE relationUsersListings ADD FOREIGN KEY (listingsId) REFERENCES listings (id) ON DELETE CASCADE;