const { Router } = require('express');
const { getCarts } = require('../controllers/carts');

const router = Router();

router.get('/user/carts/:id', getCarts);

module.exports = router;
