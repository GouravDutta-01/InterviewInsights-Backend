const express = require('express');
const { createPost, getPosts, getPostById, deletePost } = require('../controllers/postController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.delete('/:id', auth, deletePost);

module.exports = router;
