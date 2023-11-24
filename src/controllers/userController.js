const userService = require('../services/userService');
const UserCreateRequest = require('../dtos/users/userCreateRequest');
const UserSignInRequest = require('../dtos/users/userSignInRequest');

async function signUp(req, res, next) {
  const {
    userId,
    password,
    name,
    nickname,
    phoneNumber,
    address,
    introduce,
    isCertificated,
  } = req.body;
  try {
    const userRequest = new UserCreateRequest(
      userId,
      password,
      name,
      nickname,
      phoneNumber,
      address,
      introduce,
      isCertificated,
    );
    const user = await userService.createUser(userRequest);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function signIn(req, res, next) {
  const { userId, password } = req.body;
  try {
    const userSignInRequest = new UserSignInRequest(userId, password);
    const user = await userService.signIn(res, userSignInRequest);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function editUserInfo(req, res, next) {
  const userId = req.userId;
  const updateData = req.body;
  try {
    //여기서 updatedata는 어떤 형태의 객체인가?
    //어떤 식으로 updateData를 받아야 하는가?
    const updatedUser = await userService.editUserInfo(userId, updateData);
    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

module.exports = { signUp, signIn, editUserInfo };
