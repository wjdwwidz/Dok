//AWS S3 관련 설정 및 파일 업로드
const multer = require('multer');
const multerS3 = require('multer-s3');
const { fromIni } = require('@aws-sdk/credential-provider-ini');
env = require('dotenv');
env.config();

const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const credentials = fromIni({
  configFilepath:
    process.env.AWS_SHARED_CREDENTIALS_FILE || '~/.aws/credentials',
});

const s3Client = new S3Client({ region: process.env.AWS_REGION, credentials });
const upload = multer({
  storage: multerS3({
    client: s3Client,
    bucket: 'dokawsbucket',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});
module.exports = upload;
