const MatchingPostService = require('../services/matchingPostService');

//전체 매칭 글 가져오기
const getMatchingPosts = async (req, res) => {
  const matchingPostService = new MatchingPostService();
  const findMatchingPosts = await matchingPostService().getMatchingPost;

  res.status(200).json({
    data: { matchingPost_id: findMatchingPosts._id },
    message: '전체 매칭 글입니다',
  });
};

// // 댓글 가져오기
// const getComments = async (req, res) => {
//   const data = req.body; //
//   const matchingPostService = new MatchingPostService();
//   const postComment = await MatchingPostService();
// };

// //댓글 작성하기
// const postComment = async (req, res) => {
//   const data = req.body; //댓글 관련 정보를 body에 담아옴
//   const matchingPostService = new MatchingPostService();
//   const postComment = await matchingPostService.postComment(data);
//   res.status(200).json({
//     data: { comment_id: postComment._id },
//     message: '주문이 성공적으로 완료되었습니다.',
//   });
// };

// 산책 요청 리스트 가져오기
//산책 요청 리스트를 가져오려면,, 해당 게시글의 아이디를 요청하면, 거기의 요청이 쫙 나오도록
const getRequestLists = async (req, res) => {
  const { matchingPost_id } = req.params;
  const matchingPostService = new MatchingPostService();
  const postComment = await matchingPostService.getComment(matchingPost_id);

  res.status(200).json({
    message: `${matchingPost_id}의 요청 리스트입니다.`,
  });
};

//산책 요청하기
const RequestLists = async (req, res) => {
  const { matchingPost_id } = req.params;
  const matchingPostService = new MatchingPostService();
  const postComment = await matchingPostService.getComment(matchingPost_id);

  res.status(200).json({
    data: {},
  });
};

module.exports = { getMatchingPosts, getRequestLists };
