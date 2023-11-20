// 테스트 데이터를 db에 채워넣기 위함!!

// const fakeComment = require('./static/fakeComment.json');
// const fakeUser = require('./static/fakeUser.json');
// const fakeDog = require('./static/fakeDog.json');
// const fakeMatchingPost = require('./static/fakeMatchingPost.json');
// const fakeMatchingPostRequest = require('./static/fakeMatchingPostRequest.json');

// const MatchingPostComment = require('./models/schemas/matchingPostComment/matchingPostComment');
// const User = require('./models/schemas/user/user');
// const UserDog = require('./models/schemas/userDog/userDog');
// const UserDog = require('./models/schemas/userDog/userDog');
// const MatchingPost = require('./models/schemas/matchingPost/matchingPost');
// const MatchingHandlerRequest = require('./models/schemas/matchingHandlerRequest/matchingHandlerRequest');

const dbFill = async (req, res) => {
  //await User.insertMany(fakeUser.data);
  //console.log('유저 데이터 성공...');
  //await MatchingPostComment.insertMany(fakeComment.data);
  //console.log('댓글 데이터 성공...');
  //await UserDog.insertMany(fakeDog.data);
  //console.log('강아지 데이터 성공...');
  // await MatchingPost.insertMany(fakeMatchingPost.data);
  // console.log('매칭 포스트 데이터 성공...');
  // await MatchingHandlerRequest.insertMany(fakeMatchingPostRequest.data);
  // console.log('매칭 요청 데이터 성공...');
};

module.exports = dbFill;
