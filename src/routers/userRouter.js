const { Router } = require('express');
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

const router = Router();

router.post('/signUp', userController.signUp);
router.post('/signIn', userController.signIn);

router.get('/:userId', userController.getUser);

router.patch(
  '/myInfo',
  jwtMiddleware.authenticateToken,
  userController.editUserInfo,
);

module.exports = router;
