const { Router } = require('express');
const { signup } = require('../controllers/users');

const router = Router();

router.post('/users', signup);

module.exports = router;