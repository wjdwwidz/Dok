const { Router } = require('express');
const {
  getCertificationPosts,
  getCertificationPostDetails,
  postCertificationPosts,
  postCertificationPostReviews,
} = require('../controllers/certificationPostController');

const router = Router();

// 인증글 생성
router.post('/postCertificationPost', postCertificationPosts);
// 전체 인증글 조회
router.get('/getCertificationPost', getCertificationPosts);
// 상세 인증글 조회
router.get('/getCertificationPostDetails', getCertificationPostDetails);
// 리뷰 생성
router.post('/postCertificationPostReview', postCertificationPostReviews);
// 리뷰 수정
module.exports = router;
