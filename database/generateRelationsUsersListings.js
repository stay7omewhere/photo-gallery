const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './csvdatafiles/relationUsersListings.csv'));
writeUsers.write('userId,listingId\n', 'utf8');

writeTwentyMillionUserSavedListings = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (id % 10000 === 0) {
        console.log(id);
      }

      const userId = id;

      let listings = new Set([]);

      for (let j = 1; j <= 20; j++) {
        let listingId = Math.floor(Math.random() * Math.floor(10000000)) + 1;

        const IsUniqueThenAddUniqueListing = (listingId) => {
          if (!listings.has(listingId)) {
          listings.add(listingId);
          } else {
            const randomInt = Math.floor(Math.random() * Math.floor(10000000)) + 1;
            IsUniqueThenAddUniqueListing(randomInt);
          }
        }

        IsUniqueThenAddUniqueListing(listingId)

        const data = `${userId},${listingId}\n`;

        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }

    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeTwentyMillionUserSavedListings(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
