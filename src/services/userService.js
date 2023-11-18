const User = require('../models/user/user');
const PasswordEncoder = require('../utils/passwordEncoder');

async function createUser(userRequest) {
  try {
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
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { createUser };
