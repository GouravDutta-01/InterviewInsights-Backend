const Rating = require('../models/Rating');
const Post = require('../models/Post');

exports.addRating = async (req, res) => {
  const { rating } = req.body;

  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    const newRating = new Rating({
      user: req.user.id,
      post: req.params.postId,
      rating,
    });

    const existingRating = await Rating.findOne({ user: req.user.id, post: req.params.postId });
    if (existingRating) {
      existingRating.rating = rating;
      await existingRating.save();
      return res.json(existingRating);
    }

    const savedRating = await newRating.save();
    res.json(savedRating);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
