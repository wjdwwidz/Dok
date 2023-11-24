const userService = require('../services/userService');
const UserCreateRequest = require('../dtos/users/userCreateRequest');
const UserSignInRequest = require('../dtos/users/userSignInRequest');
const UserUpdateRequest = require('../dtos/users/userUpdateRequest');

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
  const _id = req._id;

  try {
    const userUpdateRequest = new UserUpdateRequest(req.body);
    const updatedUser = await userService.editUserInfo(_id, userUpdateRequest);
    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  const userId = req.params.userId;
  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { signUp, signIn, editUserInfo, getUser };
