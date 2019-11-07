const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './csvdatafiles/photos.csv'));
writeUsers.write('id,photoUrl,description\n', 'utf8');

writeOneHundredAndTwentyMillionPhotos = (writer, encoding, callback) => {
  let i = 120000000;
  let id = 0;
  write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      console.log(id);
      const photoUrl = faker.image.image();
      const description = faker.lorem.sentence();
      const data = `${id},${photoUrl},${description}\n`;
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

writeOneHundredAndTwentyMillionPhotos(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
