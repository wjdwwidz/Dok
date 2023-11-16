const userDao = require("../models/user/userDao");

const signUp = async (userId, password) => {
  try {
    //Validation required
    const createUser = await userDao.createUser(userId, password);
    return createUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const getUserById = async (userId) => {
//   try {
//     const user = await User.findById(userId);
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = { signUp };
