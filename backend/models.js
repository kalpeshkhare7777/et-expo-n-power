const mongoose = require('mongoose');

// 1. Schema for Questions
const QuestionSchema = new mongoose.Schema({
  kc_id: String,
  difficulty: String,
  question_text: String,
  options: [String],
  answer: String,
  hints: [String]
});

// 2. Schema for Student Progress (BKT State)
const ProgressSchema = new mongoose.Schema({
  roll_number: String,
  subskill_id: String,
  p_l: Number,
  consecutive_correct: Number,
  last_updated: { type: Date, default: Date.now }
});

const Question = mongoose.model('Question', QuestionSchema);
const Progress = mongoose.model('Progress', ProgressSchema);

module.exports = { Question, Progress };