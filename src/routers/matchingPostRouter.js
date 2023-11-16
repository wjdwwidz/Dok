const { Router } = require('express');
const {
  getMatchingPosts,
  getComments,
  getRequestLists,
} = require('../controllers/matchingPostController');

const router = Router();

router.get('/matchingPostLists', getMatchingPosts); //전체 매칭 글 가져오기(default)
router.get('/matchingPostLists', getMatchingPosts); //전체 매칭 글 가져오기(지역 별)
router.get('/matchingPostLists', getMatchingPosts); //전체 매칭 글 가져오기(default)

router.get('/matchingPostDetail', getComments); // 댓글 가져오기
router.post('/matchingPostDetail', postComments); //댓글 작성하기
router.get('/matchingPostDetail/:matchingPost_id', getRequestLists); // 산책 요청 리스트 가져오기
router.post('/matchingPostDetail/:matchingPost_id', postRequest); //산책 요청하기

module.exports = router;
