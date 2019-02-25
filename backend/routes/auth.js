const express = require('express');
const router = express.Router();
const { signup, signin } = require('../handlers/auth');


router.route('/signup')
.post(signup)

module.exports = router;