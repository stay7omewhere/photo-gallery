const db = require('./index.js');

module.exports = {
  getPhotosOfListing: (req, res) => {
    console.log(req.body);

    const query = `SELECT * FROM photos WHERE listingId = ${req.body.listingId}`;
    client.execute(query, params, { prepare: true })
      .then(result => res.status(200).send(result));
  }
}
