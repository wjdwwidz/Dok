const multer = require('multer');
const { Router } = require('express');
const { uploadImage } = require('../controllers/uploadController');

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post('/image', upload.single('image'), uploadImage);

module.exports = router;
