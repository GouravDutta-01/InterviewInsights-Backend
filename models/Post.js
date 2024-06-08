const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  stageName: { type: String, required: true },
  description: { type: String, required: true }
});

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  stages: {
    type: [stageSchema], 
    required: true,
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
