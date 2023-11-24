const UnauthenticationError = require('../errors/unauthenticationError');
const NotFoundError = require('../errors/notFoundError');
const User = require('../models/user/user');
const PasswordEncoder = require('../utils/passwordEncoder');
const JwtUtil = require('../utils/jwtUtil');
const falsey = require('falsey');

async function createUser(userCreateRequest) {
  const encryptedPassword = await PasswordEncoder.hash(
    userCreateRequest.getPassword(),
  );

  const user = new User({
    //mongoose dao 역할 이자 모델
    userId: userCreateRequest.getUserId(),
    password: encryptedPassword,
    name: userCreateRequest.getName(),
    nickname: userCreateRequest.getNickname(),
    phoneNumber: userCreateRequest.getPhoneNumber(),
    address: userCreateRequest.getAddress(),
    introduce: userCreateRequest.getIntroduce(),
    isCertificated: userCreateRequest.getIsCertificated(),
  });

  await user.save();
  return user;
}

async function signIn(res, userSignInRequest) {
  const userId = userSignInRequest.getUserId();
  const password = userSignInRequest.getPassword();

  const user = await User.findOne({ userId: userId });
  if (falsey(user)) {
    throw new NotFoundError(`존재하지 않는 아이디입니다. inputId: ${userId}`);
  }

  const isMatch = await PasswordEncoder.compare(password, user.password);
  if (!isMatch) {
    throw new UnauthenticationError(
      `비밀번호가 일치하지 않습니다. inputPassword: ${password}`,
    );
  }
  const jwtUtil = new JwtUtil();
  const token = await jwtUtil.encode(user._id);
  res.header('Bearer', `${token}`);

  return user;
}

//how to make editUserInfo function?
//1. get userId from token
//2. get udpateData from req.body
//3. update user information
//4. return user

async function editUserInfo(token, udpateData) {
  const userId = token.userId;
  console.log(token);
  console.log(userId);
  console.log(udpateData);
  try {
    const user = await User.findOne({ userId: userId });
    if (!user) {
      throw new NotFoundError(`존재하지 않는 아이디입니다. inputId: ${userId}`);
    }
    const updatedUser = await user.updateOne(user, udpateData);
    return updatedUser;
  } catch (error) {
    next(error);
  }
}

module.exports = { createUser, signIn, editUserInfo };
