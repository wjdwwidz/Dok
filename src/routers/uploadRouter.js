const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const uploadController = require('../controllers/uplodadController');

router.post('/image', upload.single('image'), uploadController.post);
//여기서 두번째 인자인 upload.single()의 파라미터로는 Front-End에서 Formdata에 append 할 때의 키 이름으로 설정
module.exports = router;
