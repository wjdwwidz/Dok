const MatchingPostService = require('../services/matchingPostService');

//전체 매칭 글 가져오기
const getMatchingPosts = async (req, res) => {
  const matchingPostService = new MatchingPostService();
  const findMatchingPosts = await matchingPostService.getMatchingPost();
  console.log(findMatchingPosts);
  res.status(200).json({
    data: { findMatchingPosts },
    message: '전체 매칭 글입니다',
  });
};

// 댓글 가져오기✅
const getComments = async (req, res) => {
  const { matching_post_id } = req.query; //해당 matchingpost의 _id
  const matchingPostService = new MatchingPostService();
  const GetComment = await matchingPostService.getAllComments(matching_post_id);
  res.status(200).json({
    data: GetComment,
    message: '댓글 리스트 입니다',
  });
};

//댓글 작성하기 ✅
const postComment = async (req, res) => {
  try {
    const { matching_post_id, user, comment, parent_comment_id } = req.body;
    //  댓글을 작성할 때에도 동일한 이름으로 받아와야함
    const matchingPostService = new MatchingPostService();
    const postComment = await matchingPostService.postComment(
      matching_post_id,
      user,
      comment,
      parent_comment_id,
    );

    res.status(200).json({
      test: 'test',
      data: { postComment },
      message: '댓글이 등록되었습니다',
    });
  } catch (err) {
    console.log('에러 발생');
  }
};

//댓글 수정하기 ✅
const updateComment = async (req, res) => {
  const { comment_id } = req.params; //해당 matchingpost의 __id를 동일한 걸로 받아와야함
  const { comment } = req.body; //수정할 댓글 내용을 body에 담아옴
  console.log(comment_id);
  console.log(typeof comment_id);
  const matchingPostService = new MatchingPostService();
  const postComment = await matchingPostService.updateComment(
    comment_id,
    comment,
  );
  console.log(postComment);
  res.status(200).json({
    data: { comment: postComment },
    message: '댓글이 성공적으로 수정되었습니다',
  });
};

// 댓글 삭제하기 ✅
const deleteComment = async (req, res) => {
  const { comment_id } = req.params; //해당 comment의 _id

  const matchingPostService = new MatchingPostService();
  const postComment = await matchingPostService.deleteComment(comment_id);

  res.status(200).json({
    data: { postComment },
    message: '댓글이 성공적으로 삭제되었습니다',
  });
};

// //산책 요청 리스트 가져오기
// //산책 요청 리스트를 가져오려면,, 해당 게시글의 아이디를 요청하면, 거기의 요청이 쫙 나오도록
// const getRequestLists = async (req, res) => {
//   const id = req.body; //게시글을 누른 사람의 id
//   const matchingPost_id = req.params;

//   if (id === matchingPostData.user._id) {
//     const matchingPostService = new MatchingPostService();
//     const postComment = await matchingPostService.getComment(matchingPost_id);

//     res.status(200).json({
//       data: { postComment },
//       message: `${matchingPost_id}의 요청 리스트입니다.`,
//     });
//   }
// };

//산책 요청하기
const postRequest = async (req, res) => {
  const { user, matching_post_id } = req.params;
  const matchingPostService = new MatchingPostService();
  const postComment = await matchingPostService.postRequest(
    user,
    matching_post_id,
  );

  res.status(200).json({
    data: { postComment },
    message: '산책 요청이 완료되었습니다',
  });
};

module.exports = {
  getMatchingPosts,
  // getRequestLists,
  postRequest,
  getComments,
  postComment,
  updateComment,
  deleteComment,
};
