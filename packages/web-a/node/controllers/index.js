const express = require('express');
const render = require('./render');
const router = express.Router();

router.get('/', function (req, res) {
    render(res, null);
});

module.exports = router;
