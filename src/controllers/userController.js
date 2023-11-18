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

module.exports = { signUp };
