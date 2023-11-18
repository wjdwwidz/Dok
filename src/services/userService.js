const CustomError = require('../errors/customError');
const User = require('../models/user/user');
const PasswordEncoder = require('../utils/passwordEncoder');

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

  try {
    await user.save();
    return user;
  } catch (error) {
    console.error(error);
    throw new CustomError(error.message, 500);
  }
}

module.exports = { createUser };
