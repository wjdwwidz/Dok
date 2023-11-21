const MatchingPost = require('../models/schemas/matchingPost/matchingPost');
const MatchingPostComment = require('../models/schemas/matchingPostComment/matchingPostComment');
const MatchingHandlerRequest = require('../models/schemas/matchingHandlerRequest/matchingHandlerRequest');

class MatchingPostService {
  //전체 매칭 글 가져오기  -> 얘는 잘됨 뭔 차이지..
  // MatchingPostService

  getMatchingPost() {
    const findPost = MatchingPost.find({})
      .populate('user_dog')
      .populate('user');
    return findPost;
  }

  // 댓글 가져오기
  async getAllComments(matching_post_id) {
    const findComments = await MatchingPostComment.find({
      matching_post_id: matching_post_id,
    });
    return findComments;
  }

  //댓글 작성하기 -> Error: POSTMAN 요청 / 응답 잘 됌, objectId 까지 생성 완료했는데 db에 저장이 안됨
  async postComment(data) {
    try {
      const postComment = await MatchingPostComment.create(data);
      // matching_post_id: matching_post_id,
      // user: user,
      // comment: comment,
      // parent_comment_id: parent_comment_id,
      console.log(postComment);
      return;
    } catch (error) {
      console.error('Error while posting comment:', error);
      throw error;
    }
  }

  // //댓글 수정하기 댓글의 id값으로 찾은 후 update
  // postComment(data, comment_data) {
  //   const postComment = MatchingPostComment.findOneAndUpdate(
  //     { _id: data },
  //     {
  //       comment: comment_data,
  //     },
  //   );
  //   return postComment;
  // }

  // //댓글 삭제하기(댓글 진짜 삭제x -> deleted_at 찍히게)
  // async postComment(data) {
  //   const postComment = await MatchingPostComment.findOneAndUpdate(
  //     { _id: order_id },
  //     { deleted_at: new Date() },
  //   );
  //   return postComment;
  // }

  // // 해당 게시글의 산책 요청 리스트 가져오기
  // matchingPostList(matchingPost_id) {
  //   const findPostList = MatchingHandlerRequest.find({
  //     matching_post_id: matchingPost_id,
  //   }).populate('user');

  //   return findPostList;
  // }

  //산책 요청 보내기
  postRequest(data) {
    const postRequest = MatchingHandlerRequest.create(data);
    return postRequest;
  }
}

module.exports = MatchingPostService;
