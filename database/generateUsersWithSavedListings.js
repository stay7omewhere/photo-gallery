const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './csvdatafiles/userswithsavedlistings.csv'));
writeUsers.write('id,listingId,username,firstName,lastName\n', 'utf8');

writeTenMillionUsersWithTwentySavedListings = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (id % 1 === 0) {
        console.log(id);
      }

      const username = faker.internet.userName();
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();

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

        const data = `${id},${listingId}${username},${firstName},${lastName}\n`;

        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      }

    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillionUsersWithTwentySavedListings(writeUsers, 'utf-8', () => {
  writeUsers.end();
});