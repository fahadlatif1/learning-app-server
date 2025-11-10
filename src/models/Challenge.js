import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    default: 'dart',
  },
  starterCode: {
    type: String,
    default: '',
  },
  solution: {
    type: String,
    default: '',
  },
  testCases: [{
    input: String,
    expectedOutput: String,
  }],
  hints: [{
    type: String,
  }],
  category: {
    type: String,
    default: 'general',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Challenge', challengeSchema);
