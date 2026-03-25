// src/data/questions.js
export const kcParams = {
    KC11: { pL0: 0.40, pT: 0.25, pG: 0.20, pS: 0.05 },
    KC12: { pL0: 0.35, pT: 0.25, pG: 0.15, pS: 0.10 }
  };
  
  export const questionBank = [
    {
      id: 1,
      kc: "KC12",
      text: "Write in exponential form: 4 × 4 × 4",
      options: ["4^3", "3^4", "12", "4³"],
      answer: "4^3",
      hints: ["Count how many times 4 appears", "That number becomes the exponent"]
    },
    {
      id: 2,
      kc: "KC11",
      text: "Identify base and exponent in 7^2",
      options: ["Base=7, Exp=2", "Base=2, Exp=7", "Base=14, Exp=1"],
      answer: "Base=7, Exp=2",
      hints: ["Base is the bottom number", "Exponent is the small raised number"]
    }
  ];