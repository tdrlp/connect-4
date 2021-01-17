const express = require('express');
const router = express.Router();

router.post('/new', (req, res) => {
	res.send('back to u pal');
});

module.exports = router;
