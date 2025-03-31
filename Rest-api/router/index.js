const router = require('express').Router();
const users = require('./users');
const themes = require('./themes');
const posts = require('./posts');
const likes = require('./likes');
const cars = require('./cars')
const test = require('./test');
const { authController } = require('../controllers');
const { getProfileInfo } = require('../controllers/auth');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/users/:id', getProfileInfo);
router.get('/users/me', authMiddleware, authController.getProfileInfo);
router.put('/users/me', authMiddleware, authController.editProfileInfo);


router.use('/users', users);
router.use('/cars', cars)
router.use('/themes', themes);
router.use('/posts', posts);
router.use('/likes', likes);
router.use('/test', test);

module.exports = router;
