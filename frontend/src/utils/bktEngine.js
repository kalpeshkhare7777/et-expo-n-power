import { kcs } from '../data/domain';

export const updateMastery = (pL_prev, isCorrect, subtopicId, subskillId) => {
  const params = kcs[subtopicId].subskills[subskillId];
  const { pG, pS, pT } = params;
  
  // 1. Posterior Mastery based on observation
  let pL_obs;
  if (isCorrect) {
    pL_obs = (pL_prev * (1 - pS)) / (pL_prev * (1 - pS) + (1 - pL_prev) * pG);
  } else {
    pL_obs = (pL_prev * pS) / (pL_prev * pS + (1 - pL_prev) * (1 - pG));
  }

  // 2. Learning Transition
  return pL_obs + (1 - pL_obs) * pT;
};