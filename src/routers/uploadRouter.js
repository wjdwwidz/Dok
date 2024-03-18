const multer = require('multer');
const { Router } = require('express');
const { uploadImage } = require('../controllers/uploadController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post(
  '/image',
  // #swagger.tags = ['upload'];
  // #swagger.description = '이미지를 업로드합니다.'
  jwtMiddleware.authenticateToken,
  upload.array('image', 6),
  uploadImage,
);
//router.post('/image', upload.single('image'), uploadImage);

module.exports = router;
