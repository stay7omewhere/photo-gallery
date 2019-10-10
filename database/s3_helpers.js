const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-east-2'});

var params = {
  Bucket: 'o2znz-photos',
  Key: 'example.txt',
  Body: 'Test!'
};

s3.upload(params).promise()
  .then((data) => {
    console.log('data', data);
    console.log('data.Location', data.Location);
  })
  .catch((err) => {
    console.log('Error uploading file: ', err);
  });
