const mongoose = require('mongoose');
require('dotenv').config();

// 1. Define Schemas (Based on your App logic)
const Question = mongoose.model('Question', new mongoose.Schema({
    id: Number,
    kc_id: String,
    difficulty: String,
    question_text: String,
    options: [String],
    answer: String,
    hints: [String]
}));

const Content = mongoose.model('Content', new mongoose.Schema({
    kc_id: String,
    title: String,
    motivation: String,
    content: String
}));

// 2. Learning Content (Domain Module)
const kcsData = [
    {
        kc_id: "KC1",
        title: "Unit 1: The Big Number Headache 🤯",
        motivation: "Counting zeros is boring, slow, and confusing. Large numbers like the distance to the Sun (150,000,000,000 meters) are hard to read and compare.",
        content: "Exponents provide a compact way to represent repeated multiplication. For example, 150,000,000,000 becomes 15x10^10."
    },
    {
        kc_id: "KC11",
        title: "Identify Base and Exponent",
        motivation: "Roohi writes down 10^4 but forgets which part is which. Labeling helps identify the shortcut's structure.",
        content: "The Base (Giant) is the number being multiplied. The Exponent (Boss) tells us how many times to multiply the base."
    },
    {
        kc_id: "KC12",
        title: "Repeated Multiplication",
        motivation: "Writing long strings of 5s is hard. Pari has a trick to 'shrink' this long line into a tiny box.",
        content: "If you see the same number multiplying itself, the number is the Base and the count is the Exponent. e.g., 2×2×2×2×2 = 2^5."
    },
    {
        kc_id: "KC13",
        title: "Expanding Exponential Expressions",
        motivation: "What if we want to see the full multiplication again? We look at the Exponent and let the Base repeat itself.",
        content: "Expanded form is writing a power as a long string of multiplication. a^3b^2 = a × a × a × b × b."
    },
    {
        kc_id: "KC14",
        title: "Finding the Value",
        motivation: "If your pocket has 2^5 rupees, how much money is that actually? Evaluation solves the multiplication puzzle.",
        content: "Step 1: Expand. Step 2: Multiply. Note: a^1 = a, 1^n = 1, and a^0 = 1 (Zero Hero rule)."
    },
    {
        kc_id: "KC15",
        title: "Express Numbers as Powers",
        motivation: "Roohi has the number 72 and wants to find its exponential 'code'.",
        content: "Use Prime Factorization. Divide by smallest primes (2, 3, 5...) until you reach 1. 72 = 2^3 × 3^2."
    },
    {
        kc_id: "KC21",
        title: "Evaluate Powers of Negative Numbers",
        motivation: "The Magic Mirror shows that multiplying negatives can turn positive or stay negative.",
        content: "Follow 'Expand and Multiply'. Be careful: (-3)^2 = 9, but (-3)^3 = -27."
    },
    {
        kc_id: "KC22",
        title: "Determine the Sign",
        motivation: "Pari noticed a shortcut for negative bases without solving the whole problem.",
        content: "Even Exponent = Positive (+). Odd Exponent = Negative (-)."
    },
    {
        kc_id: "KC23",
        title: "Writing Variable Products",
        motivation: "Using the same logic for numbers, we can apply 'Shrink' rules to letters (variables).",
        content: "Count the repetitions for each variable separately. a × a × a × b × b = a^3b^2."
    },
    {
        kc_id: "KC24",
        title: "The Bracket Trap! (-a)^n vs -a^n",
        motivation: "Is (-3)^2 the same as -3^2? Roohi found a trick question!",
        content: "In (-3)^2, the minus is squared (9). In -3^2, the minus stands outside and only 3 is squared (-9)."
    },
    {
        kc_id: "KC31",
        title: "The Multiplication Law",
        motivation: "Avoid long multiplication when bases are the same.",
        content: "Rule: a^m × a^n = a^(m+n)."
    },
    {
        kc_id: "KC32",
        title: "The Division Law",
        motivation: "The opposite of multiplication is division; hence we do the opposite to exponents.",
        content: "Rule: a^m ÷ a^n = a^(m-n)."
    },
    {
        kc_id: "KC33",
        title: "Power of a Power",
        motivation: "What happens when a power itself is raised to another power?",
        content: "Rule: (a^m)^n = a^(m × n)."
    },
    {
        kc_id: "KC34",
        title: "Combine Multiple Same-Base Operations",
        motivation: "Using all superpowers together when problems have both multiplication and division.",
        content: "Solve brackets/division first, then multiplication, keeping the base constant."
    },
    {
        kc_id: "KC41",
        title: "Different Bases, Same Exponent",
        motivation: "When bases are different but the exponents match, they can group together.",
        content: "Rule: a^m × b^m = (ab)^m."
    },
    {
        kc_id: "KC42",
        title: "Bases Divide",
        motivation: "Bases divide under one common exponent if the powers match.",
        content: "Rule: a^m ÷ b^m = (a/b)^m."
    },
    {
        kc_id: "KC43",
        title: "The Zero Exponent Rule",
        motivation: "Does 3^0 mean 0? Roohi explores the Number 1 magic.",
        content: "Rule: Any non-zero number raised to the power 0 is always 1."
    },
    {
        kc_id: "KC44",
        title: "Combine Multiple Bases with Same Exponent",
        motivation: "Handling variables and numbers together in complex groups.",
        content: "Group same exponents first, then apply multiplication/division rules."
    },
    {
        kc_id: "KC51",
        title: "The Anatomy of Standard Form",
        motivation: "A way to write giant numbers using a small decimal and a power of 10.",
        content: "Form: m × 10^n where 1 ≤ m < 10."
    },
    {
        kc_id: "KC52",
        title: "Converting Large Numbers",
        motivation: "To turn a big number into Standard Form, we make the decimal 'jump'.",
        content: "Move decimal to the left until one digit remains. The jump count is the exponent."
    },
    {
        kc_id: "KC53",
        title: "Comparing Using Standard Form",
        motivation: "Which is heavier? Earth (5.97 × 10^24) or Uranus (8.68 × 10^25)?",
        content: "Compare the Power (exponent) first. Higher exponent = larger number."
    },
    {
        kc_id: "KC54",
        title: "Interpreting Standard Form",
        motivation: "Converting a scientific note back to a 'real' number.",
        content: "Positive exponent tells you how many places to move the decimal to the right."
    }
];

// 3. Question Bank 
const questionBank = [
    // KC11 Questions
    { id: 1, kc_id: "KC11", difficulty: "easy", question_text: "In 3^4, what is the base?", options: ["3", "4", "7", "12"], answer: "3", hints: ["Base is the number being multiplied repeatedly", "Look at the number written normally (not as power)", "Base = 3"] },
    { id: 2, kc_id: "KC11", difficulty: "easy", question_text: "In 5^2, exponent = ______", options: ["5", "2", "Dummy", "Dummy"], answer: "2", hints: ["Exponent tells how many times base repeats", "Look at the small raised number", "Exponent = 2"] },
    { id: 3, kc_id: "KC11", difficulty: "easy", question_text: "Identify base in 10^3:", options: ["3", "10", "30", "1000"], answer: "10", hints: ["Base is the number being raised", "Ignore exponent and focus on main number", "Base = 10"] },
    { id: 4, kc_id: "KC11", difficulty: "easy", question_text: "In 7^1, base = ______", options: ["7", "1", "Dummy", "Dummy"], answer: "7", hints: ["Even if exponent is 1, base stays same", "Look at the number before exponent", "Base = 7"] },
    { id: 5, kc_id: "KC11", difficulty: "easy", question_text: "In 2^5, exponent is:", options: ["2", "5", "10", "32"], answer: "5", hints: ["Exponent is how many times multiplication occurs", "Look at superscript", "Exponent = 5"] },
    { id: 6, kc_id: "KC11", difficulty: "medium", question_text: "In (−3)^2, base is:", options: ["-3", "3", "2", "-2"], answer: "-3", hints: ["Sign inside bracket belongs to base", "Consider entire bracket as base", "Base = -3"] },
    { id: 7, kc_id: "KC11", difficulty: "medium", question_text: "In 4^0, exponent = ______", options: ["4", "0", "Dummy", "Dummy"], answer: "0", hints: ["Exponent can be zero", "Identify superscript", "Exponent = 0"] },
    { id: 8, kc_id: "KC11", difficulty: "medium", question_text: "In (5)^3, identify base:", options: ["3", "5", "15", "125"], answer: "5", hints: ["Parentheses don’t change base", "Look inside brackets", "Base = 5"] },
    { id: 9, kc_id: "KC11", difficulty: "medium", question_text: "In 1^7, base = ______", options: ["1", "7", "Dummy", "Dummy"], answer: "1", hints: ["Base can be 1", "Identify main number", "Base = 1"] },
    { id: 10, kc_id: "KC11", difficulty: "medium", question_text: "In (2×3)^2, base is:", options: ["2", "3", "6", "2×3"], answer: "2×3", hints: ["Entire expression can be base", "Look inside brackets", "Base = 2×3"] },
    { id: 11, kc_id: "KC11", difficulty: "hard", question_text: "In(4^2)^3, outer exponent is:", options: ["2", "3", "4", "6"], answer: "3", hints: ["Nested exponents have multiple layers", "Focus on outermost exponent", "Outer exponent = 3"] },
    { id: 12, kc_id: "KC11", difficulty: "hard", question_text: "In (7^3)^2, base of the outer power = ______", options: ["7", "3", "7^3", "Dummy"], answer: "7^3", hints: ["Entire inner expression becomes base", "Treat inner exponent as one unit", "Base = 7^3"] },
    { id: 13, kc_id: "KC11", difficulty: "hard", question_text: "In -5^2, base is:", options: ["-5", "5", "-25", "2"], answer: "5", hints: ["Without brackets, exponent applies only to 5", "Order of operations matters", "Base = 5"] },
    { id: 14, kc_id: "KC11", difficulty: "hard", question_text: "In (-2)^4, exponent = ______", options: ["-2", "4", "Dummy", "Dummy"], answer: "4", hints: ["Exponent applies to whole bracket", "Look at superscript", "Exponent = 4"] },
    { id: 15, kc_id: "KC11", difficulty: "hard", question_text: "In (10^0)^5, base of outer expression is:", options: ["10", "0", "10^0", "5"], answer: "10^0", hints: ["Inner expression acts as base", "Identify grouping", "Base = 10^0"] },
    { id: 16, kc_id: "KC11", difficulty: "very difficult", question_text: "In − (3^2), base is:", options: ["-3", "3", "-9", "2"], answer: "3", hints: ["Negative sign outside is NOT part of base", "Focus only inside exponent", "Base = 3"] },
    { id: 17, kc_id: "KC11", difficulty: "very difficult", question_text: "In ((2^3)^4)^5, base of the outermost power = ______", options: ["2^3", "(2^3)^4", "2", "Dummy"], answer: "(2^3)^4", hints: ["Work layer by layer", "Identify outermost structure", "Base = (2^3)^4"] },
    { id: 18, kc_id: "KC11", difficulty: "very difficult", question_text: "Which expression has base = -2?", options: ["−2^3", "(-2)^3", "−(2^3)", "(-2^2)"], answer: "(-2)^3", hints: ["Only brackets include sign in base", "Check where negative is grouped", "Base = -2 only in (-2)^3"] },
    { id: 19, kc_id: "KC11", difficulty: "very difficult", question_text: "In ( (3x4)^2 )^3, exponent of outermost expression = ______", options: ["2", "3", "Dummy", "Dummy"], answer: "3", hints: ["Outermost exponent controls final power", "Look at last exponent applied", "Exponent = 3"] },
    { id: 20, kc_id: "KC11", difficulty: "very difficult", question_text: "In ( (2^2)^3 )^5, what is the base of the middle power?", options: ["2", "2^2", "(2^2)^3", "5"], answer: "2^2", hints: ["Identify hierarchy: inner → middle → outer", "Focus on second layer", "Middle base = 2^2"] },

    // KC12 Questions
    { id: 21, kc_id: "KC12", difficulty: "easy", question_text: "Convert: 2×2×2", options: ["2^2", "2^3", "3^2", "6^1"], answer: "2^3", hints: ["Count how many times the same number appears", "Base = repeated number, exponent = count", "2 appears 3 times → 2^3"] },
    { id: 22, kc_id: "KC12", difficulty: "easy", question_text: "5×5= ______", options: ["5^2", "2^5", "Dummy", "Dummy"], answer: "5^2", hints: ["Two same numbers → exponent 2", "Count number of 5s", "5^2"] },
    { id: 23, kc_id: "KC12", difficulty: "easy", question_text: "Convert: 4×4×4x4", options: ["4^2", "4^3", "4^4", "3^4"], answer: "4^4", hints: ["Exponent = number of repetitions", "Count 4s", "4 appears 4 times → 4^4"] },
    { id: 24, kc_id: "KC12", difficulty: "easy", question_text: "7×7= ______", options: ["7^2", "2^7", "Dummy", "Dummy"], answer: "7^2", hints: ["Same number multiplied repeatedly", "Count occurrences", "7^2"] },
    { id: 25, kc_id: "KC12", difficulty: "easy", question_text: "Convert: 10×10", options: ["10^1", "10^2", "2^{10}", "20^1"], answer: "10^2", hints: ["Two same numbers → square", "Count terms", "10^2"] },
    { id: 26, kc_id: "KC12", difficulty: "medium", question_text: "Convert: 3×3×3×3×3", options: ["3^3", "3^4", "3^5", "5^3"], answer: "3^5", hints: ["Exponent = number of factors", "Count carefully", "5 terms → 3^5"] },
    { id: 27, kc_id: "KC12", difficulty: "medium", question_text: "8×8×8×8=______", options: ["8^4", "4^8", "Dummy", "Dummy"], answer: "8^4", hints: ["Repetition of same number", "Count 8s", "8^4"] },
    { id: 28, kc_id: "KC12", difficulty: "medium", question_text: "Convert: 2×2×3×3", options: ["2^2 x 3^2", "2^3", "6^4", "2^4 x 3^4"], answer: "2^2 x 3^2", hints: ["Different numbers → separate powers", "Group same numbers", "2^2 x 3^2"] },
    { id: 29, kc_id: "KC12", difficulty: "medium", question_text: "9×9×9= ______", options: ["9^3", "3^9", "Dummy", "Dummy"], answer: "9^3", hints: ["Count repetitions", "Base = 9", "9^3"] },
    { id: 30, kc_id: "KC12", difficulty: "medium", question_text: "Convert: 6×6×6×6", options: ["6^2", "6^3", "6^4", "24^1"], answer: "6^4", hints: ["Exponent equals number of factors", "Count 6s", "6^4"] },
    { id: 31, kc_id: "KC12", difficulty: "hard", question_text: "Convert: (−2)×(−2)×(−2)", options: ["−2^3", "(-2)^3", "2^3", "(-6)^1"], answer: "(-2)^3", hints: ["Negative sign is part of base", "Use brackets", "(-2)^3"] },
    { id: 32, kc_id: "KC12", difficulty: "hard", question_text: "(5×5×5×5×5×5) = ______", options: ["5^6", "6^5", "Dummy", "Dummy"], answer: "5^6", hints: ["Count carefully", "Number of terms = exponent", "5^6"] },
    { id: 33, kc_id: "KC12", difficulty: "hard", question_text: "Convert: −3×−3×−3×−3", options: ["(-3)^4", "-3^4", "3^4", "−12^1"], answer: "(-3)^4", hints: ["Each term is -3", "Include sign inside brackets", "(-3)^4"] },
    { id: 34, kc_id: "KC12", difficulty: "hard", question_text: "1×1×1×1×1= ______", options: ["1^5", "5^1", "Dummy", "Dummy"], answer: "1^5", hints: ["Base can be 1", "Count repetitions", "1^5"] },
    { id: 35, kc_id: "KC12", difficulty: "hard", question_text: "Convert: 10×10×10×10×10×10×10", options: ["10^5", "10^6", "10^7", "70^1"], answer: "10^7", hints: ["Count factors", "Carefully count 10s", "10^7"] },
    { id: 36, kc_id: "KC12", difficulty: "very difficult", question_text: "Convert: 2×2×2×2×3×3×3", options: ["2^4 × 3^3", "(2×3)^7", "6^7", "2^3 × 3^4"], answer: "2^4 × 3^3", hints: ["Different bases → separate exponents", "Group identical numbers", "2^4 × 3^3"] },
    { id: 37, kc_id: "KC12", difficulty: "very difficult", question_text: "(−4)×(−4)×(−4)×(−4)×(−4)= ______", options: ["(-4)^5", "4^5", "Dummy", "Dummy"], answer: "(-4)^5", hints: ["Negative base must be in brackets", "Count terms", "(-4)^5"] },
    { id: 38, kc_id: "KC12", difficulty: "very difficult", question_text: "Convert: 2×2×2×5×5", options: ["(2×5)^5", "2^3 × 5^2", "10^5", "2^2 × 5^3"], answer: "2^3 × 5^2", hints: ["Count each number separately", "Separate into groups", "2^3 × 5^2"] },
    { id: 39, kc_id: "KC12", difficulty: "very difficult", question_text: "3×3×3×3×3×3×3×3= ______", options: ["3^8", "8^3", "Dummy", "Dummy"], answer: "3^8", hints: ["Exponent = count", "Count carefully (avoid skipping)", "3^8"] },
    { id: 40, kc_id: "KC12", difficulty: "very difficult", question_text: "Convert: (2×2×2)×(2×2)", options: ["2^5", "2^6", "4^5", "2^3×2^2"], answer: "2^5", hints: ["Combine powers of same base", "Count total 2s", "5 twos → 2^5"] },

    // KC13 Questions
    { id: 41, kc_id: "KC13", difficulty: "easy", question_text: "Expand: 2^3", options: ["2 + 2 + 2", "2 × 2 × 2", "3 × 3", "6 × 1"], answer: "2 × 2 × 2", hints: ["Exponent means repeated multiplication", "Write 2 three times", "2×2×2"] },
    { id: 42, kc_id: "KC13", difficulty: "easy", question_text: "5^2 = ______", options: ["5×5", "5+5", "Dummy", "Dummy"], answer: "5×5", hints: ["Exponent = number of factors", "Write 5 twice", "5×5"] },
    { id: 43, kc_id: "KC13", difficulty: "easy", question_text: "Expand: 3^4", options: ["3 × 4", "3 + 3 + 3 + 3", "3 × 3 × 3 × 3", "4 × 4 × 4"], answer: "3 × 3 × 3 × 3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 44, kc_id: "KC13", difficulty: "easy", question_text: "7^1 = ______", options: ["7", "7×1", "Dummy", "Dummy"], answer: "7", hints: ["Power 1 means single copy", "Write base once", "7"] },
    { id: 45, kc_id: "KC13", difficulty: "easy", question_text: "Expand: 10^2", options: ["10 + 10", "10 × 2", "10 × 10", "100 × 1"], answer: "10 × 10", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 46, kc_id: "KC13", difficulty: "medium", question_text: "Expand: (−2)^3", options: ["-2 × -2 × -2", "-2 × 3", "2 × 2 × 2", "-6 × -6"], answer: "-2 × -2 × -2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 47, kc_id: "KC13", difficulty: "medium", question_text: "4^3 = ______", options: ["4×4×4", "4+4+4", "Dummy", "Dummy"], answer: "4×4×4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 48, kc_id: "KC13", difficulty: "medium", question_text: "Expand: a^3", options: ["a + a + a", "a × a × a", "3a", "a³"], answer: "a × a × a", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 49, kc_id: "KC13", difficulty: "medium", question_text: "b^2 = ______", options: ["b×b", "b+b", "Dummy", "Dummy"], answer: "b×b", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 50, kc_id: "KC13", difficulty: "medium", question_text: "Expand: x^4", options: ["x × 4", "x × x × x × x", "4x", "x + x + x + x"], answer: "x × x × x × x", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 51, kc_id: "KC13", difficulty: "hard", question_text: "Expand: (3^2)^2", options: ["3 × 3 × 3 × 3", "3 × 3", "9 × 9", "Both A and C"], answer: "Both A and C", hints: ["Expand inner first", "3^2 = 3×3, then square again", "3×3×3×3"] },
    { id: 52, kc_id: "KC13", difficulty: "hard", question_text: "Expand: a^2 b^3 = ______", options: ["a×a×b×b×b", "ab×ab×ab", "Dummy", "Dummy"], answer: "a×a×b×b×b", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 53, kc_id: "KC13", difficulty: "hard", question_text: "Expand: −2^3", options: ["(-2) × (-2) × (-2)", "-(2 × 2 × 2)", "-2 × -2 × -2", "2 × 2 × 2"], answer: "-(2 × 2 × 2)", hints: ["No brackets → exponent applies only to 2", "Expand 2³ first", "-(2×2×2)"] },
    { id: 54, kc_id: "KC13", difficulty: "hard", question_text: "Expand: (xy)^3 = ______", options: ["x×y×x×y×x×y", "x×y×3", "Dummy", "Dummy"], answer: "x×y×x×y×x×y", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 55, kc_id: "KC13", difficulty: "hard", question_text: "Expand: (−a)^2", options: ["-a × -a", "a × a", "-a²", "Both A and B"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 56, kc_id: "KC13", difficulty: "very difficult", question_text: "Expand: (2^3)^3", options: ["2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2", "(2 × 2 × 2) × (2 × 2 × 2) × (2 × 2 × 2)", "2⁹", "All of the above"], answer: "All of the above", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 57, kc_id: "KC13", difficulty: "very difficult", question_text: "Expand: (a^2 b)^3 = ______", options: ["a×a×b×a×a×b×a×a×b", "a×b×a×b×a×b", "Dummy", "Dummy"], answer: "a×a×b×a×a×b×a×a×b", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 58, kc_id: "KC13", difficulty: "very difficult", question_text: "Which is correct expansion of (ab)^2?", options: ["a²b²", "a × b × a × b", "a × a × b × b", "Both B and C"], answer: "Both B and C", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 59, kc_id: "KC13", difficulty: "very difficult", question_text: "Expand: (3a)^2 = ______", options: ["3×a×3×a", "3×a×2", "Dummy", "Dummy"], answer: "3×a×3×a", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 60, kc_id: "KC13", difficulty: "very difficult", question_text: "Expand: (−3x)^3", options: ["-3x × -3x × -3x", "- (3x × 3x × 3x)", "(-3) × x × (-3) × x × (-3) × x", "All of the above"], answer: "All of the above", hints: ["Dummy", "Dummy", "Dummy"] },

    // KC14 Questions
    { id: 61, kc_id: "KC14", difficulty: "easy", question_text: "Evaluate: ( 2^3 )", options: ["6", "8", "9", "5"], answer: "8", hints: ["Multiply 2 three times", " (2×2×2) ", "8"] },
    { id: 62, kc_id: "KC14", difficulty: "easy", question_text: "( 5^2 = ) ______", options: ["25", "10", "Dummy", "Dummy"], answer: "25", hints: ["Square means multiply twice", " (5×5) ", "25"] },
    { id: 63, kc_id: "KC14", difficulty: "easy", question_text: "Evaluate: ( 3^2 )", options: ["6", "9", "5", "8"], answer: "9", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 64, kc_id: "KC14", difficulty: "easy", question_text: "( 10^2 = ) ______", options: ["100", "20", "Dummy", "Dummy"], answer: "100", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 65, kc_id: "KC14", difficulty: "easy", question_text: "Evaluate: ( 4^2 )", options: ["8", "16", "6", "12"], answer: "16", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 66, kc_id: "KC14", difficulty: "medium", question_text: "Evaluate: ( 2^4 )", options: ["8", "12", "16", "32"], answer: "16", hints: ["Multiply repeatedly", " (2×2×2×2) ", "16"] },
    { id: 67, kc_id: "KC14", difficulty: "medium", question_text: "( 3^3 = ) ______", options: ["27", "9", "Dummy", "Dummy"], answer: "27", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 68, kc_id: "KC14", difficulty: "medium", question_text: "Evaluate: ( 5^3 )", options: ["15", "25", "125", "75"], answer: "125", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 69, kc_id: "KC14", difficulty: "medium", question_text: "( 6^2 = ) ______", options: ["36", "12", "Dummy", "Dummy"], answer: "36", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 70, kc_id: "KC14", difficulty: "medium", question_text: "Evaluate: ( 1^5 )", options: ["5", "1", "0", "Cannot determine"], answer: "1", hints: ["1 multiplied repeatedly stays 1", " (1×1×1×1×1) ", "1"] },
    { id: 71, kc_id: "KC14", difficulty: "hard", question_text: "Evaluate: ( (-2)^3 )", options: ["8", "-8", "6", "-6"], answer: "-8", hints: ["Odd exponent → negative result", " ((-2)×(-2)×(-2)) ", "-8"] },
    { id: 72, kc_id: "KC14", difficulty: "hard", question_text: "( (-3)^2 = ) ______", options: ["9", "-9", "Dummy", "Dummy"], answer: "9", hints: ["Even exponent → positive result", " ((-3)×(-3)) ", "9"] },
    { id: 73, kc_id: "KC14", difficulty: "hard", question_text: "Evaluate: ( -2^3 )", options: ["-8", "8", "-6", "6"], answer: "-8", hints: ["No brackets → exponent applies first", " (2^3 = 8), then apply minus ", "-8"] },
    { id: 74, kc_id: "KC14", difficulty: "hard", question_text: "( 0^5 = ) ______", options: ["0", "5", "Dummy", "Dummy"], answer: "0", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 75, kc_id: "KC14", difficulty: "hard", question_text: "Evaluate: ( (-1)^4 )", options: ["-1", "1", "4", "0"], answer: "1", hints: ["Even power of -1 is +1", "Multiply -1 four times", "1"] },
    { id: 76, kc_id: "KC14", difficulty: "very difficult", question_text: "Evaluate: ( (2^3)^2 )", options: ["16", "32", "64", "8"], answer: "64", hints: ["Power of a power multiplies exponents", " (2^{3×2}) ", " (2^6 = 64) "] },
    { id: 77, kc_id: "KC14", difficulty: "very difficult", question_text: "Evaluate: ( ( -2 )^4 = ) ______", options: ["16", "-16", "Dummy", "Dummy"], answer: "16", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 78, kc_id: "KC14", difficulty: "very difficult", question_text: "Evaluate: ( (3^2) \\times (2^2) )", options: ["36", "25", "12", "18"], answer: "36", hints: ["Evaluate each power first", " (9×4) ", "36"] },
    { id: 79, kc_id: "KC14", difficulty: "very difficult", question_text: "Evaluate: ( 10^0 = ) ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Any non-zero number to power 0 is 1", "Use rule (a^0 = 1)", "1"] },
    { id: 80, kc_id: "KC14", difficulty: "very difficult", question_text: "Evaluate: ( ( -1 )^5 )", options: ["1", "-1", "5", "0"], answer: "-1", hints: ["Odd power → stays negative", "Multiply -1 five times", "-1"] },

    // KC15 Questions
    { id: 81, kc_id: "KC15", difficulty: "easy", question_text: "Express 8 as a power of 2:", options: ["(2^2)", "(2^3)", "(2^4)", "(4^2)"], answer: "(2^3)", hints: ["Break number into repeated multiplication", "(8 = 2×2×2)", "(2^3)"] },
    { id: 82, kc_id: "KC15", difficulty: "easy", question_text: "( 16 = ) ______", options: ["2^4", "4^2", "Both", "Dummy"], answer: "2^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 83, kc_id: "KC15", difficulty: "easy", question_text: "Express 9 as a power:", options: ["(2^3)", "(3^2)", "(9^1)", "(3^3)"], answer: "(3^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 84, kc_id: "KC15", difficulty: "easy", question_text: "( 25 = ) ______", options: ["5^2", "2^5", "Dummy", "Dummy"], answer: "5^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 85, kc_id: "KC15", difficulty: "easy", question_text: "Express 27 as a power:", options: ["(3^2)", "(3^3)", "(9^2)", "(2^5)"], answer: "(3^3)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 86, kc_id: "KC15", difficulty: "medium", question_text: "Express 64 as a power of 2:", options: ["(2^5)", "(2^6)", "(4^3)", "Both B and C"], answer: "Both B and C", hints: ["A number can have multiple power forms", "Try different bases", " (64 = 2^6 = 4^3) "] },
    { id: 87, kc_id: "KC15", difficulty: "medium", question_text: "( 81 = ) ______", options: ["3^4", "9^2", "Both", "Dummy"], answer: "3^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 88, kc_id: "KC15", difficulty: "medium", question_text: "Express 125 as a power:", options: ["(5^2)", "(5^3)", "(25^2)", "(3^5)"], answer: "(5^3)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 89, kc_id: "KC15", difficulty: "medium", question_text: "( 32 = ) ______", options: ["2^5", "5^2", "Dummy", "Dummy"], answer: "2^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 90, kc_id: "KC15", difficulty: "medium", question_text: "Which is correct representation of 100?", options: ["(10^2)", "(2^5)", "(5^3)", "(4^3)"], answer: "(10^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 91, kc_id: "KC15", difficulty: "hard", question_text: "Express 256 as a power of 2:", options: ["(2^6)", "(2^7)", "(2^8)", "(4^3)"], answer: "(2^8)", hints: ["Keep dividing by 2", "Count number of divisions", " (256 = 2^8) "] },
    { id: 92, kc_id: "KC15", difficulty: "hard", question_text: "( 243 = ) ______", options: ["3^5", "5^3", "Dummy", "Dummy"], answer: "3^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 93, kc_id: "KC15", difficulty: "hard", question_text: "Express 36 as a power:", options: ["(6^2)", "(2^6)", "(3^4)", "(4^3)"], answer: "(6^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 94, kc_id: "KC15", difficulty: "hard", question_text: "( 1 = ) ______", options: ["a^0", "0^a", "Dummy", "Dummy"], answer: "a^0", hints: ["Any non-zero number to power 0 is 1", "Recall exponent rule", " (a^0 = 1) "] },
    { id: 95, kc_id: "KC15", difficulty: "hard", question_text: "Express 49 as a power:", options: ["(7^2)", "(2^5)", "(5^2)", "(3^4)"], answer: "(7^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 96, kc_id: "KC15", difficulty: "very difficult", question_text: "Which of the following are correct representations of 64?", options: ["(2^6)", "(4^3)", "(8^2)", "All of the above"], answer: "All of the above", hints: ["Same number can have different bases", "Express in multiple ways", " (64 = 2^6 = 4^3 = 8^2) "] },
    { id: 97, kc_id: "KC15", difficulty: "very difficult", question_text: "Express 1000 as product of powers of primes:", options: ["(2^3 × 5^3)", "(10^3)", "Dummy", "Dummy"], answer: "(2^3 × 5^3)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 98, kc_id: "KC15", difficulty: "very difficult", question_text: "Which is correct for 72?", options: ["(2^3 × 3^2)", "(6^2)", "(3^3 × 2^2)", "(2^2 × 3^3)"], answer: "(2^3 × 3^2)", hints: ["Use prime factorization", "Break into primes", " (72 = 2^3 × 3^2) "] },
    { id: 99, kc_id: "KC15", difficulty: "very difficult", question_text: "Express 512 as a power of 2: ______", options: ["2^9", "9^2", "Dummy", "Dummy"], answer: "2^9", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 100, kc_id: "KC15", difficulty: "very difficult", question_text: "Which number cannot be written as a power of 2?", options: ["16", "32", "48", "64"], answer: "48", hints: ["Powers of 2 contain only factor 2", "Check divisibility", "48 has factor 3 → not pure power of 2"] },

    // KC21 Questions
    { id: 101, kc_id: "KC21", difficulty: "easy", question_text: "Evaluate: ( (-2)^2 )", options: ["-4", "4", "-2", "2"], answer: "4", hints: ["Even power → result is positive", " ((-2)×(-2)) ", "4"] },
    { id: 102, kc_id: "KC21", difficulty: "easy", question_text: "( (-3)^2 = ) ______", options: ["9", "-9", "Dummy", "Dummy"], answer: "9", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 103, kc_id: "KC21", difficulty: "easy", question_text: "Evaluate: ( (-1)^3 )", options: ["1", "-1", "3", "0"], answer: "-1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 104, kc_id: "KC21", difficulty: "easy", question_text: "( (-5)^1 = ) ______", options: ["-5", "5", "Dummy", "Dummy"], answer: "-5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 105, kc_id: "KC21", difficulty: "easy", question_text: "Evaluate: ( (-4)^2 )", options: ["-16", "16", "-8", "8"], answer: "16", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 106, kc_id: "KC21", difficulty: "medium", question_text: "Evaluate: ( (-2)^3 )", options: ["8", "-8", "6", "-6"], answer: "-8", hints: ["Odd power → result is negative", "Multiply stepwise", "-8"] },
    { id: 107, kc_id: "KC21", difficulty: "medium", question_text: "( (-3)^3 = ) ______", options: ["-27", "27", "Dummy", "Dummy"], answer: "-27", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 108, kc_id: "KC21", difficulty: "medium", question_text: "Evaluate: ( (-1)^4 )", options: ["-1", "1", "4", "0"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 109, kc_id: "KC21", difficulty: "medium", question_text: "( (-10)^2 = ) ______", options: ["100", "-100", "Dummy", "Dummy"], answer: "100", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 110, kc_id: "KC21", difficulty: "medium", question_text: "Evaluate: ( (-1)^5 )", options: ["1", "-1", "5", "0"], answer: "-1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 111, kc_id: "KC21", difficulty: "hard", question_text: "Evaluate: ( -2^2 )", options: ["4", "-4", "-2", "2"], answer: "-4", hints: ["Exponent applies before negative sign", " (2^2 = 4), then apply minus ", "-4"] },
    { id: 112, kc_id: "KC21", difficulty: "hard", question_text: "( (-2)^4 = ) ______", options: ["16", "-16", "Dummy", "Dummy"], answer: "16", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 113, kc_id: "KC21", difficulty: "hard", question_text: "Evaluate: ( (-3)^5 )", options: ["243", "-243", "81", "-81"], answer: "-243", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 114, kc_id: "KC21", difficulty: "hard", question_text: "( (-1)^{10} = ) ______", options: ["1", "-1", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 115, kc_id: "KC21", difficulty: "hard", question_text: "Evaluate: ( (-4)^3 )", options: ["64", "-64", "16", "-16"], answer: "-64", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 116, kc_id: "KC21", difficulty: "very difficult", question_text: "Evaluate: ( (-2)^3 + (-2)^2 )", options: ["12", "-12", "-4", "4"], answer: "-4", hints: ["Evaluate each power separately", "Compute both terms", " -8 + 4 = -4 "] },
    { id: 117, kc_id: "KC21", difficulty: "very difficult", question_text: "Evaluate: ( (-3)^2 × (-3)^3 = ) ______", options: ["-243", "243", "Dummy", "Dummy"], answer: "-243", hints: ["Same base → add exponents", " ( (-3)^5 ) ", "-243"] },
    { id: 118, kc_id: "KC21", difficulty: "very difficult", question_text: "Evaluate: ( (-1)^{99} )", options: ["1", "-1", "99", "0"], answer: "-1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 119, kc_id: "KC21", difficulty: "very difficult", question_text: "Evaluate: ( (-2)^4 × (-2)^2 = ) ______", options: ["64", "-64", "Dummy", "Dummy"], answer: "64", hints: ["Even powers → positive", " ( (-2)^6 ) ", "64"] },
    { id: 120, kc_id: "KC21", difficulty: "very difficult", question_text: "Which expression gives a negative result?", options: ["( (-2)^4 )", "( (-2)^6 )", "( (-2)^5 )", "( (-2)^2 )"], answer: "( (-2)^5 )", hints: ["Odd exponent → negative", "Identify odd exponent", "5 is odd → negative"] },

    // KC22 Questions
    { id: 121, kc_id: "KC22", difficulty: "easy", question_text: "What is the sign of ( (-2)^2 )?", options: ["Positive", "Negative", "Zero", "Cannot determine"], answer: "Positive", hints: ["Even exponent → positive result", "Check if exponent is even", "2 is even → positive"] },
    { id: 122, kc_id: "KC22", difficulty: "easy", question_text: "Sign of ( (-3)^3 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Negative", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 123, kc_id: "KC22", difficulty: "easy", question_text: "What is the sign of ( (-5)^4 )?", options: ["Positive", "Negative", "Zero", "Depends on value"], answer: "Positive", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 124, kc_id: "KC22", difficulty: "easy", question_text: "Sign of ( (-7)^1 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Negative", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 125, kc_id: "KC22", difficulty: "easy", question_text: "What is the sign of ( (-1)^2 )?", options: ["Positive", "Negative", "Zero", "Undefined"], answer: "Positive", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 126, kc_id: "KC22", difficulty: "medium", question_text: "What is the sign of ( (-2)^5 )?", options: ["Positive", "Negative", "Zero", "Undefined"], answer: "Negative", hints: ["Odd exponent → negative", "Check parity of exponent", "5 is odd → negative"] },
    { id: 127, kc_id: "KC22", difficulty: "medium", question_text: "Sign of ( (-10)^6 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Positive", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 128, kc_id: "KC22", difficulty: "medium", question_text: "What is the sign of ( (-1)^7 )?", options: ["Positive", "Negative", "Zero", "Cannot determine"], answer: "Negative", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 129, kc_id: "KC22", difficulty: "medium", question_text: "Sign of ( (-8)^3 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Negative", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 130, kc_id: "KC22", difficulty: "medium", question_text: "What is the sign of ( (-1)^{100} )?", options: ["Positive", "Negative", "Zero", "Undefined"], answer: "Positive", hints: ["Even exponent → positive", "Check if exponent is even", "100 is even → positive"] },
    { id: 131, kc_id: "KC22", difficulty: "hard", question_text: "What is the sign of ( -2^4 )?", options: ["Positive", "Negative", "Zero", "Cannot determine"], answer: "Negative", hints: ["Exponent applies before negative sign", "Evaluate (2^4) then apply minus", "Result is negative"] },
    { id: 132, kc_id: "KC22", difficulty: "hard", question_text: "Sign of ( (-2)^4 × (-2)^3 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Negative", hints: ["Multiply signs", "Even → positive, odd → negative", "(+) × (−) = −"] },
    { id: 133, kc_id: "KC22", difficulty: "hard", question_text: "What is the sign of ( (-3)^2 × (-4)^2 )?", options: ["Positive", "Negative", "Zero", "Undefined"], answer: "Positive", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 134, kc_id: "KC22", difficulty: "hard", question_text: "Sign of ( (-5)^3 × (-2)^3 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Positive", hints: ["Negative × Negative = Positive", "Both are odd → both negative", "(−) × (−) = +"] },
    { id: 135, kc_id: "KC22", difficulty: "hard", question_text: "What is the sign of ( (-1)^9 × (-1)^2 )?", options: ["Positive", "Negative", "Zero", "Cannot determine"], answer: "Negative", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 136, kc_id: "KC22", difficulty: "very difficult", question_text: "What is the sign of ( (-2)^3 + (-2)^4 )?", options: ["Positive", "Negative", "Zero", "Cannot determine"], answer: "Positive", hints: ["Evaluate signs separately", "(-2)^3 is negative, (-2)^4 is positive", "-8 + 16 = +8 → Positive"] },
    { id: 137, kc_id: "KC22", difficulty: "very difficult", question_text: "Sign of ( (-3)^2 × (-3)^3 × (-3)^4 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Negative", hints: ["Count number of negative factors", "Odd number of negatives → negative", "1 odd exponent → negative"] },
    { id: 138, kc_id: "KC22", difficulty: "very difficult", question_text: "What is the sign of ( (-1)^{101} × (-1)^{100} )?", options: ["Positive", "Negative", "Zero", "Undefined"], answer: "Negative", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 139, kc_id: "KC22", difficulty: "very difficult", question_text: "Sign of ( (-2)^6 × (-2)^2 × (-2)^4 ) = ______", options: ["Positive", "Negative", "Dummy", "Dummy"], answer: "Positive", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 140, kc_id: "KC22", difficulty: "very difficult", question_text: "Which expression is always positive?", options: ["( (-a)^n ), where n is odd", "( (-a)^n ), where n is even", "( -a^n ), where n is even", "( (-a)^1 )"], answer: "( (-a)^n ), where n is even", hints: ["Even exponent removes negative sign", "Check parity", "Even exponent → positive"] },

    // KC23 Questions
    { id: 141, kc_id: "KC23", difficulty: "easy", question_text: "Write in exponential form: ( a × a × a )", options: ["( a^2 )", "( a^3 )", "( 3a )", "( a+a+a )"], answer: "( a^3 )", hints: ["Count repetitions of same variable", "3 a’s → exponent 3", "(a^3)"] },
    { id: 142, kc_id: "KC23", difficulty: "easy", question_text: "( b × b = ) ______", options: ["b^2", "2b", "Dummy", "Dummy"], answer: "b^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 143, kc_id: "KC23", difficulty: "easy", question_text: "Write: ( x × x × x × x )", options: ["( x^3 )", "( x^4 )", "( 4x )", "( x×4 )"], answer: "( x^4 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 144, kc_id: "KC23", difficulty: "easy", question_text: "( y × y × y = ) ______", options: ["y^3", "3y", "Dummy", "Dummy"], answer: "y^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 145, kc_id: "KC23", difficulty: "easy", question_text: "Write: ( m × m )", options: ["( m^1 )", "( m^2 )", "( 2m )", "( m×2 )"], answer: "( m^2 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 146, kc_id: "KC23", difficulty: "medium", question_text: "Write in exponential form: ( a × a × b × b )", options: ["( a^2 b^2 )", "( (ab)^2 )", "( a^4 )", "( b^4 )"], answer: "( a^2 b^2 )", hints: ["Group same variables", "Count separately for a and b", "(a^2 b^2)"] },
    { id: 147, kc_id: "KC23", difficulty: "medium", question_text: "( x × x × y × y × y = ) ______", options: ["x^2 y^3", "(xy)^5", "Dummy", "Dummy"], answer: "x^2 y^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 148, kc_id: "KC23", difficulty: "medium", question_text: "Write: ( p × p × p × q )", options: ["( p^3 q )", "( p q^3 )", "( (pq)^3 )", "( p^4 q )"], answer: "( p^3 q )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 149, kc_id: "KC23", difficulty: "medium", question_text: "( a × a × a × b × b = ) ______", options: ["a^3 b^2", "a^2 b^3", "Dummy", "Dummy"], answer: "a^3 b^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 150, kc_id: "KC23", difficulty: "medium", question_text: "Write: ( x × y × x × y )", options: ["( x^2 y^2 )", "( (xy)^2 )", "Both A and B", "( x^4 y^4 )"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 151, kc_id: "KC23", difficulty: "hard", question_text: "Write: ( (-a) × (-a) × (-a) )", options: ["( -a^3 )", "( (-a)^3 )", "( a^3 )", "( (-a)^2 )"], answer: "( (-a)^3 )", hints: ["Entire base is (-a)", "Keep brackets", "((-a)^3)"] },
    { id: 152, kc_id: "KC23", difficulty: "hard", question_text: "( (-x) × (-x) × (-x) × (-x) = ) ______", options: ["(-x)^4", "x^4", "Dummy", "Dummy"], answer: "(-x)^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 153, kc_id: "KC23", difficulty: "hard", question_text: "Write: ( a × a × a × a × a × a )", options: ["( a^5 )", "( a^6 )", "( 6a )", "( a×6 )"], answer: "( a^6 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 154, kc_id: "KC23", difficulty: "hard", question_text: "( m × m × n × n × n × n = ) ______", options: ["m^2 n^4", "(mn)^6", "Dummy", "Dummy"], answer: "m^2 n^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 155, kc_id: "KC23", difficulty: "hard", question_text: "Write: ( x × x × x × y × y × z )", options: ["( x^3 y^2 z )", "( x^2 y^3 z )", "( x^3 y z^2 )", "( x^6 y^2 z )"], answer: "( x^3 y^2 z )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 156, kc_id: "KC23", difficulty: "very difficult", question_text: "Write: ( a × a × b × b × b × c × c × c × c )", options: ["( a^2 b^3 c^4 )", "( a^3 b^2 c^4 )", "( a^2 b^4 c^3 )", "( abc^9 )"], answer: "( a^2 b^3 c^4 )", hints: ["Count each variable separately", "Group identical variables", "(a^2 b^3 c^4)"] },
    { id: 157, kc_id: "KC23", difficulty: "very difficult", question_text: "( (x × x × y × y × y)^2 = ) ______", options: ["(x^2 y^3)^2", "x^4 y^6", "Dummy", "Dummy"], answer: "(x^2 y^3)^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 158, kc_id: "KC23", difficulty: "very difficult", question_text: "Write: ( a × b × a × b × a × b )", options: ["( a^3 b^3 )", "( (ab)^3 )", "Both A and B", "( a^6 b^6 )"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 159, kc_id: "KC23", difficulty: "very difficult", question_text: "( (-2x) × (-2x) × (-2x) = ) ______", options: ["(-2x)^3", "-8x^3", "Dummy", "Dummy"], answer: "(-2x)^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 160, kc_id: "KC23", difficulty: "very difficult", question_text: "Which is correct representation of ( x × x × y × y )?", options: ["( x^2 y^2 )", "( (xy)^2 )", "Both A and B", "( x^4 y^4 )"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },

    // KC24 Questions
    { id: 161, kc_id: "KC24", difficulty: "easy", question_text: "Which is correct for ( (-2)^2 )?", options: ["-4", "4", "-2", "2"], answer: "4", hints: ["Negative inside bracket is squared", "Multiply (-2) × (-2)", "4"] },
    { id: 162, kc_id: "KC24", difficulty: "easy", question_text: "( -2^2 = ) ______", options: ["-4", "4", "Dummy", "Dummy"], answer: "-4", hints: ["Exponent applies before negative sign", "(2^2 = 4), then apply minus", "-4"] },
    { id: 163, kc_id: "KC24", difficulty: "easy", question_text: "Which is equal to ( (-3)^2 )?", options: ["-9", "9", "-6", "6"], answer: "9", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 164, kc_id: "KC24", difficulty: "easy", question_text: "( (-4)^2 = ) ______", options: ["16", "-16", "Dummy", "Dummy"], answer: "16", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 165, kc_id: "KC24", difficulty: "easy", question_text: "Which is equal to ( -3^2 )?", options: ["9", "-9", "-6", "6"], answer: "-9", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 166, kc_id: "KC24", difficulty: "medium", question_text: "Which expression gives 16?", options: ["( (-4)^2 )", "( -4^2 )", "Both A and B", "None"], answer: "( (-4)^2 )", hints: ["Brackets matter", "Evaluate both", "Only ((-4)^2 = 16)"] },
    { id: 167, kc_id: "KC24", difficulty: "medium", question_text: "( -5^2 = ) ______", options: ["-25", "25", "Dummy", "Dummy"], answer: "-25", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 168, kc_id: "KC24", difficulty: "medium", question_text: "Which is equal to ( (-2)^3 )?", options: ["-8", "8", "-6", "6"], answer: "-8", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 169, kc_id: "KC24", difficulty: "medium", question_text: "( (-2)^4 = ) ______", options: ["16", "-16", "Dummy", "Dummy"], answer: "16", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 170, kc_id: "KC24", difficulty: "medium", question_text: "Which expression is always positive (for non-zero (a))?", options: ["( (-a)^2 )", "( -a^2 )", "Both", "None"], answer: "( (-a)^2 )", hints: ["Even exponent removes negative", "Compare both forms", "((-a)^2 = positive), (-a^2 = negative)"] },
    { id: 171, kc_id: "KC24", difficulty: "hard", question_text: "Evaluate: ( (-3)^2 ) vs ( -3^2 )", options: ["Both equal", "First is positive, second is negative", "First negative, second positive", "Both negative"], answer: "First is positive, second is negative", hints: ["Brackets change meaning", "Evaluate separately", "(9) vs (-9)"] },
    { id: 172, kc_id: "KC24", difficulty: "hard", question_text: "Difference between ( (-2)^2 ) and ( -2^2 ) is ______", options: ["8", "0", "Dummy", "Dummy"], answer: "8", hints: ["Compute both", "(4 - (-4))", "8"] },
    { id: 173, kc_id: "KC24", difficulty: "hard", question_text: "Which equals -16?", options: ["( (-4)^2 )", "( -4^2 )", "( (-4)^3 )", "Both B and C"], answer: "Both B and C", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 174, kc_id: "KC24", difficulty: "hard", question_text: "( (-3)^4 - (-3)^2 = ) ______", options: ["72", "81", "Dummy", "Dummy"], answer: "72", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 175, kc_id: "KC24", difficulty: "hard", question_text: "Which is greater?", options: ["( (-2)^4 )", "( -2^4 )", "Both equal", "Cannot compare"], answer: "( (-2)^4 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 176, kc_id: "KC24", difficulty: "very difficult", question_text: "Evaluate: ( (-2)^3 + -2^3 )", options: ["0", "-16", "16", "-8"], answer: "-16", hints: ["Treat separately", " ( (-2)^3 = -8), ( -2^3 = -8) ", "-8 + -8 = -16"] },
    { id: 177, kc_id: "KC24", difficulty: "very difficult", question_text: "( (-a)^2 + (-a)^3 = ) ______ (in terms of sign only)", options: ["Positive + Negative", "Zero", "Dummy", "Dummy"], answer: "Positive + Negative", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 178, kc_id: "KC24", difficulty: "very difficult", question_text: "Which is correct?", options: ["( (-a)^2 = -a^2 )", "( (-a)^2 = a^2 )", "( -a^2 = a^2 )", "None"], answer: "( (-a)^2 = a^2 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 179, kc_id: "KC24", difficulty: "very difficult", question_text: "( (-2)^5 - -2^5 = ) ______", options: ["0", "-64", "Dummy", "Dummy"], answer: "0", hints: ["Both evaluate same", "Compute each", "-32 - (-32) = 0"] },
    { id: 180, kc_id: "KC24", difficulty: "very difficult", question_text: "Which statement is TRUE?", options: ["( (-a)^n = -a^n ) for all n", "They are equal only when n is odd", "They are equal only when n is even", "They are never equal"], answer: "They are equal only when n is odd", hints: ["Check parity", "Try examples", "Odd exponent → same"] },

    // KC31 Questions
    { id: 181, kc_id: "KC31", difficulty: "easy", question_text: "Simplify: ( 2^3 × 2^2 )", options: ["(2^5)", "(2^6)", "(4^5)", "(2^1)"], answer: "(2^5)", hints: ["Same base → add exponents", "(3 + 2)", "(2^5)"] },
    { id: 182, kc_id: "KC31", difficulty: "easy", question_text: "( 5^2 × 5^3 = ) ______", options: ["5^5", "5^6", "Dummy", "Dummy"], answer: "5^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 183, kc_id: "KC31", difficulty: "easy", question_text: "Simplify: ( 3^4 × 3^1 )", options: ["(3^5)", "(3^4)", "(3^3)", "(9^4)"], answer: "(3^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 184, kc_id: "KC31", difficulty: "easy", question_text: "( 7^2 × 7^2 = ) ______", options: ["7^4", "49^2", "Dummy", "Dummy"], answer: "7^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 185, kc_id: "KC31", difficulty: "easy", question_text: "Simplify: ( 10^3 × 10^2 )", options: ["(10^5)", "(10^6)", "(10^1)", "(100^5)"], answer: "(10^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 186, kc_id: "KC31", difficulty: "medium", question_text: "Simplify: ( 2^5 × 2^3 )", options: ["(2^15)", "(2^8)", "(4^8)", "(2^2)"], answer: "(2^8)", hints: ["Add exponents", "(5 + 3)", "(2^8)"] },
    { id: 187, kc_id: "KC31", difficulty: "medium", question_text: "( a^3 × a^4 = ) ______", options: ["a^7", "a^{12}", "Dummy", "Dummy"], answer: "a^7", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 188, kc_id: "KC31", difficulty: "medium", question_text: "Simplify: ( x^2 × x^5 )", options: ["(x^10)", "(x^7)", "(x^3)", "(x^2)"], answer: "(x^7)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 189, kc_id: "KC31", difficulty: "medium", question_text: "( b^6 × b^1 = ) ______", options: ["b^7", "b^6", "Dummy", "Dummy"], answer: "b^7", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 190, kc_id: "KC31", difficulty: "medium", question_text: "Which is correct?", options: ["( a^m × a^n = a^{mn} )", "( a^m × a^n = a^{m+n} )", "( a^m × a^n = a^{m-n} )", "( a^m × a^n = (a^m)^n )"], answer: "( a^m × a^n = a^{m+n} )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 191, kc_id: "KC31", difficulty: "hard", question_text: "Simplify: ( 4^2 × 4^3 )", options: ["(4^5)", "(4^6)", "(16^5)", "(4^1)"], answer: "(4^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 192, kc_id: "KC31", difficulty: "hard", question_text: "( (-3)^2 × (-3)^3 = ) ______", options: ["(-3)^5", "3^5", "Dummy", "Dummy"], answer: "(-3)^5", hints: ["Same base rule applies to negatives", "Add exponents", "((-3)^5)"] },
    { id: 193, kc_id: "KC31", difficulty: "hard", question_text: "Simplify: ( a^0 × a^5 )", options: ["(a^0)", "(a^5)", "(a^1)", "(a^4)"], answer: "(a^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 194, kc_id: "KC31", difficulty: "hard", question_text: "( p^3 × p^2 × p^4 = ) ______", options: ["p^9", "p^{24}", "Dummy", "Dummy"], answer: "p^9", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 195, kc_id: "KC31", difficulty: "hard", question_text: "Simplify: ( (2^3 × 2^2) × 2^1 )", options: ["(2^6)", "(2^5)", "(2^3)", "(2^7)"], answer: "(2^6)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 196, kc_id: "KC31", difficulty: "very difficult", question_text: "Simplify: ( 3^2 × 3^4 × 3^5 )", options: ["(3^{11})", "(3^{10})", "(3^8)", "(3^{20})"], answer: "(3^{11})", hints: ["Add all exponents", "(2+4+5)", "(3^{11})"] },
    { id: 197, kc_id: "KC31", difficulty: "very difficult", question_text: "( a^2 × a^3 × a^4 × a^1 = ) ______", options: ["a^{10}", "a^9", "Dummy", "Dummy"], answer: "a^{10}", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 198, kc_id: "KC31", difficulty: "very difficult", question_text: "Simplify: ( 2^3 × 3^3 )", options: ["(6^3)", "(2^6)", "(3^6)", "Cannot simplify"], answer: "(6^3)", hints: ["Same exponent → multiply bases", "Apply (a^m × b^m = (ab)^m)", "(6^3)"] },
    { id: 199, kc_id: "KC31", difficulty: "very difficult", question_text: "( (-2)^2 × (-2)^2 × (-2)^2 = ) ______", options: ["(-2)^6", "64", "Dummy", "Dummy"], answer: "(-2)^6", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 200, kc_id: "KC31", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( x^2 × x^3 = x^5 )", "( y^4 × y^2 = y^6 )", "( a^3 × a^3 = a^6 )", "( b^2 × b^3 = b^5 × b^0 )"], answer: "( b^2 × b^3 = b^5 × b^0 )", hints: ["Check exponent addition rule", "Compare both sides", "RHS = (b^5), LHS = (b^5), but expression unnecessarily altered"] },

    // KC32 Questions
    { id: 201, kc_id: "KC32", difficulty: "easy", question_text: "Simplify: ( 2^5 \\div 2^2 )", options: ["(2^10)", "(2^3)", "(2^7)", "(2^2)"], answer: "(2^3)", hints: ["Same base → subtract exponents", "(5 - 2)", "(2^3)"] },
    { id: 202, kc_id: "KC32", difficulty: "easy", question_text: "( 5^4 \\div 5^2 = ) ______", options: ["5^2", "5^6", "Dummy", "Dummy"], answer: "5^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 203, kc_id: "KC32", difficulty: "easy", question_text: "Simplify: ( 3^6 \\div 3^3 )", options: ["(3^9)", "(3^3)", "(3^2)", "(9^3)"], answer: "(3^3)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 204, kc_id: "KC32", difficulty: "easy", question_text: "( 7^3 \\div 7^1 = ) ______", options: ["7^2", "7^4", "Dummy", "Dummy"], answer: "7^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 205, kc_id: "KC32", difficulty: "easy", question_text: "Simplify: ( 10^5 \\div 10^4 )", options: ["(10^1)", "(10^9)", "(10^4)", "(10^5)"], answer: "(10^1)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 206, kc_id: "KC32", difficulty: "medium", question_text: "Simplify: ( 2^8 \\div 2^5 )", options: ["(2^3)", "(2^13)", "(2^2)", "(2^40)"], answer: "(2^3)", hints: ["Subtract exponents", "(8 - 5)", "(2^3)"] },
    { id: 207, kc_id: "KC32", difficulty: "medium", question_text: "( a^7 \\div a^4 = ) ______", options: ["a^3", "a^{11}", "Dummy", "Dummy"], answer: "a^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 208, kc_id: "KC32", difficulty: "medium", question_text: "Simplify: ( x^9 \\div x^3 )", options: ["(x^6)", "(x^{27})", "(x^3)", "(x^12)"], answer: "(x^6)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 209, kc_id: "KC32", difficulty: "medium", question_text: "( b^5 \\div b^5 = ) ______", options: ["b^0 = 1", "0", "Dummy", "Dummy"], answer: "b^0 = 1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 210, kc_id: "KC32", difficulty: "medium", question_text: "Which is correct?", options: ["( a^m \\div a^n = a^{m+n} )", "( a^m \\div a^n = a^{m-n} )", "( a^m \\div a^n = a^{mn} )", "( a^m \\div a^n = (a^m)^n )"], answer: "( a^m \\div a^n = a^{m-n} )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 211, kc_id: "KC32", difficulty: "hard", question_text: "Simplify: ( 4^6 \\div 4^2 )", options: ["(4^4)", "(4^8)", "(16^4)", "(4^3)"], answer: "(4^4)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 212, kc_id: "KC32", difficulty: "hard", question_text: "( (-3)^5 \\div (-3)^2 = ) ______", options: ["(-3)^3", "3^3", "Dummy", "Dummy"], answer: "(-3)^3", hints: ["Same rule applies to negative base", "Subtract exponents", "((-3)^3)"] },
    { id: 213, kc_id: "KC32", difficulty: "hard", question_text: "Simplify: ( a^5 \\div a^5 )", options: ["(a^1)", "(a^0)", "(1)", "Both B and C"], answer: "Both B and C", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 214, kc_id: "KC32", difficulty: "hard", question_text: "( p^9 \\div p^3 \\div p^2 = ) ______", options: ["p^4", "p^{14}", "Dummy", "Dummy"], answer: "p^4", hints: ["Subtract stepwise", "(9 - 3 - 2)", "(p^4)"] },
    { id: 215, kc_id: "KC32", difficulty: "hard", question_text: "Simplify: ( (2^6 \\div 2^2) \\div 2^2 )", options: ["(2^2)", "(2^6)", "(2^4)", "(2^8)"], answer: "(2^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 216, kc_id: "KC32", difficulty: "very difficult", question_text: "Simplify: ( 3^8 \\div 3^3 \\div 3^2 )", options: ["(3^3)", "(3^4)", "(3^5)", "(3^6)"], answer: "(3^3)", hints: ["Subtract all exponents", "(8 - 3 - 2)", "(3^3)"] },
    { id: 217, kc_id: "KC32", difficulty: "very difficult", question_text: "( a^{10} \\div a^4 \\div a^3 = ) ______", options: ["a^3", "a^7", "Dummy", "Dummy"], answer: "a^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 218, kc_id: "KC32", difficulty: "very difficult", question_text: "Simplify: ( 2^5 \\div 3^5 )", options: ["( (2/3)^5 )", "(2^0)", "(3^0)", "Cannot simplify"], answer: "( (2/3)^5 )", hints: ["Same exponent → divide bases", "Apply ((a^m)/(b^m) = (a/b)^m)", "((2/3)^5)"] },
    { id: 219, kc_id: "KC32", difficulty: "very difficult", question_text: "( (-2)^6 \\div (-2)^4 = ) ______", options: ["(-2)^2 = 4", "0", "Dummy", "Dummy"], answer: "(-2)^2 = 4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 220, kc_id: "KC32", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( x^7 \\div x^2 = x^5 )", "( y^6 \\div y^3 = y^3 )", "( a^5 \\div a^2 = a^3 )", "( b^4 \\div b^2 = b^8 )"], answer: "( b^4 \\div b^2 = b^8 )", hints: ["Division subtracts exponents", "Check exponent change", "(4 - 2 = 2), not 8"] },

    // KC33 Questions
    { id: 221, kc_id: "KC33", difficulty: "easy", question_text: "Simplify: ( (2^3)^2 )", options: ["(2^5)", "(2^6)", "(4^3)", "(2^1)"], answer: "(2^6)", hints: ["Multiply exponents", "(3 × 2)", "(2^6)"] },
    { id: 222, kc_id: "KC33", difficulty: "easy", question_text: "( (5^2)^3 = ) ______", options: ["5^6", "5^5", "Dummy", "Dummy"], answer: "5^6", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 223, kc_id: "KC33", difficulty: "easy", question_text: "Simplify: ( (3^2)^4 )", options: ["(3^6)", "(3^8)", "(3^4)", "(9^4)"], answer: "(3^8)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 224, kc_id: "KC33", difficulty: "easy", question_text: "( (7^1)^5 = ) ______", options: ["7^5", "7^6", "Dummy", "Dummy"], answer: "7^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 225, kc_id: "KC33", difficulty: "easy", question_text: "Simplify: ( (10^2)^2 )", options: ["(10^4)", "(10^3)", "(100^2)", "Both A and C"], answer: "Both A and C", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 226, kc_id: "KC33", difficulty: "medium", question_text: "Simplify: ( (2^4)^3 )", options: ["(2^7)", "(2^{12})", "(4^3)", "(2^1)"], answer: "(2^{12})", hints: ["Multiply exponents", "(4 × 3)", "(2^{12})"] },
    { id: 227, kc_id: "KC33", difficulty: "medium", question_text: "( (a^3)^2 = ) ______", options: ["a^6", "a^5", "Dummy", "Dummy"], answer: "a^6", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 228, kc_id: "KC33", difficulty: "medium", question_text: "Simplify: ( (x^5)^2 )", options: ["(x^7)", "(x^{10})", "(x^3)", "(x^5)"], answer: "(x^{10})", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 229, kc_id: "KC33", difficulty: "medium", question_text: "( (b^2)^4 = ) ______", options: ["b^8", "b^6", "Dummy", "Dummy"], answer: "b^8", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 230, kc_id: "KC33", difficulty: "medium", question_text: "Which is correct?", options: ["( (a^m)^n = a^{m+n} )", "( (a^m)^n = a^{mn} )", "( (a^m)^n = a^{m-n} )", "( (a^m)^n = (a^n)^m )"], answer: "( (a^m)^n = a^{mn} )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 231, kc_id: "KC33", difficulty: "hard", question_text: "Simplify: ( (4^3)^2 )", options: ["(4^5)", "(4^6)", "(16^3)", "Both B and C"], answer: "Both B and C", hints: ["Multiply exponents", "(3 × 2 = 6)", "(4^6 = (4^2)^3 = 16^3)"] },
    { id: 232, kc_id: "KC33", difficulty: "hard", question_text: "( (-2^3)^2 = ) ______", options: ["64", "-64", "Dummy", "Dummy"], answer: "64", hints: ["Be careful with brackets", "First evaluate inside", "((-8)^2 = 64)"] },
    { id: 233, kc_id: "KC33", difficulty: "hard", question_text: "Simplify: ( (a^2)^5 )", options: ["(a^7)", "(a^{10})", "(a^3)", "(a^5)"], answer: "(a^{10})", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 234, kc_id: "KC33", difficulty: "hard", question_text: "( (x^3)^4 × x^2 = ) ______", options: ["x^{14}", "x^{24}", "Dummy", "Dummy"], answer: "x^{14}", hints: ["Combine laws", "(3×4 + 2)", "(x^{12+2} = x^{14})"] },
    { id: 235, kc_id: "KC33", difficulty: "hard", question_text: "Simplify: ( (2^2)^3 × 2^1 )", options: ["(2^7)", "(2^6)", "(2^5)", "(2^8)"], answer: "(2^7)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 236, kc_id: "KC33", difficulty: "very difficult", question_text: "Simplify: ( (3^2)^4 × (3^3)^2 )", options: ["(3^{14})", "(3^{12})", "(3^{20})", "(3^8)"], answer: "(3^{14})", hints: ["Apply power law separately", "(2×4 + 3×2)", "(8 + 6 = 14)"] },
    { id: 237, kc_id: "KC33", difficulty: "very difficult", question_text: "( (a^2)^3 × (a^4)^2 = ) ______", options: ["a^{14}", "a^{12}", "Dummy", "Dummy"], answer: "a^{14}", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 238, kc_id: "KC33", difficulty: "very difficult", question_text: "Simplify: ( (2^3)^4 \\div 2^5 )", options: ["(2^7)", "(2^{12})", "(2^9)", "(2^5)"], answer: "(2^7)", hints: ["Combine laws", "(3×4 - 5)", "(12 - 5 = 7)"] },
    { id: 239, kc_id: "KC33", difficulty: "very difficult", question_text: "( ((x^2)^3)^2 = ) ______", options: ["x^{12}", "x^7", "Dummy", "Dummy"], answer: "x^{12}", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 240, kc_id: "KC33", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( (a^2)^3 = a^6 )", "( (b^4)^2 = b^8 )", "( (x^3)^2 = x^5 )", "( (y^2)^5 = y^{10} )"], answer: "( (x^3)^2 = x^5 )", hints: ["Multiply exponents", "Check each", "(3×2 = 6), not 5"] },

    // KC34 Questions
    { id: 241, kc_id: "KC34", difficulty: "easy", question_text: "Simplify: ( 2^3 × 2^2 × 2^1 )", options: ["(2^5)", "(2^6)", "(2^7)", "(2^3)"], answer: "(2^6)", hints: ["Add all exponents", "(3+2+1)", "(2^6)"] },
    { id: 242, kc_id: "KC34", difficulty: "easy", question_text: "( 5^2 × 5^3 × 5^1 = ) ______", options: ["5^6", "5^5", "Dummy", "Dummy"], answer: "5^6", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 243, kc_id: "KC34", difficulty: "easy", question_text: "Simplify: ( 3^6 ÷ 3^2 )", options: ["(3^4)", "(3^8)", "(3^3)", "(3^2)"], answer: "(3^4)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 244, kc_id: "KC34", difficulty: "easy", question_text: "( 7^5 ÷ 7^3 = ) ______", options: ["7^2", "7^8", "Dummy", "Dummy"], answer: "7^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 245, kc_id: "KC34", difficulty: "easy", question_text: "Simplify: ( (2^2)^3 )", options: ["(2^5)", "(2^6)", "(2^8)", "(4^3)"], answer: "(2^6)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 246, kc_id: "KC34", difficulty: "medium", question_text: "Simplify: ( 2^3 × 2^2 ÷ 2^1 )", options: ["(2^4)", "(2^5)", "(2^6)", "(2^3)"], answer: "(2^4)", hints: ["Add then subtract", "(3+2-1)", "(2^4)"] },
    { id: 247, kc_id: "KC34", difficulty: "medium", question_text: "( a^5 × a^2 ÷ a^3 = ) ______", options: ["a^4", "a^{10}", "Dummy", "Dummy"], answer: "a^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 248, kc_id: "KC34", difficulty: "medium", question_text: "Simplify: ( (3^2)^3 × 3^1 )", options: ["(3^7)", "(3^6)", "(3^5)", "(3^9)"], answer: "(3^7)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 249, kc_id: "KC34", difficulty: "medium", question_text: "( b^8 ÷ b^3 × b^2 = ) ______", options: ["b^7", "b^{13}", "Dummy", "Dummy"], answer: "b^7", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 250, kc_id: "KC34", difficulty: "medium", question_text: "Simplify: ( x^4 × x^3 ÷ x^5 )", options: ["(x^2)", "(x^12)", "(x^7)", "(x^1)"], answer: "(x^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 251, kc_id: "KC34", difficulty: "hard", question_text: "Simplify: ( (2^3)^2 × 2^4 ÷ 2^3 )", options: ["(2^7)", "(2^8)", "(2^6)", "(2^9)"], answer: "(2^7)", hints: ["Combine laws stepwise", "(3×2 + 4 - 3)", "(6 + 4 - 3 = 7)"] },
    { id: 252, kc_id: "KC34", difficulty: "hard", question_text: "( (a^2)^3 × a^4 ÷ a^2 = ) ______", options: ["a^8", "a^{12}", "Dummy", "Dummy"], answer: "a^8", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 253, kc_id: "KC34", difficulty: "hard", question_text: "Simplify: ( 5^3 × 5^2 ÷ 5^5 )", options: ["(5^0)", "(5^5)", "(5^10)", "(5^1)"], answer: "(5^0)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 254, kc_id: "KC34", difficulty: "hard", question_text: "( (-2)^4 × (-2)^3 ÷ (-2)^5 = ) ______", options: ["(-2)^2 = 4", "0", "Dummy", "Dummy"], answer: "(-2)^2 = 4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 255, kc_id: "KC34", difficulty: "hard", question_text: "Simplify: ( (x^3)^2 × x^5 ÷ x^4 )", options: ["(x^7)", "(x^6)", "(x^8)", "(x^10)"], answer: "(x^7)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 256, kc_id: "KC34", difficulty: "very difficult", question_text: "Simplify: ( (3^2)^3 × 3^4 ÷ (3^3)^2 )", options: ["(3^4)", "(3^5)", "(3^6)", "(3^3)"], answer: "(3^4)", hints: ["Apply all laws", "(2×3 + 4 - (3×2))", "(6 + 4 - 6 = 4)"] },
    { id: 257, kc_id: "KC34", difficulty: "very difficult", question_text: "( (a^3)^2 × (a^2)^3 ÷ a^5 = ) ______", options: ["a^7", "a^1", "Dummy", "Dummy"], answer: "a^7", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 258, kc_id: "KC34", difficulty: "very difficult", question_text: "Simplify: ( 2^5 × 2^3 ÷ 2^4 × 2^2 )", options: ["(2^6)", "(2^8)", "(2^10)", "(2^4)"], answer: "(2^6)", hints: ["Left-to-right OR combine all", "(5+3-4+2)", "(2^6)"] },
    { id: 259, kc_id: "KC34", difficulty: "very difficult", question_text: "( ((x^2)^3)^2 × x^4 ÷ x^5 = ) ______", options: ["x^{11}", "x^7", "Dummy", "Dummy"], answer: "x^{11}", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 260, kc_id: "KC34", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( a^3 × a^2 ÷ a^4 = a^1 )", "( (b^2)^3 × b^1 ÷ b^2 = b^5 )", "( x^5 × x^3 ÷ x^4 = x^4 )", "( (y^2)^2 × y^3 ÷ y^2 = y^5 )"], answer: "( (b^2)^3 × b^1 ÷ b^2 = b^5 )", hints: ["Check exponent operations", "Compute exponent each time", "(6+1-2 = 5) → Actually correct → trap"] },

    // KC41 Questions
    { id: 261, kc_id: "KC41", difficulty: "easy", question_text: "Simplify: ( 2^3 × 3^3 )", options: ["(5^3)", "(6^3)", "(2^6)", "(3^6)"], answer: "(6^3)", hints: ["Same exponent → multiply bases", "(2×3 = 6)", "(6^3)"] },
    { id: 262, kc_id: "KC41", difficulty: "easy", question_text: "( 4^2 × 5^2 = ) ______", options: ["(20^2)", "9^2", "Dummy", "Dummy"], answer: "(20^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 263, kc_id: "KC41", difficulty: "easy", question_text: "Simplify: ( 3^4 × 2^4 )", options: ["(5^4)", "(6^4)", "(3^8)", "(2^8)"], answer: "(6^4)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 264, kc_id: "KC41", difficulty: "easy", question_text: "( a^2 × b^2 = ) ______", options: ["(ab)^2", "a^2b^2", "Dummy", "Dummy"], answer: "(ab)^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 265, kc_id: "KC41", difficulty: "easy", question_text: "Simplify: ( 10^3 × 2^3 )", options: ["(20^3)", "(12^3)", "(10^6)", "(2^6)"], answer: "(20^3)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 266, kc_id: "KC41", difficulty: "medium", question_text: "Simplify: ( 5^4 × 2^4 )", options: ["(7^4)", "(10^4)", "(5^8)", "(2^8)"], answer: "(10^4)", hints: ["Multiply bases", "(5×2)", "(10^4)"] },
    { id: 267, kc_id: "KC41", difficulty: "medium", question_text: "( x^3 × y^3 = ) ______", options: ["(xy)^3", "x^3y^3", "Dummy", "Dummy"], answer: "(xy)^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 268, kc_id: "KC41", difficulty: "medium", question_text: "Simplify: ( 6^2 × 3^2 )", options: ["(18^2)", "(9^2)", "(6^4)", "(3^4)"], answer: "(18^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 269, kc_id: "KC41", difficulty: "medium", question_text: "( p^5 × q^5 = ) ______", options: ["(pq)^5", "pq^10", "Dummy", "Dummy"], answer: "(pq)^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 270, kc_id: "KC41", difficulty: "medium", question_text: "Which is correct?", options: ["( a^m × b^m = a^{m+b} )", "( a^m × b^m = (ab)^m )", "( a^m × b^m = (a+b)^m )", "( a^m × b^m = a^b )"], answer: "( a^m × b^m = (ab)^m )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 271, kc_id: "KC41", difficulty: "hard", question_text: "Simplify: ( 4^3 × 5^3 )", options: ["(20^3)", "(9^3)", "(4^6)", "(5^6)"], answer: "(20^3)", hints: ["Same exponent → combine bases", "(4×5)", "(20^3)"] },
    { id: 272, kc_id: "KC41", difficulty: "hard", question_text: "( (2x)^3 = ) ______", options: ["2^3 × x^3", "6x", "Dummy", "Dummy"], answer: "2^3 × x^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 273, kc_id: "KC41", difficulty: "hard", question_text: "Simplify: ( (-2)^4 × 3^4 )", options: ["( (-6)^4 )", "( 6^4 )", "( -6^4 )", "( (-2×3)^4 )"], answer: "( 6^4 )", hints: ["B is simplest positive evaluation", "Dummy", "Dummy"] },
    { id: 274, kc_id: "KC41", difficulty: "hard", question_text: "( a^2 × b^2 × c^2 = ) ______", options: ["(abc)^2", "abc^6", "Dummy", "Dummy"], answer: "(abc)^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 275, kc_id: "KC41", difficulty: "hard", question_text: "Simplify: ( (2^2 × 3^2)^3 )", options: ["(6^5)", "(6^6)", "(2^6 × 3^6)", "Both B and C"], answer: "Both B and C", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 276, kc_id: "KC41", difficulty: "very difficult", question_text: "Simplify: ( 2^3 × 3^3 × 5^3 )", options: ["(10^3)", "(30^3)", "(6^3)", "(15^3)"], answer: "(30^3)", hints: ["Combine all bases", "(2×3×5)", "(30^3)"] },
    { id: 277, kc_id: "KC41", difficulty: "very difficult", question_text: "( x^4 × y^4 × z^4 = ) ______", options: ["(xyz)^4", "xyz^{12}", "Dummy", "Dummy"], answer: "(xyz)^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 278, kc_id: "KC41", difficulty: "very difficult", question_text: "Simplify: ( 2^3 × 3^2 )", options: ["(6^5)", "(6^3)", "Cannot combine", "(2^5 × 3^5)"], answer: "Cannot combine", hints: ["Exponents must be same", "Check exponent equality", "Cannot apply rule"] },
    { id: 279, kc_id: "KC41", difficulty: "very difficult", question_text: "( (-a)^3 × b^3 = ) ______", options: ["( -ab )^3", "ab^3", "Dummy", "Dummy"], answer: "( -ab )^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 280, kc_id: "KC41", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( 2^3 × 5^3 = 10^3 )", "( a^4 × b^4 = (ab)^4 )", "( 3^2 × 4^3 = (12)^5 )", "( x^5 × y^5 = (xy)^5 )"], answer: "( 3^2 × 4^3 = (12)^5 )", hints: ["Same exponent required", "Check exponent mismatch", "2 ≠ 3 → invalid"] },

    // KC42 Questions
    { id: 281, kc_id: "KC42", difficulty: "easy", question_text: "Simplify: ( \\frac{2^3}{3^3} )", options: ["( \\left(\\frac{2}{3}\\right)^3 )", "( 6^3 )", "( \\frac{2^6}{3^6} )", "Cannot simplify"], answer: "( \\left(\\frac{2}{3}\\right)^3 )", hints: ["Same exponent → divide bases", "(2 ÷ 3)", "((2/3)^3)"] },
    { id: 282, kc_id: "KC42", difficulty: "easy", question_text: "( \\frac{4^2}{5^2} = ) ______", options: ["(4/5)^2", "20^2", "Dummy", "Dummy"], answer: "(4/5)^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 283, kc_id: "KC42", difficulty: "easy", question_text: "Simplify: ( \\frac{6^4}{2^4} )", options: ["( 3^4 )", "( \\left(\\frac{6}{2}\\right)^4 )", "( 4^4 )", "Both A and B"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 284, kc_id: "KC42", difficulty: "easy", question_text: "( \\frac{a^3}{b^3} = ) ______", options: ["(a/b)^3", "a/b", "Dummy", "Dummy"], answer: "(a/b)^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 285, kc_id: "KC42", difficulty: "easy", question_text: "Simplify: ( \\frac{10^2}{2^2} )", options: ["( 5^2 )", "( \\left(\\frac{10}{2}\\right)^2 )", "( 20^2 )", "Both A and B"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 286, kc_id: "KC42", difficulty: "medium", question_text: "Simplify: ( \\frac{9^3}{3^3} )", options: ["( 3^3 )", "( \\left(\\frac{9}{3}\\right)^3 )", "( 6^3 )", "Both A and B"], answer: "Both A and B", hints: ["Same exponent → divide bases", "(9 ÷ 3 = 3)", "(3^3)"] },
    { id: 287, kc_id: "KC42", difficulty: "medium", question_text: "( \\frac{x^4}{y^4} = ) ______", options: ["(x/y)^4", "x/y", "Dummy", "Dummy"], answer: "(x/y)^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 288, kc_id: "KC42", difficulty: "medium", question_text: "Simplify: ( \\frac{8^2}{4^2} )", options: ["( 2^2 )", "( \\left(\\frac{8}{4}\\right)^2 )", "( 16^2 )", "Both A and B"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 289, kc_id: "KC42", difficulty: "medium", question_text: "( \\frac{p^5}{q^5} = ) ______", options: ["(p/q)^5", "p/q", "Dummy", "Dummy"], answer: "(p/q)^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 290, kc_id: "KC42", difficulty: "medium", question_text: "Which is correct?", options: ["( \\frac{a^m}{b^m} = a^{m-b} )", "( \\frac{a^m}{b^m} = \\left(\\frac{a}{b}\\right)^m )", "( \\frac{a^m}{b^m} = (a-b)^m )", "( \\frac{a^m}{b^m} = a^b )"], answer: "( \\frac{a^m}{b^m} = \\left(\\frac{a}{b}\\right)^m )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 291, kc_id: "KC42", difficulty: "hard", question_text: "Simplify: ( \\frac{12^3}{3^3} )", options: ["( 4^3 )", "( \\left(\\frac{12}{3}\\right)^3 )", "( 9^3 )", "Both A and B"], answer: "Both A and B", hints: ["Divide bases first", "(12 ÷ 3 = 4)", "(4^3)"] },
    { id: 292, kc_id: "KC42", difficulty: "hard", question_text: "( \\frac{(-6)^2}{3^2} = ) ______", options: ["(-2)^2", "4", "Both", "Dummy"], answer: "Both", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 293, kc_id: "KC42", difficulty: "hard", question_text: "Simplify: ( \\frac{a^4}{(2a)^4} )", options: ["( \\left(\\frac{1}{2}\\right)^4 )", "( \\frac{1}{2^4} )", "( \\left(\\frac{a}{2a}\\right)^4 )", "All of the above"], answer: "All of the above", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 294, kc_id: "KC42", difficulty: "hard", question_text: "( \\frac{x^3}{(2x)^3} = ) ______", options: ["(1/2)^3", "1/8", "Both", "Dummy"], answer: "Both", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 295, kc_id: "KC42", difficulty: "hard", question_text: "Simplify: ( \\frac{(3x)^2}{x^2} )", options: ["( 3^2 )", "( 9 )", "( \\left(\\frac{3x}{x}\\right)^2 )", "All of the above"], answer: "All of the above", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 296, kc_id: "KC42", difficulty: "very difficult", question_text: "Simplify: ( \\frac{2^3 × 3^3}{6^3} )", options: ["( 1 )", "( 6^3 )", "( (1)^3 )", "Both A and C"], answer: "Both A and C", hints: ["Combine numerator first", "( (2×3)^3 / 6^3 )", "(6^3/6^3 = 1)"] },
    { id: 297, kc_id: "KC42", difficulty: "very difficult", question_text: "( \\frac{x^4 y^4}{(xy)^4} = ) ______", options: ["1", "xy", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 298, kc_id: "KC42", difficulty: "very difficult", question_text: "Simplify: ( \\frac{2^3}{3^2} )", options: ["( \\left(\\frac{2}{3}\\right)^5 )", "Cannot combine", "( \\frac{6^5}{1} )", "( (2/3)^3 )"], answer: "Cannot combine", hints: ["Exponents must match", "Check exponent equality", "3 ≠ 2 → cannot apply rule"] },
    { id: 299, kc_id: "KC42", difficulty: "very difficult", question_text: "( \\frac{(-4)^3}{2^3} = ) ______", options: ["(-2)^3", "-8", "Both", "Dummy"], answer: "Both", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 300, kc_id: "KC42", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( \\frac{a^3}{b^3} = \\left(\\frac{a}{b}\\right)^3 )", "( \\frac{4^2}{2^2} = 2^2 )", "( \\frac{x^5}{y^5} = (x-y)^5 )", "( \\frac{6^4}{3^4} = 2^4 )"], answer: "( \\frac{x^5}{y^5} = (x-y)^5 )", hints: ["Division → ratio, not subtraction", "Compare rule", "Should be ((x/y)^5), not ((x-y)^5)"] },

    // KC43 Questions
    { id: 301, kc_id: "KC43", difficulty: "easy", question_text: "Evaluate: ( 5^0 )", options: ["0", "1", "5", "Cannot determine"], answer: "1", hints: ["Any non-zero number to power 0 is 1", "Apply rule directly", "1"] },
    { id: 302, kc_id: "KC43", difficulty: "easy", question_text: "( 10^0 = ) ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 303, kc_id: "KC43", difficulty: "easy", question_text: "Evaluate: ( 2^0 )", options: ["0", "2", "1", "Undefined"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 304, kc_id: "KC43", difficulty: "easy", question_text: "( 7^0 = ) ______", options: ["1", "7", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 305, kc_id: "KC43", difficulty: "easy", question_text: "Evaluate: ( (-3)^0 )", options: ["-1", "1", "0", "3"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 306, kc_id: "KC43", difficulty: "medium", question_text: "Evaluate: ( a^0 ), where ( a ≠ 0 )", options: ["0", "1", "a", "Undefined"], answer: "1", hints: ["Rule applies to all non-zero numbers", "No calculation needed", "1"] },
    { id: 307, kc_id: "KC43", difficulty: "medium", question_text: "( (-5)^0 = ) ______", options: ["1", "-1", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 308, kc_id: "KC43", difficulty: "medium", question_text: "Evaluate: ( (100)^0 )", options: ["100", "0", "1", "10"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 309, kc_id: "KC43", difficulty: "medium", question_text: "( (a/b)^0 = ) ______ (for (b \\neq 0))", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 310, kc_id: "KC43", difficulty: "medium", question_text: "Which is true?", options: ["( a^0 = 0 )", "( a^0 = 1 ) (for (a ≠ 0))", "( a^0 = a )", "Depends on a"], answer: "( a^0 = 1 ) (for (a ≠ 0))", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 311, kc_id: "KC43", difficulty: "hard", question_text: "Evaluate: ( 0^0 )", options: ["0", "1", "Undefined", "Cannot determine"], answer: "Undefined", hints: ["Rule does NOT apply for (a = 0)", "Recognize exception", "Undefined"] },
    { id: 312, kc_id: "KC43", difficulty: "hard", question_text: "( (2^5 ÷ 2^5) = ) ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Same base division gives (2^0)", "Apply division law", "(2^0 = 1)"] },
    { id: 313, kc_id: "KC43", difficulty: "hard", question_text: "Evaluate: ( (-2)^3 ÷ (-2)^3 )", options: ["0", "1", "-1", "2"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 314, kc_id: "KC43", difficulty: "hard", question_text: "x^7 ÷ x^7 = ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 315, kc_id: "KC43", difficulty: "hard", question_text: "Evaluate: ( (5^2)^0 )", options: ["25", "1", "0", "5"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 316, kc_id: "KC43", difficulty: "very difficult", question_text: "Evaluate: ( (2^3 × 3^2)^0 )", options: ["0", "1", "36", "8"], answer: "1", hints: ["Entire expression raised to 0", "Ignore inside value", "1"] },
    { id: 317, kc_id: "KC43", difficulty: "very difficult", question_text: "( (a^2 b^3)^0 = ) ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 318, kc_id: "KC43", difficulty: "very difficult", question_text: "Evaluate: ( \\frac{a^5}{a^5} )", options: ["0", "1", "a", "Undefined"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 319, kc_id: "KC43", difficulty: "very difficult", question_text: "( ((x^3)^2)^0 = ) ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 320, kc_id: "KC43", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( 2^0 = 1 )", "( (-5)^0 = 1 )", "( 0^0 = 1 )", "( a^0 = 1 ) (for (a ≠ 0))"], answer: "( 0^0 = 1 )", hints: ["Zero base is exception", "Check rule condition", "(0^0) is undefined"] },

    // KC44 Questions
    { id: 321, kc_id: "KC44", difficulty: "easy", question_text: "Simplify: ( 2^3 × 3^3 × 5^3 )", options: ["(10^3)", "(30^3)", "(6^3)", "(15^3)"], answer: "(30^3)", hints: ["Same exponent → multiply all bases", "(2×3×5)", "(30^3)"] },
    { id: 322, kc_id: "KC44", difficulty: "easy", question_text: "( a^2 × b^2 × c^2 = ) ______", options: ["(abc)^2", "abc^6", "Dummy", "Dummy"], answer: "(abc)^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 323, kc_id: "KC44", difficulty: "easy", question_text: "Simplify: ( 4^2 × 5^2 × 2^2 )", options: ["(40^2)", "(11^2)", "(20^2)", "(8^2)"], answer: "(40^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 324, kc_id: "KC44", difficulty: "easy", question_text: "( x^3 × y^3 × z^3 = ) ______", options: ["(xyz)^3", "xyz^9", "Dummy", "Dummy"], answer: "(xyz)^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 325, kc_id: "KC44", difficulty: "easy", question_text: "Simplify: ( 3^4 × 2^4 × 5^4 )", options: ["(10^4)", "(30^4)", "(15^4)", "(6^4)"], answer: "(30^4)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 326, kc_id: "KC44", difficulty: "medium", question_text: "Simplify: ( \\frac{6^3 × 2^3}{3^3} )", options: ["(4^3)", "(12^3)", "(2^3)", "(6^3)"], answer: "(4^3)", hints: ["Combine numerator and denominator", "((6×2)/3)", "(4^3)"] },
    { id: 327, kc_id: "KC44", difficulty: "medium", question_text: "( \\frac{a^4 × b^4}{c^4} = ) ______", options: ["(ab/c)^4", "abc", "Dummy", "Dummy"], answer: "(ab/c)^4", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 328, kc_id: "KC44", difficulty: "medium", question_text: "Simplify: ( 8^2 × 5^2 × 2^2 )", options: ["(80^2)", "(15^2)", "(40^2)", "(16^2)"], answer: "(80^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 329, kc_id: "KC44", difficulty: "medium", question_text: "( \\frac{x^5 × y^5 × z^5}{a^5} = ) ______", options: ["(xyz/a)^5", "xyz/a", "Dummy", "Dummy"], answer: "(xyz/a)^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 330, kc_id: "KC44", difficulty: "medium", question_text: "Which is correct?", options: ["( a^m × b^m × c^m = (a+b+c)^m )", "( a^m × b^m × c^m = (abc)^m )", "( a^m × b^m × c^m = a^{m+b+c} )", "( a^m × b^m × c^m = a^m b^m c )"], answer: "( a^m × b^m × c^m = (abc)^m )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 331, kc_id: "KC44", difficulty: "hard", question_text: "Simplify: ( 2^3 × 3^3 × 5^3 × 7^3 )", options: ["(17^3)", "(210^3)", "(105^3)", "(30^3)"], answer: "(210^3)", hints: ["Multiply all bases", "(2×3×5×7)", "(210^3)"] },
    { id: 332, kc_id: "KC44", difficulty: "hard", question_text: "( \\frac{a^3 × b^3 × c^3}{x^3 × y^3} = ) ______", options: ["(abc/xy)^3", "abc/xy", "Dummy", "Dummy"], answer: "(abc/xy)^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 333, kc_id: "KC44", difficulty: "hard", question_text: "Simplify: ( 2^3 × 3^2 × 5^3 )", options: ["(30^3)", "Cannot combine fully", "( (2×5)^3 × 3^2 )", "Both B and C"], answer: "Both B and C", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 334, kc_id: "KC44", difficulty: "hard", question_text: "( x^2 × y^2 × z^2 × w^2 = ) ______", options: ["(xyzw)^2", "x^2y^2z^2w^2", "Dummy", "Dummy"], answer: "(xyzw)^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 335, kc_id: "KC44", difficulty: "hard", question_text: "Simplify: ( \\frac{4^2 × 3^2 × 5^2}{2^2} )", options: ["(30^2)", "(60^2)", "(15^2)", "(120^2)"], answer: "(30^2)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 336, kc_id: "KC44", difficulty: "very difficult", question_text: "Simplify: ( \\frac{2^4 × 3^4 × 5^4}{6^4} )", options: ["(5^4)", "(10^4)", "(30^4)", "(1^4)"], answer: "(10^4)", hints: ["Combine numerator → divide denominator", "((2×3×5)/6)", "(10^4)"] },
    { id: 337, kc_id: "KC44", difficulty: "very difficult", question_text: "( \\frac{a^5 × b^5 × c^5 × d^5}{(ab)^5} = ) ______", options: ["(cd)^5", "abcd", "Dummy", "Dummy"], answer: "(cd)^5", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 338, kc_id: "KC44", difficulty: "very difficult", question_text: "Simplify: ( 2^3 × 3^3 × 5^2 )", options: ["(30^3)", "(150^3)", "Cannot fully combine", "( (2×3×5)^2 )"], answer: "Cannot fully combine", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 339, kc_id: "KC44", difficulty: "very difficult", question_text: "( \\frac{x^3 × y^3 × z^3}{(xy)^3} = ) ______", options: ["z^3", "1", "Dummy", "Dummy"], answer: "z^3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 340, kc_id: "KC44", difficulty: "very difficult", question_text: "Which is incorrect?", options: ["( 2^3 × 3^3 × 5^3 = 30^3 )", "( a^4 × b^4 × c^4 = (abc)^4 )", "( x^2 × y^2 × z^3 = (xyz)^5 )", "( \\frac{a^3 × b^3}{c^3} = \\left(\\frac{ab}{c}\\right)^3 )"], answer: "( x^2 × y^2 × z^3 = (xyz)^5 )", hints: ["Exponents must match", "Check exponent consistency", "2,2,3 → not equal"] },

    // KC51 Questions
    { id: 341, kc_id: "KC51", difficulty: "easy", question_text: "Which is in standard form?", options: ["( 12 × 10^3 )", "( 5 × 10^2 )", "( 0.5 × 10^4 )", "( 10 × 10^1 )"], answer: "( 5 × 10^2 )", hints: ["(k) must be between 1 and 10", "Check coefficient", "Only 5 satisfies (1 \\le k < 10)"] },
    { id: 342, kc_id: "KC51", difficulty: "easy", question_text: "In ( 3 × 10^4 ), (k = ) ______", options: ["3", "10", "Dummy", "Dummy"], answer: "3", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 343, kc_id: "KC51", difficulty: "easy", question_text: "Which is NOT in standard form?", options: ["( 2 × 10^5 )", "( 9 × 10^2 )", "( 11 × 10^3 )", "( 1 × 10^4 )"], answer: "( 11 × 10^3 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 344, kc_id: "KC51", difficulty: "easy", question_text: "In standard form, (k) must be ______ than 10", options: ["less", "greater", "Dummy", "Dummy"], answer: "less", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 345, kc_id: "KC51", difficulty: "easy", question_text: "Which satisfies standard form condition?", options: ["( 0.9 × 10^3 )", "( 1.5 × 10^2 )", "( 10 × 10^2 )", "( 15 × 10^1 )"], answer: "( 1.5 × 10^2 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 346, kc_id: "KC51", difficulty: "medium", question_text: "Which of the following is in standard form?", options: ["( 0.75 × 10^4 )", "( 7.5 × 10^3 )", "( 75 × 10^2 )", "( 0.075 × 10^5 )"], answer: "( 7.5 × 10^3 )", hints: ["(1 \\le k < 10)", "Check decimal placement", "7.5 is valid"] },
    { id: 347, kc_id: "KC51", difficulty: "medium", question_text: "In ( 8.2 × 10^6 ), exponent (n = ) ______", options: ["6", "8.2", "Dummy", "Dummy"], answer: "6", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 348, kc_id: "KC51", difficulty: "medium", question_text: "Which value of (k) is valid for standard form?", options: ["0.5", "10", "9.99", "15"], answer: "9.99", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 349, kc_id: "KC51", difficulty: "medium", question_text: "( k ) must satisfy: ______ ≤ (k) < ______", options: ["1, 10", "0, 9", "Dummy", "Dummy"], answer: "1, 10", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 350, kc_id: "KC51", difficulty: "medium", question_text: "Which is valid standard form?", options: ["( 1 × 10^3 )", "( 0 × 10^5 )", "( -5 × 10^2 )", "( 10 × 10^2 )"], answer: "( 1 × 10^3 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 351, kc_id: "KC51", difficulty: "hard", question_text: "Which is in correct standard form?", options: ["( 0.999 × 10^3 )", "( 9.99 × 10^2 )", "( 10.1 × 10^2 )", "( 0.1 × 10^4 )"], answer: "( 9.99 × 10^2 )", hints: ["(k ≥ 1) and (k < 10)", "Check boundaries carefully", "Only 9.99 works"] },
    { id: 352, kc_id: "KC51", difficulty: "hard", question_text: "If (k = 10), the expression is ______ valid", options: ["not", "is", "Dummy", "Dummy"], answer: "not", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 353, kc_id: "KC51", difficulty: "hard", question_text: "Which violates standard form?", options: ["( 2.5 × 10^3 )", "( 7 × 10^0 )", "( 0.25 × 10^4 )", "( 9.1 × 10^2 )"], answer: "( 0.25 × 10^4 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 354, kc_id: "KC51", difficulty: "hard", question_text: "Smallest valid value of (k) = ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 355, kc_id: "KC51", difficulty: "hard", question_text: "Which is valid?", options: ["( 1 × 10^5 )", "( 10 × 10^5 )", "( 0.99 × 10^5 )", "( 0 × 10^5 )"], answer: "( 1 × 10^5 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 356, kc_id: "KC51", difficulty: "very difficult", question_text: "Which are in standard form? (1) 2.3 × 10^5, (2) 0.23 × 10^6, (3) 23 × 10^4, (4) 9.99 × 10^3", options: ["1, 4", "1, 2", "2, 3", "All"], answer: "1, 4", hints: ["Check each (k)", "Validate range", "Only 2.3 and 9.99 valid"] },
    { id: 357, kc_id: "KC51", difficulty: "very difficult", question_text: "( 0.8 × 10^5 ) is not valid because (k <) ______", options: ["1", "0", "Dummy", "Dummy"], answer: "1", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 358, kc_id: "KC51", difficulty: "very difficult", question_text: "Which can be rewritten into standard form without changing value?", options: ["( 25 × 10^3 )", "( 2.5 × 10^4 )", "Both A and B", "None"], answer: "Both A and B", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 359, kc_id: "KC51", difficulty: "very difficult", question_text: "In standard form, exponent (n) can be ______", options: ["any integer", "only positive", "Dummy", "Dummy"], answer: "any integer", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 360, kc_id: "KC51", difficulty: "very difficult", question_text: "Which statement is TRUE?", options: ["(k) can be any number", "(k) must be between 1 and 10", "(k) must be an integer", "(k) must be greater than 10"], answer: "(k) must be between 1 and 10", hints: ["Dummy", "Dummy", "Dummy"] },

    // KC52 Questions
    { id: 361, kc_id: "KC52", difficulty: "easy", question_text: "Convert: 3000 = ______", options: ["(3 × 10^3)", "(30 × 10^2)", "Dummy", "Dummy"], answer: "(3 × 10^3)", hints: ["Move decimal after first digit", "Count how many places decimal shifts left", "3000 → 3.0 → (3 × 10^3)"] },
    { id: 362, kc_id: "KC52", difficulty: "easy", question_text: "Convert: 500", options: ["(5 × 10^2)", "(50 × 10^1)", "(0.5 × 10^3)", "(500 × 10^0)"], answer: "(5 × 10^2)", hints: ["(k) must be between 1 and 10", "Shift decimal 2 places", "(5 × 10^2)"] },
    { id: 363, kc_id: "KC52", difficulty: "easy", question_text: "Convert: 70000 = ______", options: ["(7 × 10^4)", "(70 × 10^3)", "Dummy", "Dummy"], answer: "(7 × 10^4)", hints: ["Count number of zeros", "Move decimal left 4 places", "(7 × 10^4)"] },
    { id: 364, kc_id: "KC52", difficulty: "easy", question_text: "Convert: 9000", options: ["(9 × 10^3)", "(0.9 × 10^4)", "(90 × 10^2)", "(900 × 10^1)"], answer: "(9 × 10^3)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 365, kc_id: "KC52", difficulty: "easy", question_text: "Convert: 100000 = ______", options: ["(1 × 10^5)", "(10 × 10^4)", "Dummy", "Dummy"], answer: "(1 × 10^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 366, kc_id: "KC52", difficulty: "medium", question_text: "Convert: 45600 = ______", options: ["(4.56 × 10^4)", "(45.6 × 10^3)", "Dummy", "Dummy"], answer: "(4.56 × 10^4)", hints: ["Keep one digit before decimal", "Move decimal 4 places left", "45600 → 4.56 × (10^4)"] },
    { id: 367, kc_id: "KC52", difficulty: "medium", question_text: "Convert: 820000", options: ["(8.2 × 10^5)", "(82 × 10^4)", "(0.82 × 10^6)", "(820 × 10^3)"], answer: "(8.2 × 10^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 368, kc_id: "KC52", difficulty: "medium", question_text: "Convert: 9030000 = ______", options: ["(9.03 × 10^6)", "(90.3 × 10^5)", "Dummy", "Dummy"], answer: "(9.03 × 10^6)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 369, kc_id: "KC52", difficulty: "medium", question_text: "Convert: 120000", options: ["(1.2 × 10^5)", "(12 × 10^4)", "(0.12 × 10^6)", "All are standard form"], answer: "(1.2 × 10^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 370, kc_id: "KC52", difficulty: "medium", question_text: "Convert: 605000 = ______", options: ["(6.05 × 10^5)", "(60.5 × 10^4)", "Dummy", "Dummy"], answer: "(6.05 × 10^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 371, kc_id: "KC52", difficulty: "hard", question_text: "Convert: 5078000 = ______", options: ["(5.078 × 10^6)", "(50.78 × 10^5)", "Dummy", "Dummy"], answer: "(5.078 × 10^6)", hints: ["Include all significant digits", "Move decimal after first non-zero digit", "5078000 → 5.078 × (10^6)"] },
    { id: 372, kc_id: "KC52", difficulty: "hard", question_text: "Convert: 1002000", options: ["(1.002 × 10^6)", "(10.02 × 10^5)", "(0.1002 × 10^7)", "All are standard"], answer: "(1.002 × 10^6)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 373, kc_id: "KC52", difficulty: "hard", question_text: "Convert: 908070 = ______", options: ["(9.0807 × 10^5)", "(90.807 × 10^4)", "Dummy", "Dummy"], answer: "(9.0807 × 10^5)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 374, kc_id: "KC52", difficulty: "hard", question_text: "Convert: 1000000", options: ["(1 × 10^6)", "(10 × 10^5)", "(0.1 × 10^7)", "All are standard form"], answer: "(1 × 10^6)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 375, kc_id: "KC52", difficulty: "hard", question_text: "Convert: 23400000 = ______", options: ["(2.34 × 10^7)", "(23.4 × 10^6)", "Dummy", "Dummy"], answer: "(2.34 × 10^7)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 376, kc_id: "KC52", difficulty: "very difficult", question_text: "Convert: 123456000", options: ["(1.23456 × 10^8)", "(12.3456 × 10^7)", "(0.123456 × 10^9)", "All are standard"], answer: "(1.23456 × 10^8)", hints: ["Only one non-zero digit before decimal", "Move decimal 8 places", "(1.23456 × 10^8)"] },
    { id: 377, kc_id: "KC52", difficulty: "very difficult", question_text: "Convert: 400500000 = ______", options: ["(4.005 × 10^8)", "(40.05 × 10^7)", "Dummy", "Dummy"], answer: "(4.005 × 10^8)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 378, kc_id: "KC52", difficulty: "very difficult", question_text: "Convert: 1000100", options: ["(1.0001 × 10^6)", "(10.001 × 10^5)", "(0.10001 × 10^7)", "All are valid standard forms"], answer: "(1.0001 × 10^6)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 379, kc_id: "KC52", difficulty: "very difficult", question_text: "Convert: 76543210 = ______", options: ["(7.654321 × 10^7)", "(76.54321 × 10^6)", "Dummy", "Dummy"], answer: "(7.654321 × 10^7)", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 380, kc_id: "KC52", difficulty: "very difficult", question_text: "Which is correct standard form of 2500000?", options: ["(2.5 × 10^6)", "(25 × 10^5)", "(0.25 × 10^7)", "All"], answer: "(2.5 × 10^6)", hints: ["(k) must be between 1 and 10", "Check coefficient", "Only 2.5 is valid"] },

    // KC53 Questions
    { id: 381, kc_id: "KC53", difficulty: "easy", question_text: "Which is greater?", options: ["( 3 × 10^4 )", "( 5 × 10^4 )", "Dummy", "Dummy"], answer: "( 5 × 10^4 )", hints: ["Same exponent → compare (k)", "Compare 3 and 5", "5 > 3"] },
    { id: 382, kc_id: "KC53", difficulty: "easy", question_text: "( 2 × 10^5 ) ___ ( 3 × 10^4 )", options: [">", "<", "=", "Dummy"], answer: ">", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 383, kc_id: "KC53", difficulty: "easy", question_text: "Which is smaller?", options: ["( 6 × 10^3 )", "( 9 × 10^3 )", "Dummy", "Dummy"], answer: "( 6 × 10^3 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 384, kc_id: "KC53", difficulty: "easy", question_text: "( 4 × 10^6 ) ___ ( 4 × 10^5 )", options: [">", "<", "=", "Dummy"], answer: ">", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 385, kc_id: "KC53", difficulty: "easy", question_text: "Which is greater?", options: ["( 7 × 10^2 )", "( 7 × 10^3 )", "Dummy", "Dummy"], answer: "( 7 × 10^3 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 386, kc_id: "KC53", difficulty: "medium", question_text: "Which is greater?", options: ["( 2.5 × 10^6 )", "( 3.1 × 10^5 )", "Dummy", "Dummy"], answer: "( 2.5 × 10^6 )", hints: ["Compare exponents first", "6 > 5", "A is larger"] },
    { id: 387, kc_id: "KC53", difficulty: "medium", question_text: "( 8.2 × 10^3 ) ___ ( 7.9 × 10^3 )", options: [">", "<", "=", "Dummy"], answer: ">", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 388, kc_id: "KC53", difficulty: "medium", question_text: "Which is smaller?", options: ["( 1.2 × 10^7 )", "( 9.9 × 10^6 )", "Dummy", "Dummy"], answer: "( 9.9 × 10^6 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 389, kc_id: "KC53", difficulty: "medium", question_text: "( 3.4 × 10^5 ) ___ ( 3.4 × 10^6 )", options: [">", "<", "=", "Dummy"], answer: "<", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 390, kc_id: "KC53", difficulty: "medium", question_text: "Which determines size first?", options: ["Coefficient", "Exponent", "Both equally", "None"], answer: "Exponent", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 391, kc_id: "KC53", difficulty: "hard", question_text: "Which is greater?", options: ["( 9.9 × 10^4 )", "( 1.1 × 10^5 )", "Dummy", "Dummy"], answer: "( 1.1 × 10^5 )", hints: ["Exponent dominates", "Compare 4 vs 5", "(10^5 > 10^4)"] },
    { id: 392, kc_id: "KC53", difficulty: "hard", question_text: "( 5.01 × 10^6 ) ___ ( 4.99 × 10^6 )", options: [">", "<", "=", "Dummy"], answer: ">", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 393, kc_id: "KC53", difficulty: "hard", question_text: "Which is smaller?", options: ["( 7.5 × 10^8 )", "( 8.1 × 10^7 )", "Dummy", "Dummy"], answer: "( 8.1 × 10^7 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 394, kc_id: "KC53", difficulty: "hard", question_text: "( 1.01 × 10^9 ) ___ ( 9.99 × 10^8 )", options: [">", "<", "=", "Dummy"], answer: ">", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 395, kc_id: "KC53", difficulty: "hard", question_text: "Which is greater?", options: ["( 2 × 10^6 )", "( 20 × 10^5 )", "Equal", "Dummy"], answer: "Equal", hints: ["Convert to standard form", "(20 × 10^5 = 2 × 10^6)", "Both equal"] },
    { id: 396, kc_id: "KC53", difficulty: "very difficult", question_text: "Arrange in ascending order: ( 3 × 10^5, 2.5 × 10^6, 9 × 10^4 )", options: ["( 9×10^4 < 3×10^5 < 2.5×10^6 )", "( 3×10^5 < 9×10^4 < 2.5×10^6 )", "( 2.5×10^6 < 3×10^5 < 9×10^4 )", "( 9×10^4 < 2.5×10^6 < 3×10^5 )"], answer: "( 9×10^4 < 3×10^5 < 2.5×10^6 )", hints: ["Compare exponents", "4 < 5 < 6", "Order accordingly"] },
    { id: 397, kc_id: "KC53", difficulty: "very difficult", question_text: "Largest among: ( 7 × 10^7, 6 × 10^8, 9 × 10^6 ) = ______", options: ["6 × 10^8", "7 × 10^7", "Dummy", "Dummy"], answer: "6 × 10^8", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 398, kc_id: "KC53", difficulty: "very difficult", question_text: "Which is greater?", options: ["( 9.99 × 10^5 )", "( 1 × 10^6 )", "Equal", "Cannot determine"], answer: "( 1 × 10^6 )", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 399, kc_id: "KC53", difficulty: "very difficult", question_text: "Smallest among: ( 2 × 10^3, 1.9 × 10^4, 9 × 10^2 ) = ______", options: ["9 × 10^2", "2 × 10^3", "Dummy", "Dummy"], answer: "9 × 10^2", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 400, kc_id: "KC53", difficulty: "very difficult", question_text: "Which is correct?", options: ["Larger (k) always means larger number", "Larger exponent always dominates", "Both equally matter always", "Coefficient is more important"], answer: "Larger exponent always dominates", hints: ["Exponent sets scale", "Compare powers of 10", "Higher exponent → larger number"] },

    // KC54 Questions
    { id: 401, kc_id: "KC54", difficulty: "easy", question_text: "Convert: ( 3 × 10^2 = ) ______", options: ["300", "30", "Dummy", "Dummy"], answer: "300", hints: ["Positive exponent → move right", "Move decimal 2 places", "3 → 300"] },
    { id: 402, kc_id: "KC54", difficulty: "easy", question_text: "Convert: ( 5 × 10^3 )", options: ["500", "5000", "50", "50000"], answer: "5000", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 403, kc_id: "KC54", difficulty: "easy", question_text: "( 7 × 10^1 = ) ______", options: ["70", "7", "Dummy", "Dummy"], answer: "70", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 404, kc_id: "KC54", difficulty: "easy", question_text: "Convert: ( 2 × 10^4 )", options: ["2000", "20000", "200", "20"], answer: "20000", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 405, kc_id: "KC54", difficulty: "easy", question_text: "( 9 × 10^2 = ) ______", options: ["900", "90", "Dummy", "Dummy"], answer: "900", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 406, kc_id: "KC54", difficulty: "medium", question_text: "Convert: ( 4.5 × 10^3 = ) ______", options: ["4500", "450", "Dummy", "Dummy"], answer: "4500", hints: ["Decimal shifts right", "Move 3 places", "4.5 → 4500"] },
    { id: 407, kc_id: "KC54", difficulty: "medium", question_text: "Convert: ( 6.2 × 10^4 )", options: ["6200", "62000", "620000", "62"], answer: "62000", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 408, kc_id: "KC54", difficulty: "medium", question_text: "Convert: ( 3.08 × 10^2 = ) ______", options: ["308", "30.8", "Dummy", "Dummy"], answer: "308", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 409, kc_id: "KC54", difficulty: "medium", question_text: "Convert: ( 1.2 × 10^5 )", options: ["12000", "120000", "1200", "12"], answer: "120000", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 410, kc_id: "KC54", difficulty: "medium", question_text: "Convert: ( 9.01 × 10^3 = ) ______", options: ["9010", "901", "Dummy", "Dummy"], answer: "9010", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 411, kc_id: "KC54", difficulty: "hard", question_text: "Convert: ( 2.03 × 10^6 = ) ______", options: ["2,030,000", "203,000", "Dummy", "Dummy"], answer: "2,030,000", hints: ["Maintain digits", "Shift decimal 6 places", "2.03 → 2030000"] },
    { id: 412, kc_id: "KC54", difficulty: "hard", question_text: "Convert: ( 7.005 × 10^4 )", options: ["70050", "70500", "7005", "700000"], answer: "70050", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 413, kc_id: "KC54", difficulty: "hard", question_text: "Convert: ( 5.67 × 10^2 = ) ______", options: ["567", "56.7", "Dummy", "Dummy"], answer: "567", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 414, kc_id: "KC54", difficulty: "hard", question_text: "Convert: ( 1.01 × 10^3 )", options: ["101", "1010", "1001", "1100"], answer: "1010", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 415, kc_id: "KC54", difficulty: "hard", question_text: "Convert: ( 8.9 × 10^5 = ) ______", options: ["890000", "89000", "Dummy", "Dummy"], answer: "890000", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 416, kc_id: "KC54", difficulty: "very difficult", question_text: "Convert: ( 1.234 × 10^6 )", options: ["123400", "1234000", "12340000", "1234"], answer: "1234000", hints: ["Move decimal right", "6 places", "1.234 → 1234000"] },
    { id: 417, kc_id: "KC54", difficulty: "very difficult", question_text: "Convert: ( 4.0005 × 10^5 = ) ______", options: ["400050", "40005", "Dummy", "Dummy"], answer: "400050", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 418, kc_id: "KC54", difficulty: "very difficult", question_text: "Convert: ( 9.99 × 10^3 )", options: ["999", "9990", "99900", "9900"], answer: "9990", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 419, kc_id: "KC54", difficulty: "very difficult", question_text: "Convert: ( 3.456 × 10^4 = ) ______", options: ["34560", "3456", "Dummy", "Dummy"], answer: "34560", hints: ["Dummy", "Dummy", "Dummy"] },
    { id: 340, kc_id: "KC54", difficulty: "very difficult", question_text: "Which is correct interpretation of ( 2.5 × 10^3 )?", options: ["250", "2500", "25000", "25"], answer: "2500", hints: ["Positive exponent → multiply by 1000", "Shift decimal 3 places", "2.5 → 2500"] }
];

// 4. Seed Execution
async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database...");

        await Content.deleteMany({});
        await Question.deleteMany({});

        await Content.insertMany(kcsData);
        await Question.insertMany(questionBank);

        console.log("Seed complete! 85+ questions and lesson content added.");
        process.exit();
    } catch (err) {
        console.error("Seed error:", err);
        process.exit(1);
    }
}

seedDB();