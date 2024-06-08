const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  interviewDifficulty: {
    type: Number,
  },
  commonQuestions: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Company', CompanySchema);
