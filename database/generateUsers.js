const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './csvdatafiles/users.csv'));
writeUsers.write('id,username,firstName,lastName\n', 'utf8');

writeTenMillionUsers = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const username = faker.internet.userName();
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const data = `${id},${username},${firstName},${lastName}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
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

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
