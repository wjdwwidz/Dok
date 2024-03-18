const { Router } = require('express');
const userController = require('../controllers/userController');
const userDogController = require('../controllers/userDogController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

const router = Router();

router.get(
  '/',
  // #swagger.tags = ['user'];
  // #swagger.description = '유저 정보를 불러옵니다.'
  userController.getUser,
);
router.get(
  '/myInfo',
  // #swagger.tags = ['user'];
  // #swagger.description = '내 정보를 불러옵니다.'
  jwtMiddleware.authenticateToken,
  userController.getMyInfo,
);
router.get(
  '/myDog',
  // #swagger.tags = ['user'];
  // #swagger.description = '내 강아지 정보를 불러옵니다.'
  jwtMiddleware.authenticateToken,
  userDogController.getMyDog,
);

router.post(
  '/signUp',
  // #swagger.tags = ['user'];
  // #swagger.description = '회원가입을 합니다.'
  userController.signUp,
);
router.post(
  '/signIn',
  // #swagger.tags = ['user'];
  // #swagger.description = '로그인을 합니다.'
  userController.signIn,
);
router.post(
  '/signOut',
  // #swagger.tags = ['user'];
  // #swagger.description = '로그아웃을 합니다.'
  userController.signOut,
);

router.patch(
  '/myInfo',
  // #swagger.tags = ['user'];
  // #swagger.description = '내 정보를 수정합니다.'
  jwtMiddleware.authenticateToken,
  userController.editUserInfo,
);

router.delete(
  '/myInfo',
  // #swagger.tags = ['user'];
  // #swagger.description = '회원탈퇴를 합니다.'
  jwtMiddleware.authenticateToken,
  userController.deleteUser,
);
// router.get(
//   '/myInfo/matchings',
//   jwtMiddleware.authenticateToken,
//   userController.getMyMatchings,
// );

router.post(
  '/myDog',
  // #swagger.tags = ['user'];
  // #swagger.description = '강아지 정보를 추가합니다.'
  jwtMiddleware.authenticateToken,
  userDogController.createUserDog,
);

module.exports = router;
