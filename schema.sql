DROP DATABASE IF EXISTS photo_gallery;
CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  listingsId INT,
  photo TEXT,
  FOREIGN KEY (listingsId) REFERENCES listings (id) ON DELETE CASCADE
  );
CREATE TABLE listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  saved BOOLEAN,
  shared BOOLEAN
  );
