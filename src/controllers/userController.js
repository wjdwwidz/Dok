const userService = require('../services/userService');
const UserRequest = require('../dtos/userRequest');
const falsey = require('falsey');

async function signUp(req, res) {
  const { userId, password, name, nickname } = req.body;
  //Validation required
  try {
    // userRequest 생성 실패시 400에러
    const userRequest = new UserRequest(userId, password, name, nickname);
    const user = await userService.createUser(userRequest);
    res.status(201).json(user);
  } catch (error) {
    if (falsey(error.getStatusCode)) {
      res.status(500).json(error.message);
    }
    res.status(error.getStatusCode()).json(error.getMessage());
  }
}

async function signIn(req, res) {
  const { userId, password } = req.body;
  try {
    const user = await userService.signIn(userId, password);
    res.status(200).json(user);
  } catch (error) {
    if (falsey(error.getStatusCode)) {
      res.status(500).json(error.message); //우리가 모르는 에러는 500으로 던진다
    }
    res.status(error.getStatusCode()).json(error.getMessage()); //커스텀에러 상속 받은 모든 에러
  }
}

module.exports = { signUp, signIn };
