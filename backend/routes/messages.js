const express = require('express');
const router = express.Router({ mergeParams: true });

const { createMessage } = require('../handlers/message');

router.route('/create').post(createMessage);

module.exports = router;