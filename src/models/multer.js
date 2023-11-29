const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const s3path = require('../../s3.json');
//aws.config.loadFromPath(__dirname + s3path);

const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'YOUR BUCKET NAME',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});
module.exports = upload;
