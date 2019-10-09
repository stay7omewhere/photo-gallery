const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.end();
});

app.get('/photos/:listingid', (req, res) => {
  var listingId = req.params.listingid;
  var dummyData = {
    listingId: listingId,
    photos: [
      {url: 'www.aws.amazon/someUrl0', description: 'some description 0'},
      {url: 'www.aws.amazon/someUrl1', description: 'some description 1'},
      {url: 'www.aws.amazon/someUrl2',description: 'some description 2'},
    ]};
  res.send(dummyData.photos);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
