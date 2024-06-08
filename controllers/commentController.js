const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.addComment = async (req, res) => {
  const { content } = req.body;

  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    const newComment = new Comment({
      user: req.user.id,
      post: req.params.postId,
      content,
    });

    const comment = await newComment.save();
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate('user', ['name']);
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
