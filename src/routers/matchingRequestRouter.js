const { Router } = require('express');
const {
  postMatchingRequest,
} = require('../controllers/matchingRequestController');

const router = Router();

// 매칭 신청하기
router.post('/matchingRequest', postMatchingRequest);

module.exports = router;
