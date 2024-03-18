const { Router } = require('express');
const {
  getDogInfo,
  matchingRequest,
  updateMatchingRequest,
  removeMatchingRequest,
} = require('../controllers/matchingRequestController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
// const { removeMatchingRequest } = require('../services/matchingRequestService');

const router = Router();

// 강아지 정보 받아오기
router.get(
  '/doginformation/:userId',
  // #swagger.tags = ['matchingRequest'];
  // #swagger.description = '강아지 정보를 불러옵니다.'
  jwtMiddleware.authenticateToken,
  getDogInfo,
);

// 매칭 신청하기
router.post(
  '/matchingRequest',
  // #swagger.tags = ['matchingRequest'];
  // #swagger.description = '매칭글을 신청합니다.'
  jwtMiddleware.authenticateToken,
  matchingRequest,
);
// 매칭글 수정하기
router.put(
  '/newMatchingRequest/:matchingPostId',
  // #swagger.tags = ['matchingRequest'];
  // #swagger.description = '매칭글을 수정합니다.'
  jwtMiddleware.authenticateToken,
  updateMatchingRequest,
);
// 매칭글 삭제하기
router.put(
  '/noMatchingRequest/:matchingPostId',
  // #swagger.tags = ['matchingRequest'];
  // #swagger.description = '매칭글을 삭제합니다.'
  jwtMiddleware.authenticateToken,
  removeMatchingRequest,
);

module.exports = router;
