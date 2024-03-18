const { Router } = require('express');
const { getMainContents } = require('../controllers/mainController');

const router = Router();

//게시글 정렬 관련 기능

//매칭 메인
router.get(
  '/',
  // #swagger.tags = ['main'];
  // #swagger.description = '메인 페이지의 전체 contents를 가져옵니다.'
  getMainContents,
); //메인 전체 contents가져오기

module.exports = router;
