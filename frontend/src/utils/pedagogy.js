export const getNextPedAction = (state) => {
  const { p_star_l, confidence, frustration, guessRate, stability, engagement } = state;

  // 1. Next KC Transition Logic
  const M_ready = (0.5 * p_star_l) + (0.2 * stability) + (0.15 * confidence) + (0.15 * (1 - guessRate));
  const Risk = (0.4 * frustration) + (0.3 * guessRate) + (0.3 * (1 - stability));

  if (M_ready >= 0.8 && Risk < 0.3) return { type: 'ADVANCE' };
  
  // 2. Remedial Content Trigger
  if (frustration > 0.7 || (p_star_l < 0.3 && state.acc < 0.2)) return { type: 'REMEDIAL' };

  // 3. Fatigue Detection
  if (frustration > 0.8 && engagement < 0.2) return { type: 'BREAK_PROMPT' };

  // 4. Difficulty Adjustment (Target Zone 0.75)
  const D_signal = (0.5 * (p_star_l - 0.75)) + (0.2 * confidence) - (0.2 * frustration) - (0.1 * guessRate);
  
  let difficulty = 'easy';
  if (D_signal > 0.2) difficulty = 'hard';
  else if (D_signal > -0.1) difficulty = 'medium';

  return { type: 'PRACTICE', difficulty };
};