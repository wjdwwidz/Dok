const express = require('express');
const router = express.Router();
const upload = require('../modules/multer');
const { controller } = require('../controllers/images');

//option = singles
router.post('/image', upload.single('image'), controller.image.post);

module.exports = router;
