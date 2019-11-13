const cassandra = require('cassandra-driver');
const assert = require('assert');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'photo_gallery'
});

client.connect((err) => {
  assert.ifError(err);
  console.log('error', err);
});

module.exports.client = client;