const { Router } = require('express');
const {
  getDogInfo,
  postMatchingRequest,
} = require('../controllers/matchingRequestController');

const router = Router();

// 강아지 정보 받아오기
router.get('/doginformation/:userId', getDogInfo);
// 매칭 신청하기 -> 수정필요
router.post('/matchingRequest/:userId', postMatchingRequest);

module.exports = router;
