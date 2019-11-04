DROP KEYSPACE IF EXISTS photo_gallery;

CREATE KEYSPACE IF NOT EXISTS photo_gallery
  WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE photo_gallery;

CREATE TABLE IF NOT EXISTS photos (
  id integer,
  listingsId integer,
  photoUrl text,
  description text,
  PRIMARY KEY (listingsId)
);

CREATE TABLE IF NOT EXISTS listings (
  id integer,
  saved Boolean,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id integer,
  username string,
  firstName string,
  lastName string,
  PRIMARY KEY (id)
);

partition key --> node --> each row
want: all photos for a specific listing stored in the same node
partition key determines which node a row goes in, and a hashing function is used (on partition key)
hashing function is deterministic (two requirements follows below):
- given a specific input, the output is always the same
- the output is within a specific range
question: how does a hashing function determining location of nodes help?
what to hash to ensure all photos in a specific listing are in the same node?
- partition key should be listingsId in photos table (however may need to look into uniqueness)
clustering keys:
- 1: provide enough for uniqueness of row
- 2: determines order of data (according to placement of keys within parens)