const { Router } = require('express');
const { addCart, getCarts } = require('../controllers/carts');

const router = Router();

router.post('/carts', addCart);
router.get('/user/carts/:id', getCarts);

module.exports = router;
