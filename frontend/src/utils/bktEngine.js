// BKT Parameter Table from your research
const KC_PARAMS = {
  KC11: { p_t: 0.25, p_g: 0.20, p_s: 0.05 },
  KC12: { p_t: 0.25, p_g: 0.15, p_s: 0.10 },
  KC13: { p_t: 0.20, p_g: 0.15, p_s: 0.10 },
  KC14: { p_t: 0.20, p_g: 0.15, p_s: 0.10 },
  KC15: { p_t: 0.25, p_g: 0.15, p_s: 0.15 },
  KC21: { p_t: 0.20, p_g: 0.10, p_s: 0.20 },
  KC22: { p_t: 0.20, p_g: 0.10, p_s: 0.20 },
  KC23: { p_t: 0.20, p_g: 0.10, p_s: 0.15 },
  KC24: { p_t: 0.25, p_g: 0.10, p_s: 0.20 },
  KC31: { p_t: 0.15, p_g: 0.10, p_s: 0.15 },
  KC32: { p_t: 0.15, p_g: 0.10, p_s: 0.15 },
  KC33: { p_t: 0.20, p_g: 0.10, p_s: 0.20 },
  KC34: { p_t: 0.20, p_g: 0.10, p_s: 0.15 },
  KC41: { p_t: 0.20, p_g: 0.10, p_s: 0.15 },
  KC42: { p_t: 0.20, p_g: 0.10, p_s: 0.15 },
  KC43: { p_t: 0.30, p_g: 0.05, p_s: 0.10 },
  KC44: { p_t: 0.20, p_g: 0.10, p_s: 0.15 },
  KC51: { p_t: 0.25, p_g: 0.10, p_s: 0.10 },
  KC52: { p_t: 0.25, p_g: 0.10, p_s: 0.15 },
  KC53: { p_t: 0.25, p_g: 0.10, p_s: 0.20 },
  KC54: { p_t: 0.20, p_g: 0.10, p_s: 0.10 }
};

export const updateMastery = (currentPL, performanceScore, kcId) => {
  const params = KC_PARAMS[kcId] || { p_t: 0.2, p_g: 0.1, p_s: 0.1 };
  let pKnown;
  if (performanceScore > 0.5) {
      pKnown = (currentPL * (1 - params.p_s)) / (currentPL * (1 - params.p_s) + (1 - currentPL) * params.p_g);
  } else {
      pKnown = (currentPL * params.p_s) / (currentPL * params.p_s + (1 - currentPL) * (1 - params.p_g));
  }
  return Math.min(0.95, pKnown + (1 - pKnown) * params.p_t);
};

export const calculateLearnerState = (history, currentPL) => {
  if (!history || history.length === 0) return { p_l: currentPL, p_star_l: currentPL, engagement: 0.5, frustration: 0 };
  const N = history.length;
  const acc = history.filter(h => h.is_correct).length / N;
  const avgRT = history.reduce((sum, h) => sum + h.rt_norm, 0) / N;
  const guessRate = history.filter(h => h.is_guess).length / N;
  const hintDep = history.reduce((sum, h) => sum + (h.hints_used / 3), 0) / N;
  const confidence = acc * (1 - hintDep);
  const engagement = (0.4 * acc) + (0.3 * (1 - guessRate)) + (0.3 * Math.min(avgRT, 1));
  const frustration = (0.5 * (1 - acc)) + (0.3 * hintDep) + (0.2 * Math.max(avgRT - 1, 0));
  const stability = 1 - (history.filter(h => h.is_correct).length % N === 0 ? 0 : 0.2);
  const p_star_l = currentPL * (0.6 + 0.4 * confidence);

  return { p_l: currentPL, p_star_l, acc, avgRT, guessRate, hintDep, engagement, frustration, confidence, stability };
};