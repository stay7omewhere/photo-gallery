const db = require('./index.js');

module.exports = {
  getPhotosOfListing: (req, res) => {
    const query = `SELECT * FROM photos WHERE listingId = ${req.params.id}`;
    db.client.execute(query, { prepare: true })
      .then(result => {
        console.log('getting the photos!');
        res.status(200).send(result.rows);
      })
      .catch(error => {
        console.log('error GETting');
        res.status(500).send(error);
      })
  },

  saveListing: (req, res) => {
    const query = `INSERT INTO users (id, savedListingId, username, firstName, lastName) VALUES (${req.params.id}, ${req.params.savedListingId}, "${req.params.username}", "${req.params.firstName}", "${req.params.lastName}")`;

    db.client.execute(query, { prepare: true })
      .then(result => {
        console.log('posted to db!');
        res.status(200).send(result);
      })
      .catch(error => {
        console.log('error with POSTing');
        res.status(500).send(error);
      })
  }
}
