const { Router } = require('express');
const {
  getMatchingPosts,
  getMatchingPostDetails,
  getComments,
  postComment,
  updateComment,
  deleteComment,
  getRequestLists,
  postRequest,
  confirmRequest,
} = require('../controllers/matchingPostController');

const router = Router();

//게시글 정렬 관련 기능

//매칭 메인
router.get(
  '/',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '매칭 메인 페이지의 전체 매칭 글을 가져옵니다.'
  getMatchingPosts,
); //전체 매칭 글 가져오기(default)

router.get(
  '/:matchingPostId',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '상세 게시글을 불러옵니다.'
  getMatchingPostDetails,
); //상세 게시글 불러오기

//매칭 디테일
//댓글 관련 기능

router.get(
  '/comment/:matchingPostId',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '댓글을 불러옵니다.'
  getComments,
); // 댓글 가져오기
router.post(
  '/comment',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '댓글을 작성합니다.'
  postComment,
); //댓글 작성하기
router.put(
  '/comment/:commentId',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '댓글을 수정합니다.'
  updateComment,
); //댓글 수정하기
router.delete(
  '/comment/:commentId',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '댓글을 삭제합니다.'
  deleteComment,
); //댓글 삭제하기

//산책 요청 기능

router.get(
  '/handler/:matchingPostId',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '산책 요청 리스트를 불러옵니다.'
  getRequestLists,
); // 산책 요청 리스트 가져오기
router.post(
  '/handler/:user/:matchingPostId',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '산책 요청을 합니다.'
  postRequest,
); //산책 요청하기
router.put(
  '/handler/:matchingPostId/:handlerRequestId',
  // #swagger.tags = ['matchingPost'];
  // #swagger.description = '산책 요청을 확정합니다.'
  confirmRequest,
); //산책 요청 확정하기

module.exports = router;
