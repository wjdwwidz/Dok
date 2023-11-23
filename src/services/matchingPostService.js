const MatchingPost = require('../models/schemas/matchingPost/matchingPost');
const MatchingPostComment = require('../models/schemas/matchingPostComment/matchingPostComment');
const MatchingHandlerRequest = require('../models/schemas/matchingHandlerRequest/matchingHandlerRequest');

class MatchingPostService {
  //전체 매칭 글 가져오기  -> Error : user_dog의 populate 안됨
  // MatchingPostService

  async getMatchingPost(location, walkingDate) {
    if (!location && !walkingDate) {
      const findPost = await MatchingPost.find({}).populate('user');
      // .populate('userDog');
      return findPost;
    } else if (!walkingDate) {
      //location 검색 string값이 같은거 조회
      const findPost = await MatchingPost.find({
        location: location,
      }).populate('user');
      // .populate('userDog');
      return findPost;
    } else if (!location) {
      //date 검색
      const findPost = await MatchingPost.find({
        walkingDate: { $gte: walkingDate },
      }).populate('user');
      // .populate('userDog');
      return findPost;
    }
  }

  // 댓글 가져오기 ✅
  async getAllComments(matchingPostId) {
    const findComments = await MatchingPostComment.find({
      matchingPostId: matchingPostId, //deletedAt이 찍힌 건 안가져오도록 하는 쿼리 필요!!
    }).populate('user');
    return findComments;
  }

  //댓글 작성하기 -> Error: POSTMAN 요청 / 응답 잘 됌, objectId 까지 생성 완료했는데 db에 저장이 안됨
  async postComment(matchingPostId, user, comment, parentCommentId) {
    try {
      const postComment = await MatchingPostComment.create({
        matchingPostId,
        user,
        comment,
        parentCommentId,
      });
      console.log(postComment);
      return postComment;
    } catch (error) {
      console.error('Error while posting...', error);
      throw error;
    }
  }

  //댓글 수정하기 댓글의 id값으로 찾은 후 update
  async updateComment(commentId, comment) {
    const updateComment = await MatchingPostComment.findOneAndUpdate(
      {
        _id: commentId,
      },
      {
        comment: comment,
      },
      { new: true },
    );
    return updateComment;
  }

  //댓글 삭제하기(댓글 진짜 삭제x -> deleted_at 찍히게)
  async deleteComment(commentId) {
    const deleteComment = await MatchingPostComment.findOneAndUpdate(
      { _id: commentId },
      { deleted_at: new Date() },
    );
    return deleteComment;
  }

  // 해당 게시글의 산책 요청 리스트 가져오기
  getRequestLists(matchingPostId) {
    const findPostLists = MatchingHandlerRequest.find({
      matchingPostId: matchingPostId,
    }).populate('user');

    return findPostLists;
  }

  //산책 요청 보내기
  postRequest(user, matchingPostId) {
    const postRequest = MatchingHandlerRequest.create({
      user,
      matchingPostId,
    });

    return postRequest;
  }
}

module.exports = MatchingPostService;
