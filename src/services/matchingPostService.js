const { MatchingPost } = require('../models/matchingPost/matchingPost');
const {
  MatchingPostComment,
} = require('../models/matchingPostComment/matchingPostComment');
const {
  MatchingHandlerRequest,
} = require('../models/matchingHandlerRequest/matchingHandlerRequest');

class MatchingPostService {
  //전체 매칭 글 가져오기

  getMatchingPost() {
    const findPost = MatchingPost.find({})
      .populate('user_dog')
      .populate('user');
    return findPost;
  }

  // 댓글 가져오기 , 댓글을 가져올 때 부모 comment가 있는지 부터 검사할것
  //부모 comment가 있으면? ???
  getAllComments(matchingPost_id) {
    const findComments = MatchingPostComment.find({
      matching_post_id: matchingPost_id,
    }).populate('user');

    return findComments;
  }

  //댓글 작성하기
  postComment(data) {
    const postComment = MatchingPostComment.create(data);
    return postComment;
  }

  // 해당 게시글의 산책 요청 리스트 가져오기
  matchingPostList(matchingPost_id) {
    const findPostList = MatchingHandlerRequest.find({
      matching_post_id: matchingPost_id,
    }).populate('user');

    return findPostList;
  }

  //산책 요청 보내기
  postRequest(data) {
    const postRequest = MatchingHandlerRequest.create(data);
    return postRequest;
  }
}

module.exports = MatchingPostService;
