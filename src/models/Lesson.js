import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner',
  },
  duration: {
    type: Number, // in minutes
    default: 10,
  },
  order: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    default: 'general',
  },
  codeExamples: [{
    title: String,
    code: String,
    language: {
      type: String,
      default: 'dart',
    },
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Lesson', lessonSchema);
