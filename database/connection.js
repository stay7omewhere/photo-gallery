const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['host1', 'host2'],
  localDataCenter: 'datacenter1',
  keyspace: 'photo_gallery'
});

client.connect(function (err) {
  assert.ifError(err);
});
