const { Router } = require('express');
const {
  getCertificationPosts,
  getCertificationPostDetails,
  postCertificationPosts,
} = require('../controllers/certificationPostController');

const router = Router();

// 인증글 생성
router.post('/api/postCertificationPost', postCertificationPosts);
// 전체 인증글 조회
router.get('/api/getCertificationPost', getCertificationPosts);
// 상세 인증글 조회
router.get('/api/getCertificationPostDetails', getCertificationPostDetails);
// 리뷰 생성
router.post('/');
// 리뷰 수정
module.exports = router;
