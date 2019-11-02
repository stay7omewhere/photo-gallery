DROP DATABASE IF EXISTS photo_gallery;
CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE photos (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  listingsId INT NOT NULL,
  photo TEXT NOT NULL,
  description TEXT,
  FOREIGN KEY (listingsId) REFERENCES listings (id) ON DELETE CASCADE
  );

CREATE TABLE listings (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  usersId INT NOT NULL,
  saved BOOLEAN DEFAULT FALSE
  FOREIGN KEY (usersId) REFERENCES users (id) ON DELETE CASCADE
  );

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100)
);

CREATE TABLE relationUsersListings (
  userId INT NOT NULL,
  listingsId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (listingsId) REFERENCES listings (id) ON DELETE CASCADE,
  UNIQUE (usersID, listingsId)
);
