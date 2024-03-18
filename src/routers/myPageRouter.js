const { Router } = require('express');
const {
  getMyMatchingPost,
  getUncertificatiedList,
  getCertificationList,
} = require('../controllers/myPageController');

const jwtMiddleware = require('../middlewares/jwtMiddleware');

const router = Router();

//내가 쓴 매칭글 가져오기

router.get(
  '/myMatchingPosts',
  // #swagger.tags = ['myPage'];
  // #swagger.description = '내가 쓴 매칭글을 가져옵니다.'
  jwtMiddleware.authenticateToken,
  getMyMatchingPost,
);

// 매칭 완료된 매칭 포스트 중에서, 인증글을 작성하지 않은 목록 가져오기
router.get(
  '/myCertification',
  // #swagger.tags = ['myPage'];
  // #swagger.description = '매칭 완료된 매칭 포스트 중에서, 인증글을 작성하지 않은 목록을 가져옵니다.'
  jwtMiddleware.authenticateToken,
  getUncertificatiedList,
);

// 내가 작성한 인증글 목록 가져오기
router.get(
  '/myCertificationLists',
  // #swagger.tags = ['myPage'];
  // #swagger.description = '내가 작성한 인증글 목록을 가져옵니다.'
  jwtMiddleware.authenticateToken,
  getCertificationList,
);

module.exports = router;
