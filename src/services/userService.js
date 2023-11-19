const UnauthenticationError = require('../errors/unauthenticationError');
const NotFoundError = require('../errors/notFoundError');
const User = require('../models/user/user');
const PasswordEncoder = require('../utils/passwordEncoder');
const falsey = require('falsey');

async function createUser(userRequest) {
  const encryptedPassword = await PasswordEncoder.hash(
    userRequest.getPassword(),
  );

  const user = new User({
    //mongoose dao 역할 이자 모델
    userId: userRequest.getUserId(),
    password: encryptedPassword,
    name: userRequest.getName(),
    nickname: userRequest.getNickname(),
  });

  await user.save();
  return user;
}

async function signIn(userId, password) {
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

  return user;
}

module.exports = { createUser, signIn };
