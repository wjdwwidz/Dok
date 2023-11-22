const MatchingRequest = require('../models/schemas/');
const UserDog = require('../models/schemas/userDog/userDog');

class MatchingRequestService {
  // 강아지 정보 불러오기
  getUserDogInfo() {
    const { userId } = req.params;
    const findUserDog = UserDog.find({ user: userId });
    return findUserDog;
  }
  // 매칭글 작성하기
  postMatchingRequest() {
    const newMatchingPost = MatchingRequest.create({});
    // const newMatchingPost = MatchingRequest.find({})
    //   .populate('user')
    //   .populate('matchingPost')
    //   .populate('review')
    //   .sort({ createdAt: -1 }); // 인증글을 createdAt 기준으로 내림차순으로 정렬

    // return findCertificationPost;
  }
}

module.exports = MatchingRequestService;
