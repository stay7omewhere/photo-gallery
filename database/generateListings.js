const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('listings.csv');
writeUsers.write('id\n', 'utf8');

function writeTenMillionListings(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = `${id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionListings(writeUsers, 'utf-8', () => {
  writeUsers.end();
});