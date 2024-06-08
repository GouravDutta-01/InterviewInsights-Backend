const express = require('express');
const { addRating } = require('../controllers/ratingController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/:postId', auth, addRating);

module.exports = router;
