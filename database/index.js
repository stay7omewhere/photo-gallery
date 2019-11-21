const cassandra = require('cassandra-driver');
const assert = require('assert');

const client = new cassandra.Client({
  contactPoints: ['13.56.158.215', '54.183.167.135', '13.56.182.77'],
  localDataCenter: 'us-west',
  keyspace: 'photo_gallery'
});

client.connect((err) => {
  assert.ifError(err);
  console.log('error', err);
});

module.exports.client = client;