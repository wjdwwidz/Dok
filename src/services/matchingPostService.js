const MatchingPost = require('../models/matchingPost/matchingPost');
const MatchingPostComment = require('../models/matchingPostComment/matchingPostComment');
const MatchingHandlerRequest = require('../models/matchingHandlerRequest/matchingHandlerRequest');
const UserDog = require('../models/userDog/userDog');

class MatchingPostService {
  //전체 매칭 글 가져오기  -> Error : user_dog의 populate 안됨
  // MatchingPostService

  async getMatchingPost(location, walkingDate) {
    console.log(typeof location);
    console.log(typeof walkingDate);
    //if문 안에 각각의 메서드로 나눌것
    if (!walkingDate) {
      //코드를 파악하기 힘들어짐 (else if)
      //location 검색 string값이 같은거 조회
      const findPost = await MatchingPost.find({
        'location.code': {
          $regex: new RegExp(`${location.code}`),
        },
      })
        .populate('user')
        .populate('userDog');
      return findPost;
    }

    if (!location) {
      //date 검색
      const findPost = await MatchingPost.find({
        walkingDate: { $gte: walkingDate },
      })
        .populate('user')
        .populate('userDog');
      return findPost;
    }

    if (!location && !walkingDate) {
      //여기가 갑자기 안돼는 에러?? 뭐지진짜 🔪
      //나중에 ts 변환 시 각각의 메서드로 분리 가능
      console.log('none');
      const findPost = await MatchingPost.find({})
        .populate('user')
        .populate('userDog');

      return;
    }
  }

  // 댓글 가져오기 -> 삭제된 댓글은 불러오지 않기
  async getAllComments(matchingPostId) {
    const findComments = await MatchingPostComment.find({
      matchingPostId: matchingPostId, //deletedAt이 찍힌 건 안가져오도록 하는 쿼리 필요!!
    }).populate('user');
    console.log(findComments);
    return findComments;
  }

  //댓글 작성하기
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
  async getRequestLists(matchingPostId) {
    const findPostLists = await MatchingHandlerRequest.find({
      matchingPostId: matchingPostId,
    }).populate('user');

    return findPostLists;
  }

  //산책 요청 보내기
  async postRequest(user, matchingPostId) {
    const postRequest = await MatchingHandlerRequest.create({
      user,
      matchingPostId,
    });

    return postRequest;
  }

  //산책 요청 확정하기

  async confirmRequest(matchingPostId, commentId) {
    // 해당 matchingPostId를 가지고 있는 comment document를 찾기
    const comment = await MatchingPostComment.findOne({
      _id: commentId,
      matchingPostId: matchingPostId,
    });

    //해당 document의 userid를 matchingPostId를 찾고 update
    // console.log(comment.user);

    const confirmMatching = await MatchingPost.findOneAndUpdate(
      { _id: matchingPostId },
      {
        matchingHandler: comment.user,
        matchingStatus: '매칭 완료',
      },
    );
    return confirmMatching;
  }
}

module.exports = MatchingPostService;
