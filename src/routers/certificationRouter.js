const { Router } = require('express');
const {
  getCertificationPosts,
  getCertificationPostDetails,
  postCertificationPosts,
  putCertificationPosts,
  postPutCertificationPostReviews,
  // 검색
} = require('../controllers/certificationPostController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const router = Router();

// 인증글 생성
router.post(
  '/newCertificationPost/:matchingPost',
  // #swagger.tags = ['certification'];
  // #swagger.description = '인증글을 생성합니다.'
  jwtMiddleware.authenticateToken,
  postCertificationPosts,
);
// 전체 인증글 조회
router.get(
  '/allCertificationPost',
  // #swagger.tags = ['certification'];
  // #swagger.description = '전체 인증글을 조회합니다.'
  getCertificationPosts,
);

// 상세 인증글 조회
router.get(
  '/certificationPostDetails/:postId',
  // #swagger.tags = ['certification'];
  // #swagger.description = '상세 인증글을 조회합니다.'
  getCertificationPostDetails,
);
// 인증글 수정
router.put(
  '/certificationPost/:certificationPostId',
  // #swagger.tags = ['certification'];
  // #swagger.description = '인증글을 수정합니다.'
  jwtMiddleware.authenticateToken,
  putCertificationPosts,
);
// 리뷰 생성 및 수정
router.put(
  '/newCertificationPostReview/:certificationPostId',
  // #swagger.tags = ['certification'];
  // #swagger.description = '리뷰를 생성 및 수정합니다.'
  jwtMiddleware.authenticateToken,
  postPutCertificationPostReviews,
);

module.exports = router;
