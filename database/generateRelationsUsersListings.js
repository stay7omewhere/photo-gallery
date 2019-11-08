const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './csvdatafiles/relationUsersListings.csv'));
writeUsers.write('userId,listingId\n', 'utf8');

writeSeventyMillionUserSavedListings = (writer, encoding, callback) => {
  let i = 70000000;
  let id = 0;
  let j = 1;
  write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (id % 100000 === 0) {
        console.log(id);
      }
      const userId = j;
      if (id % 7 === 0) {
        j += 1;
      }
      const listingId = Math.floor(Math.random() * Math.floor(10000000)) + 1;
      const data = `${userId},${listingId}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeSeventyMillionUserSavedListings(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
