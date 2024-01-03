const { Router } = require('express');
const { signup, login, userAnthenticating } = require('../controllers/users');

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/users/authenticating', userAnthenticating);

module.exports = router;