DROP KEYSPACE IF EXISTS photo_gallery;

CREATE KEYSPACE IF NOT EXISTS photo_gallery
  WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE photo_gallery;

CREATE TABLE IF NOT EXISTS photos (
  id uuid,
  photo text,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS listings (
  id uuid,
  saved Boolean,
  shared Boolean,
  photos list<text>,
  PRIMARY KEY (id)
);