const userService = require("../services/userService.js");

async function signUp(req, res, next) {
  const { userId, password } = req.body;

  try {
    const newUser = await userService.signUp({
      userId,
      password,
    });
    res.status(201).json(newUser);
    console.log("from userService");
  } catch (error) {
    next(error);
  }
}

module.exports = { signUp };
