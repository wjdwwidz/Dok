const MatchingRequestService = require('../services/matchingRequestService');

// 강아지 정보 받아오기
const getDogInfo = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const getUserDog = await MatchingRequestService.getUserDogInfo(userId);

    res.status(200).json(getUserDog);
  } catch (err) {
    next(err);
  }
};

// 매칭글 신청하기
const postMatchingRequest = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const {
      userDog,
      price,
      location,
      locationDetail,
      walkingDate,
      walkingDuration,
      text,
      deletedAt,
    } = req.body;

    const newMatchingRequest = await MatchingRequestService.postMatchingRequest(
      userId,
      userDog,
      price,
      location,
      locationDetail,
      walkingDate,
      walkingDuration,
      text,
      deletedAt,
    );

    res.status(200).json(newMatchingRequest);
  } catch (err) {
    next(err);
  }
};

module.exports = { getDogInfo, postMatchingRequest };
