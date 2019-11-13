const db = require('./index.js');

module.exports = {
  getPhotosOfListing: (req, res) => {
    const query = `SELECT * FROM photos WHERE listingId = ${req.params.id}`;
    db.client.execute(query, { prepare: true })
      .then(result => {
        console.log('success!');
        res.status(200).send(result.rows);
      })
      .catch(error => {
        console.log('error!!!');
        res.status(500).send(error);
      })
  }
}
