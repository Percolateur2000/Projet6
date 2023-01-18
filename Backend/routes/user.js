const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const rateLimit = require('express-rate-limit');
const userValidation = require("../middleware/user.validator");

const apiLimiter = rateLimit({
	windowMs: 60 * 60 * 1000,
	max: 5,
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

router.post('/signup', apiLimiter, userValidation, userCtrl.signup)
router.post('/login', apiLimiter, userCtrl.login)

module.exports = router;