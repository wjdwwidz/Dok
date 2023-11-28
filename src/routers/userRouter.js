const { Router } = require('express');
const userController = require('../controllers/userController');
const userDogController = require('../controllers/userDogController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
//const { UserDog } = require('../models/user/userDog');

const router = Router();

router.get('/', userController.getUser);
// router.get('/myInfo/matchings', userController.getMyMatchings);
router.post('/signUp', userController.signUp);
router.post('/signIn', userController.signIn);

// router.get(
//   '/myInfo/matchings',
//   jwtMiddleware.authenticateToken,
//   userController.getMyMatchings,
// );

router.get('/myInfo', userController.getMyInfo);

router.patch(
  '/myInfo',
  jwtMiddleware.authenticateToken,
  userController.editUserInfo,
);

router.post(
  '/myDog',
  jwtMiddleware.authenticateToken,
  userDogController.createUserDog,
);

module.exports = router;
