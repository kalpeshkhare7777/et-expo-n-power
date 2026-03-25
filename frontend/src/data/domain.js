/**
 * src/data/domain.js
 * Adaptive Tutoring System: Exponents and Powers
 * Indian Institute of Technology Bombay
 */

export const kcs = {
    KC1: {
      id: "KC1",
      title: "Subtopic 1: Introduction to Exponents",
      motivation: "Large numbers are difficult to write and compare. For example, the mass of the Earth is 5,970,000,000,000,000,000,000,000 kg. Exponents provide a compact way to represent repeated multiplication, like writing 10 × 10 × 10 × 10 as 10^4.",
      content: "An exponent represents repeated multiplication. In the form a^n: 'a' is the Base (repeated factor) and 'n' is the Exponent (number of repetitions). Example: 2^4 = 2 × 2 × 2 × 2 = 16.",
      subskills: {
        KC11: { pL0: 0.40, pT: 0.25, pG: 0.20, pS: 0.05 },
        KC12: { pL0: 0.35, pT: 0.25, pG: 0.15, pS: 0.10 },
        KC13: { pL0: 0.30, pT: 0.20, pG: 0.15, pS: 0.10 },
        KC14: { pL0: 0.30, pT: 0.20, pG: 0.15, pS: 0.10 },
        KC15: { pL0: 0.25, pT: 0.25, pG: 0.15, pS: 0.15 }
      }
    },
    KC2: {
      id: "KC2",
      title: "Subtopic 2: Special Powers and Negative Bases",
      motivation: "What happens when a negative number is multiplied repeatedly? Tracking negative signs manually can be confusing. Exponents help simplify expressions like (-2) × (-2) × (-2).",
      content: "If the exponent is even, the result is positive [(-3)^2 = 9]. If the exponent is odd, the result is negative [(-3)^3 = -27]. For variables: a × a × a × b × b = a^3b^2.",
      subskills: {
        KC21: { pL0: 0.20, pT: 0.20, pG: 0.10, pS: 0.20 },
        KC22: { pL0: 0.20, pT: 0.20, pG: 0.10, pS: 0.20 },
        KC23: { pL0: 0.25, pT: 0.20, pG: 0.10, pS: 0.15 },
        KC24: { pL0: 0.15, pT: 0.25, pG: 0.10, pS: 0.20 }
      }
    },
    KC3: {
      id: "KC3",
      title: "Subtopic 3: Laws of Exponents (Same Base)",
      motivation: "Consider 2^10 ÷ 2^6. Expanding this requires writing 2 ten times. Exponent laws help simplify such expressions quickly without full expansion.",
      content: "Multiplication Law: a^m × a^n = a^(m+n). Division Law: a^m ÷ a^n = a^(m-n). Power of a Power: (a^m)^n = a^(mn).",
      subskills: {
        KC31: { pL0: 0.25, pT: 0.15, pG: 0.10, pS: 0.15 },
        KC32: { pL0: 0.20, pT: 0.15, pG: 0.10, pS: 0.15 },
        KC33: { pL0: 0.20, pT: 0.20, pG: 0.10, pS: 0.20 },
        KC34: { pL0: 0.20, pT: 0.20, pG: 0.10, pS: 0.15 }
      }
    },
    KC4: {
      id: "KC4",
      title: "Subtopic 4: Laws of Exponents (Different Bases)",
      motivation: "Exponent laws also help when the exponent is the same but bases are different. For example, 2^3 × 3^3 = (2 × 3)^3 = 6^3.",
      content: "Multiplication: a^m × b^m = (ab)^m. Division: a^m / b^m = (a/b)^m. Zero Exponent Rule: Any non-zero number raised to the power of zero equals 1 (a^0 = 1).",
      subskills: {
        KC41: { pL0: 0.15, pT: 0.20, pG: 0.10, pS: 0.15 },
        KC42: { pL0: 0.15, pT: 0.20, pG: 0.10, pS: 0.15 },
        KC43: { pL0: 0.10, pT: 0.30, pG: 0.05, pS: 0.10 },
        KC44: { pL0: 0.15, pT: 0.20, pG: 0.10, pS: 0.15 }
      }
    },
    KC5: {
      id: "KC5",
      title: "Subtopic 5: Standard Form (Scientific Notation)",
      motivation: "Very large numbers (distance to the Sun) or very small numbers (size of a cell) are difficult to compare. Standard form (k × 10^n) makes them easier to read.",
      content: "Standard form is k × 10^n where 1 ≤ k < 10. To convert, move the decimal point so only one non-zero digit remains on the left. Count the places moved to find the exponent 'n'.",
      subskills: {
        KC51: { pL0: 0.20, pT: 0.25, pG: 0.10, pS: 0.10 },
        KC52: { pL0: 0.20, pT: 0.25, pG: 0.10, pS: 0.15 },
        KC53: { pL0: 0.15, pT: 0.25, pG: 0.10, pS: 0.20 },
        KC54: { pL0: 0.20, pT: 0.20, pG: 0.10, pS: 0.10 }
      }
    }
  };
  
  export const questionBank = [
    // --- SUBTOPIC 1: INTRODUCTION TO EXPONENTS ---
    { id: 1, kc: "KC12", difficulty: "easy", text: "Write in exponential form: 4 × 4 × 4", options: ["4^3", "3^4", "12", "4 × 3"], answer: "4^3", hints: ["Count how many times 4 appears", "That number becomes the exponent", "Base remains 4"] },
    { id: 2, kc: "KC11", difficulty: "easy", text: "Identify the base and exponent in 7^2", options: ["Base=7, Exponent=2", "Base=2, Exponent=7", "Base=14, Exponent=1", "Base=7, Exponent=7"], answer: "Base=7, Exponent=2", hints: ["The number at the bottom is the base", "The small raised number is the exponent", "Base = 7, Exponent = 2"] },
    { id: 3, kc: "KC12", difficulty: "easy", text: "Write 5 × 5 × 5 × 5 in exponent form", options: ["5^4", "4^5", "20", "5 × 4"], answer: "5^4", hints: ["Count number of 5s", "That becomes the exponent", "Write 5^4"] },
    { id: 4, kc: "KC13", difficulty: "easy", text: "Expand 2^3", options: ["2 × 2 × 2", "2 × 3", "3 × 3", "2 + 2 + 2"], answer: "2 × 2 × 2", hints: ["Base is 2", "Exponent is 3", "Write 2 three times"] },
    { id: 5, kc: "KC13", difficulty: "easy", text: "What does 10^2 represent?", options: ["10 × 10", "10 + 10", "10 × 2", "100 + 100"], answer: "10 × 10", hints: ["Base = 10", "Exponent = 2", "Multiply 10 two times"] },
    { id: 6, kc: "KC12", difficulty: "medium", text: "Write 6 × 6 × 6 × 6 × 6 in exponent form", options: ["6^5", "5^6", "30", "6 + 6 + 6 + 6 + 6"], answer: "6^5", hints: ["Base is 6", "Count repetitions", "Write 6^5"] },
    { id: 7, kc: "KC14", difficulty: "medium", text: "Evaluate 3^4", options: ["81", "12", "64", "27"], answer: "81", hints: ["Expand the multiplication", "Multiply sequentially", "3 × 3 × 3 × 3"] },
    { id: 8, kc: "KC15", difficulty: "medium", text: "Express 256 as a power of 2", options: ["2^8", "2^6", "2^7", "2^9"], answer: "2^8", hints: ["Keep dividing by 2", "Count divisions", "That number becomes exponent"] },
    { id: 9, kc: "KC12", difficulty: "medium", text: "Write 9 × 9 in exponential form", options: ["9^2", "2^9", "18", "9 + 9"], answer: "9^2", hints: ["Base = 9", "Two repetitions", "Write 9^2"] },
    { id: 10, kc: "KC12", difficulty: "medium", text: "Which represents repeated multiplication?", options: ["5^3", "5 + 5 + 5", "5 × 3", "5 + 3"], answer: "5^3", hints: ["Exponents represent repeated multiplication", "Addition is not exponentiation", "Correct answer: 5^3"] },
    { id: 11, kc: "KC15", difficulty: "difficult", text: "Write 125 as a power of 5", options: ["5^3", "5^2", "5^4", "3^5"], answer: "5^3", hints: ["Factorize 125", "125 = 5 × 5 × 5", "Count factors"] },
    { id: 12, kc: "KC14", difficulty: "difficult", text: "Evaluate 2^5", options: ["32", "10", "25", "16"], answer: "32", hints: ["Expand multiplication", "Multiply step by step", "2 × 2 × 2 × 2 × 2"] },
    { id: 13, kc: "KC13", difficulty: "difficult", text: "Which is correct?", options: ["4^3 = 4 × 4 × 4", "4^3 = 4 + 4 + 4", "4^3 = 12", "4^3 = 43"], answer: "4^3 = 4 × 4 × 4", hints: ["Exponent means multiplication", "Not addition", "Choose the correct expression"] },
    { id: 14, kc: "KC12", difficulty: "difficult", text: "Write a × a × a × a in exponential form", options: ["a^4", "4a", "a+4", "4^a"], answer: "a^4", hints: ["Variable repeated", "Count repetitions", "Write a^4"] },
    { id: 15, kc: "KC14", difficulty: "difficult", text: "Which is larger: 2^4 or 4^2?", options: ["They are equal", "2^4 is larger", "4^2 is larger", "None of these"], answer: "They are equal", hints: ["Calculate both values", "2^4 = 16", "4^2 = 16"] },
    { id: 16, kc: "KC15", difficulty: "very difficult", text: "If 2^x = 32, find x", options: ["5", "4", "6", "2"], answer: "5", hints: ["Write 32 as power of 2", "32 = 2^5", "Compare exponents"] },
    { id: 17, kc: "KC15", difficulty: "very difficult", text: "Find n such that 3^n = 243", options: ["5", "4", "6", "3"], answer: "5", hints: ["Factorize 243", "243 = 3 × 3 × 3 × 3 × 3", "Count factors"] },
  
    // --- SUBTOPIC 2: NEGATIVE BASES ---
    { id: 18, kc: "KC21", difficulty: "easy", text: "Evaluate (-2)^2", options: ["4", "-4", "2", "-2"], answer: "4", hints: ["Expand the multiplication", "Multiply (-2) × (-2)", "Two negatives make a positive"] },
    { id: 19, kc: "KC21", difficulty: "easy", text: "Evaluate (-3)^2", options: ["9", "-9", "6", "-6"], answer: "9", hints: ["Square means multiply twice", "Multiply (-3) × (-3)", "Result is positive"] },
    { id: 20, kc: "KC21", difficulty: "easy", text: "Expand (-4)^3", options: ["(-4) × (-4) × (-4)", "(-4) × 3", "4 × 4 × 4", "-64"], answer: "(-4) × (-4) × (-4)", hints: ["Exponent 3 means multiply three times", "Write (-4) × (-4) × (-4)", "Multiply step by step"] },
    { id: 21, kc: "KC23", difficulty: "easy", text: "Write a × a in exponential form", options: ["a^2", "2a", "a+a", "a^a"], answer: "a^2", hints: ["Same variable repeated", "Count repetitions", "Write a^2"] },
    { id: 22, kc: "KC23", difficulty: "easy", text: "Write b × b × b in exponent form", options: ["b^3", "3b", "b+b+b", "3^b"], answer: "b^3", hints: ["Count how many b appear", "Base is b", "Exponent is 3"] },
    { id: 23, kc: "KC21", difficulty: "medium", text: "Evaluate (-2)^3", options: ["-8", "8", "-6", "6"], answer: "-8", hints: ["Expand multiplication", "Multiply (-2) × (-2) × (-2)", "Check sign"] },
    { id: 24, kc: "KC23", difficulty: "medium", text: "Simplify a × a × a × b", options: ["a^3b", "3ab", "a^3+b", "(ab)^3"], answer: "a^3b", hints: ["Group identical variables", "Count powers of a", "Write in exponent form"] },
    { id: 25, kc: "KC22", difficulty: "medium", text: "Determine the sign of (-5)^4", options: ["Positive", "Negative"], answer: "Positive", hints: ["Check exponent", "Even exponent gives positive", "Result is positive"] },
    { id: 26, kc: "KC23", difficulty: "medium", text: "Simplify a × a × b × b × b", options: ["a^2b^3", "a^3b^2", "2a3b", "5ab"], answer: "a^2b^3", hints: ["Count occurrences of a", "Count occurrences of b", "Write as a^2b^3"] },
    { id: 27, kc: "KC22", difficulty: "medium", text: "Evaluate (-1)^5", options: ["-1", "1", "5", "-5"], answer: "-1", hints: ["Check exponent", "Odd exponent keeps negative sign", "Result is -1"] },
    { id: 28, kc: "KC21", difficulty: "difficult", text: "Evaluate (-2)^5", options: ["-32", "32", "-10", "10"], answer: "-32", hints: ["Expand multiplication", "Multiply stepwise", "Odd exponent keeps negative"] },
    { id: 29, kc: "KC23", difficulty: "difficult", text: "Simplify (-1)^4 × a × a × b", options: ["a^2b", "-a^2b", "1a^2b", "(-1)^4a^2b"], answer: "a^2b", hints: ["Evaluate (-1)^4", "Group variables", "Write using exponents"] },
    { id: 30, kc: "KC22", difficulty: "difficult", text: "Determine sign of (-7)^6", options: ["Positive", "Negative"], answer: "Positive", hints: ["Look at exponent", "Even exponent", "Result positive"] },
    { id: 31, kc: "KC24", difficulty: "difficult", text: "Simplify (-3)^2 × (-3)", options: ["-27", "27", "9", "-9"], answer: "-27", hints: ["Expand square", "Multiply by (-3)", "Track sign"] },
    { id: 32, kc: "KC23", difficulty: "difficult", text: "Write a × a × a × b × b × b × b × b", options: ["a^3b^5", "a^3b^4", "a^5b^3", "a^4b^3"], answer: "a^3b^5", hints: ["Count powers of a", "Count powers of b", "Write a^3b^5"] },
    { id: 33, kc: "KC22", difficulty: "very difficult", text: "Determine the sign of (-2)^7 × (-3)^4", options: ["Negative", "Positive"], answer: "Negative", hints: ["Check each exponent", "Odd power gives negative", "Even power gives positive"] },
    { id: 34, kc: "KC22", difficulty: "very difficult", text: "Simplify (-1)^100 × (-1)^101 × (-1)^102 × (-1)^103 × (-1)^104", options: ["1", "-1", "0", "5"], answer: "1", hints: ["Evaluate every term separately", "Odd power gives negative and Even power gives positive", "ans is either 1 or -1"] },
  
    // --- SUBTOPIC 3: LAWS - SAME BASE ---
    { id: 35, kc: "KC31", difficulty: "easy", text: "Simplify 2^3 × 2^2", options: ["2^5", "2^6", "4^5", "2^1"], answer: "2^5", hints: ["Bases are the same", "Add the exponents", "Write 2^5"] },
    { id: 36, kc: "KC31", difficulty: "easy", text: "Simplify 5^4 × 5^1", options: ["5^5", "5^4", "25^5", "5^3"], answer: "5^5", hints: ["Same base rule", "Add exponents", "5^5"] },
    { id: 37, kc: "KC32", difficulty: "easy", text: "Simplify 3^6 ÷ 3^2", options: ["3^4", "3^8", "3^3", "1^4"], answer: "3^4", hints: ["Same base division", "Subtract exponents", "3^4"] },
    { id: 38, kc: "KC33", difficulty: "easy", text: "Simplify (2^3)^2", options: ["2^6", "2^5", "2^9", "4^3"], answer: "2^6", hints: ["Power of a power rule", "Multiply exponents", "2^6"] },
    { id: 39, kc: "KC32", difficulty: "easy", text: "Simplify 7^5 ÷ 7^5", options: ["1", "7^0", "0", "7^10"], answer: "1", hints: ["Subtract exponents", "5 - 5 = 0", "7^0 = 1"] },
    { id: 40, kc: "KC31", difficulty: "medium", text: "Simplify 4^2 × 4^3", options: ["4^5", "4^6", "16^5", "4^1"], answer: "4^5", hints: ["Same base multiplication", "Add exponents", "4^5"] },
    { id: 41, kc: "KC32", difficulty: "medium", text: "Simplify 6^7 ÷ 6^4", options: ["6^3", "6^11", "6^28", "1^3"], answer: "6^3", hints: ["Division rule", "Subtract exponents", "6^3"] },
    { id: 42, kc: "KC33", difficulty: "medium", text: "Simplify (5^2)^3", options: ["5^6", "5^5", "5^8", "25^3"], answer: "5^6", hints: ["Power of a power", "Multiply exponents", "5^6"] },
    { id: 43, kc: "KC34", difficulty: "medium", text: "Simplify 3^2 × 3^3 × 3^4", options: ["3^9", "3^24", "9^9", "3^5"], answer: "3^9", hints: ["Same base multiplication", "Add all exponents", "3^9"] },
    { id: 44, kc: "KC33", difficulty: "medium", text: "Simplify (2^4)^2", options: ["2^8", "2^6", "2^16", "4^4"], answer: "2^8", hints: ["Power rule", "Multiply exponents", "2^8"] },
    { id: 45, kc: "KC33", difficulty: "difficult", text: "Simplify (3^2)^4 ÷ 3^5", options: ["3^3", "3^1", "3^13", "1^3"], answer: "3^3", hints: ["Apply power of power first", "3^(2×4)", "Then apply division rule"] },
    { id: 46, kc: "KC34", difficulty: "difficult", text: "Simplify 2^3 × 2^4 ÷ 2^2", options: ["2^5", "2^9", "2^10", "4^5"], answer: "2^5", hints: ["Add exponents for multiplication", "Subtract for division", "Simplify stepwise"] },
    { id: 47, kc: "KC34", difficulty: "difficult", text: "Simplify (5^3)^2 × 5^4", options: ["5^10", "5^9", "5^24", "25^10"], answer: "5^10", hints: ["Apply power rule", "Then apply multiplication rule", "Add exponents"] },
    { id: 48, kc: "KC34", difficulty: "difficult", text: "Simplify 7^6 ÷ 7^2 × 7^3", options: ["7^7", "7^1", "7^11", "7^9"], answer: "7^7", hints: ["Perform operations sequentially", "Subtract then add exponents", "Same base rules apply"] },
    { id: 49, kc: "KC33", difficulty: "difficult", text: "Simplify (2^5)^2 ÷ 2^7", options: ["2^3", "2^0", "2^17", "2^10"], answer: "2^3", hints: ["Power rule first", "Multiply exponents", "Then subtract"] },
    { id: 50, kc: "KC33", difficulty: "very difficult", text: "Simplify (2^5)^2 / 2^7", options: ["2^3", "2^10", "2^17", "8"], answer: "2^3", hints: ["Apply power rule", "Convert to 2^10", "Apply division rule"] },
    { id: 51, kc: "KC34", difficulty: "very difficult", text: "Simplify 3^2 × 3^3 × 3^4 ÷ 3^5", options: ["3^4", "3^9", "3^14", "81"], answer: "3^4", hints: ["Add exponents in numerator", "Subtract denominator exponent", "Simplify"] },
  
    // --- SUBTOPIC 4: LAWS - SAME EXPONENT ---
    { id: 52, kc: "KC41", difficulty: "easy", text: "Simplify 2^3 × 5^3", options: ["10^3", "7^3", "10^6", "7^6"], answer: "10^3", hints: ["Same exponent", "Multiply the bases", "(2×5)^3"] },
    { id: 53, kc: "KC41", difficulty: "easy", text: "Simplify 3^2 × 4^2", options: ["12^2", "7^2", "12^4", "7^4"], answer: "12^2", hints: ["Same exponent", "Multiply bases", "(3×4)^2"] },
    { id: 54, kc: "KC42", difficulty: "easy", text: "Simplify 6^2 / 3^2", options: ["2^2", "3^2", "2^0", "12^2"], answer: "2^2", hints: ["Same exponent", "Divide bases", "(6/3)^2"] },
    { id: 55, kc: "KC43", difficulty: "easy", text: "Evaluate 5^0", options: ["1", "0", "5", "Undefined"], answer: "1", hints: ["Any number power 0", "Result is 1", "Applies to all non-zero numbers"] },
    { id: 56, kc: "KC43", difficulty: "easy", text: "Evaluate 10^0", options: ["1", "0", "10", "Undefined"], answer: "1", hints: ["Zero exponent rule", "Any number except 0", "Result equals 1"] },
    { id: 57, kc: "KC41", difficulty: "medium", text: "Simplify 4^3 × 2^3", options: ["8^3", "6^3", "8^6", "6^6"], answer: "8^3", hints: ["Same exponent", "Multiply bases", "(4×2)^3"] },
    { id: 58, kc: "KC42", difficulty: "medium", text: "Simplify 9^2 / 3^2", options: ["3^2", "2^2", "3^0", "6^2"], answer: "3^2", hints: ["Same exponent", "Divide bases", "(9/3)^2"] },
    { id: 59, kc: "KC43", difficulty: "medium", text: "Simplify 7^0 + 3^0", options: ["2", "1", "10", "0"], answer: "2", hints: ["Apply zero exponent rule", "7^0 = 1", "3^0 = 1"] },
    { id: 60, kc: "KC41", difficulty: "medium", text: "Simplify 2^4 × 3^4", options: ["6^4", "5^4", "6^8", "5^8"], answer: "6^4", hints: ["Same exponent", "Multiply bases", "(2×3)^4"] },
    { id: 61, kc: "KC42", difficulty: "medium", text: "Simplify 8^3 / 4^3", options: ["2^3", "4^3", "2^0", "32^3"], answer: "2^3", hints: ["Same exponent", "Divide bases", "(8/4)^3"] },
    { id: 62, kc: "KC44", difficulty: "difficult", text: "Simplify 5^3 × 2^3 × 4^3", options: ["40^3", "11^3", "40^9", "11^9"], answer: "40^3", hints: ["Same exponent", "Multiply bases together", "(5×2×4)^3"] },
    { id: 63, kc: "KC42", difficulty: "difficult", text: "Simplify 6^4 / 2^4", options: ["3^4", "4^4", "3^0", "12^4"], answer: "3^4", hints: ["Same exponent", "Divide bases", "(6/2)^4"] },
    { id: 64, kc: "KC43", difficulty: "difficult", text: "Simplify 3^0 × 7^0", options: ["1", "0", "21", "2"], answer: "1", hints: ["Apply zero exponent rule", "Each equals 1", "Multiply results"] },
    { id: 65, kc: "KC44", difficulty: "difficult", text: "Simplify 2^5 × 3^5 ÷ 6^5", options: ["1", "6^5", "1^5", "0"], answer: "1", hints: ["Combine numerator bases", "Apply division rule", "Same exponent rule"] },
    { id: 66, kc: "KC42", difficulty: "difficult", text: "Simplify 10^2 / 5^2", options: ["2^2", "5^2", "2^0", "50^2"], answer: "2^2", hints: ["Same exponent", "Divide bases", "(10/5)^2"] },
    { id: 67, kc: "KC44", difficulty: "very difficult", text: "Simplify 2^4 × 3^4 × 5^4", options: ["30^4", "10^4", "30^12", "900"], answer: "30^4", hints: ["Same exponent", "Multiply all bases", "(2×3×5)^4"] },
    { id: 68, kc: "KC42", difficulty: "very difficult", text: "Simplify 12^3 / 3^3", options: ["4^3", "9^3", "4^0", "36^3"], answer: "4^3", hints: ["Same exponent", "Divide bases", "(12/3)^3"] },
  
    // --- SUBTOPIC 5: STANDARD FORM ---
    { id: 69, kc: "KC52", difficulty: "easy", text: "Write 10,000 in standard form", options: ["1 × 10^4", "10 × 10^3", "1 × 10^5", "0.1 × 10^5"], answer: "1 × 10^4", hints: ["Move decimal after the first digit", "Count number of places", "Express as power of 10"] },
    { id: 70, kc: "KC51", difficulty: "easy", text: "Write 1000 in exponential form", options: ["10^3", "10^2", "1^3", "100^1"], answer: "10^3", hints: ["Count number of zeros", "Each zero corresponds to a power of 10", "Write 10^3"] },
    { id: 71, kc: "KC52", difficulty: "easy", text: "Convert 5000 into standard form", options: ["5 × 10^3", "50 × 10^2", "0.5 × 10^4", "5 × 10^4"], answer: "5 × 10^3", hints: ["Move decimal to form 5", "Count places moved", "Write 5 × 10^3"] },
    { id: 72, kc: "KC52", difficulty: "easy", text: "Convert 30,000 to standard form", options: ["3 × 10^4", "30 × 10^3", "0.3 × 10^5", "3 × 10^5"], answer: "3 × 10^4", hints: ["Move decimal after first digit", "Count shifts", "Write 3 × 10^4"] },
    { id: 73, kc: "KC52", difficulty: "easy", text: "Express 70,000 in standard form", options: ["7 × 10^4", "70 × 10^3", "0.7 × 10^5", "7 × 10^5"], answer: "7 × 10^4", hints: ["Move decimal to form 7", "Count shifts", "Write 7 × 10^4"] },
    { id: 74, kc: "KC52", difficulty: "medium", text: "Convert 3,430,000 into standard form", options: ["3.43 × 10^6", "34.3 × 10^5", "3.43 × 10^7", "0.343 × 10^7"], answer: "3.43 × 10^6", hints: ["Move decimal after first digit", "Count digits shifted", "Write power of 10"] },
    { id: 75, kc: "KC52", difficulty: "medium", text: "Convert 45,000,000 to standard form", options: ["4.5 × 10^7", "45 × 10^6", "4.5 × 10^8", "0.45 × 10^8"], answer: "4.5 × 10^7", hints: ["Move decimal to create number between 1 and 10", "Count decimal shifts", "Write k × 10^n"] },
    { id: 76, kc: "KC52", difficulty: "medium", text: "Convert 120,000 to standard form", options: ["1.2 × 10^5", "12 × 10^4", "1.2 × 10^6", "0.12 × 10^6"], answer: "1.2 × 10^5", hints: ["Move decimal after first digit", "Count movements", "Express using 10^n"] },
    { id: 77, kc: "KC52", difficulty: "medium", text: "Convert 9,000,000 to standard form", options: ["9 × 10^6", "90 × 10^5", "0.9 × 10^7", "9 × 10^7"], answer: "9 × 10^6", hints: ["Move decimal after 9", "Count number of shifts", "Write 9 × 10^n"] },
    { id: 78, kc: "KC52", difficulty: "medium", text: "Convert 384,000,000 into standard form", options: ["3.84 × 10^8", "38.4 × 10^7", "3.84 × 10^9", "0.384 × 10^9"], answer: "3.84 × 10^8", hints: ["Move decimal to create number between 1 and 10", "Count movements", "Write as k × 10^n"] },
    { id: 79, kc: "KC51", difficulty: "difficult", text: "Convert 5985 to standard form", options: ["5.985 × 10^3", "59.85 × 10^2", "5.985 × 10^4", "0.5985 × 10^4"], answer: "5.985 × 10^3", hints: ["Move decimal after first digit", "Count places moved", "Write k × 10^n"] },
    { id: 80, kc: "KC52", difficulty: "difficult", text: "Convert 72,400,000 into standard form", options: ["7.24 × 10^7", "72.4 × 10^6", "7.24 × 10^8", "0.724 × 10^8"], answer: "7.24 × 10^7", hints: ["Move decimal to form 7.24", "Count decimal shifts", "Write exponent"] },
    { id: 81, kc: "KC53", difficulty: "difficult", text: "Convert 0.00045 into standard form", options: ["4.5 × 10^-4", "4.5 × 10^4", "0.45 × 10^-3", "45 × 10^-5"], answer: "4.5 × 10^-4", hints: ["Move decimal right", "Count shifts", "Exponent will be negative"] },
    { id: 82, kc: "KC53", difficulty: "difficult", text: "Convert 0.0062 to standard form", options: ["6.2 × 10^-3", "6.2 × 10^3", "0.62 × 10^-2", "62 × 10^-4"], answer: "6.2 × 10^-3", hints: ["Move decimal to form number between 1 and 10", "Count decimal moves", "Use negative exponent"] },
    { id: 83, kc: "KC52", difficulty: "difficult", text: "Convert 6,750,000 into standard form", options: ["6.75 × 10^6", "67.5 × 10^5", "6.75 × 10^7", "0.675 × 10^7"], answer: "6.75 × 10^6", hints: ["Move decimal after first digit", "Count movements", "Write k × 10^n"] },
    { id: 84, kc: "KC52", difficulty: "very difficult", text: "Convert 7,200,000,000 into standard form", options: ["7.2 × 10^9", "72 × 10^8", "7.2 × 10^10", "0.72 × 10^10"], answer: "7.2 × 10^9", hints: ["Move decimal after first digit", "Count decimal shifts", "Write power of 10"] },
    { id: 85, kc: "KC54", difficulty: "very difficult", text: "Express the distance 384,000,000 meters in standard form", options: ["3.84 × 10^8", "38.4 × 10^7", "3.84 × 10^9", "0.384 × 10^9"], answer: "3.84 × 10^8", hints: ["Move decimal after first digit", "Count decimal shifts", "Express using 10^n"] }
  ];