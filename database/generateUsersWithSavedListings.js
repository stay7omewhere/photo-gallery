const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './csvdatafiles/userswithsavedlistings.csv'));
writeUsers.write('id,savedListingId,username,firstName,lastName\n', 'utf8');

writeTenMillionUsersWithTwentySavedListings = (writer, encoding, callback) => {
  let i = 100;
  let count = 0;
  let j = 1;
  write = () => {
    let ok = true;
    do {
      while (count % 20 !== 0) {
        i -= 1;
        count += 1;

        if (count % 1 === 0) {
          console.log(count);
        }

        const id = j;

        if (count % 20 === 0) {
          j += 1;
        }

        let listings = new Set([]);
        let randomId = Math.floor(Math.random() * Math.floor(10000000)) + 1;

        const generateListingId = () => {
          return Math.floor(Math.random() * Math.floor(10000000)) + 1;
        }

        const createDataWithColumns = (randomId) => {
          const savedListingId = randomId;
          const username = faker.internet.userName();
          const firstName = faker.name.firstName();
          const lastName = faker.name.lastName();
          const data = `${id},${savedListingId},${username},${firstName},${lastName}\n`;

          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }

        while (listings.has(randomId)) {
          randomId = Math.floor(Math.random() * Math.floor(10000000)) + 1;

          if (!listings.has(randomId)) {
            listing.add(randomId);
            createDataWithColumns();
          }
        }
      }

    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
