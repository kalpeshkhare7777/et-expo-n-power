import { questionBank, kcs } from '../data/domain';

export const getNextAction = (state) => {
  const { currentSubskill, mastery, lastResponseCorrect, misconceptionDetected, consecutiveCorrect } = state;

  if (misconceptionDetected) {
    return { type: 'REMEDIATE', message: "Misconception detected! Let's review the rule.", payload: { difficulty: 'easy' } };
  }

  // Mastery Thresholds [cite: 1218-1223, 1266]
  if (mastery >= 0.85 && consecutiveCorrect >= 2) {
    return { type: 'ADVANCE_KC', message: "Mastery achieved! Moving to next topic.", payload: { difficulty: 'difficult' } };
  }

  if (mastery < 0.60) {
    return { type: 'SCAFFOLD', message: "Let's try a simpler version of this concept.", payload: { difficulty: 'easy' } };
  }

  return { type: 'PRACTICE', message: "Keep going! Strengthening your understanding.", payload: { difficulty: lastResponseCorrect ? 'medium' : 'easy' } };
};

export const selectQuestion = (subskillId, difficulty, usedIds) => {
  // Try target difficulty first
  let pool = questionBank.filter(q => q.kc === subskillId && q.difficulty === difficulty && !usedIds.includes(q.id));
  
  // Fallback to any unused in KC 
  if (pool.length === 0) {
    pool = questionBank.filter(q => q.kc === subskillId && !usedIds.includes(q.id));
  }

  // Loop Prevention: Reuse easiest if all are used [cite: 1286]
  if (pool.length === 0) {
    pool = questionBank.filter(q => q.kc === subskillId).sort((a, b) => {
      const dMap = { easy: 1, medium: 2, difficult: 3, 'very difficult': 4 };
      return dMap[a.difficulty] - dMap[b.difficulty];
    });
  }

  return pool[0];
};