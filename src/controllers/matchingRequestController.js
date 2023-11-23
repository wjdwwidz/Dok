const MatchingRequestService = require('../services/matchingRequestService');

const postMatchingRequest = async (req, res, next) => {
  try {
    const matchingRequestService = new MatchingRequestService();
    const getUserDog = matchingRequestService.getUserDogInfo;
    const newMatchingRequest = matchingRequestService.postMatchingRequest();

    res.status(200).json({
      data: { getUserDog, newMatchingRequest },
      msg: '매칭글 생성',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = postMatchingRequest;
