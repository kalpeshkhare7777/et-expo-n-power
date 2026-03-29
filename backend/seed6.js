const mongoose = require('mongoose');
require('dotenv').config();

const misconceptionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    misconception: { type: String, required: true },
    review_content: { type: String, required: true }
});

const Misconception = mongoose.model('Misconception', misconceptionSchema, 'misconceptions');

const misconceptions = [
  {
    id: "M1",
    misconception: "Base vs Exponent confusion",
    review_content: "Pari says: 'Look closely! The base is the big number on the ground—it's the one being multiplied again and again. The exponent is the small number on top!'"
  },
  {
    id: "M2",
    misconception: "Multiplication instead of Power",
    review_content: "Roohi warns: '$3^4$ is NOT $3 \\times 4$. It means $3 \\times 3 \\times 3 \\times 3$. Exponents are repeated multiplication, not simple multiplication!'"
  },
  {
    id: "M3",
    misconception: "Zero Exponent equals Zero",
    review_content: "Pari explains: 'Any non-zero number to the power 0 becomes 1. Think: $a^m \\div a^m = 1$, so $a^0 = 1$. Zero exponent doesn’t mean zero result!'"
  },
  {
    id: "M4",
    misconception: "Incomplete expansion of powers",
    review_content: "Roohi says: 'Don’t stop halfway! $2^3$ means $2 \\times 2 \\times 2$ (which is 8), not just $2 \\times 2$. Count carefully how many times the base repeats.'"
  },
  {
    id: "M5",
    misconception: "Negative base with even exponent resulting in negative",
    review_content: "Roohi’s Magic Mirror: 'Even exponents mean negatives cancel out! $(-2) \\times (-2) = +4$. An even power always makes a negative base positive!'"
  },
  {
    id: "M6",
    misconception: "Ignoring brackets in negative bases",
    review_content: "Pari’s Bracket Trap: '$(-3)^2 = 9$ but $-3^2 = -9$. Brackets decide whether the minus is part of the base or just sitting outside. Always check the bubble!'"
  },
  {
    id: "M8",
    misconception: "Incorrect sign for (-1)^n",
    review_content: "Pari explains: '$(-1)^{\\text{even}} = +1$ and $(-1)^{\\text{odd}} = -1$. It alternates! Check if your exponent is even or odd to find the sign.'"
  },
  {
    id: "M9",
    misconception: "Multiplying exponents during same-base multiplication",
    review_content: "Roohi says: 'Same base $\\rightarrow$ ADD exponents! $a^m \\times a^n = a^{m+n}$. Don’t multiply them—that’s only for a power raised to another power!'"
  },
  {
    id: "M10",
    misconception: "Adding exponents during division",
    review_content: "Pari explains: 'Division means subtract the powers: $a^m \\div a^n = a^{m-n}$. Don’t add them here!'"
  },
  {
    id: "M11",
    misconception: "Adding exponents in power of a power",
    review_content: "Roohi says: '$(a^m)^n = a^{m \\times n}$. You must multiply the exponents, not add them!'"
  },
  {
    id: "M15",
    misconception: "Adding bases instead of multiplying (Different bases)",
    review_content: "Roohi says: '$2^3 \\times 3^3 = (2 \\times 3)^3 = 6^3$. Never add the bases together. If they are multiplying, multiply the numbers!'"
  },
  {
    id: "M16",
    misconception: "Subtracting bases in division rules",
    review_content: "Pari explains: '$a^m \\div b^m = (a/b)^m$. It is a ratio of the bases, NOT $a-b$. Don't subtract the big numbers!'"
  },
  {
    id: "M19",
    misconception: "Thinking a^0 = a",
    review_content: "Roohi says: '$a^0 = 1$, not $a$. Any number raised to 0 shrinks down to exactly 1!'"
  },
  {
    id: "M20",
    misconception: "Standard form coefficient k < 1",
    review_content: "Pari says: 'In standard form $k \\times 10^n$, $k$ must be at least 1. $0.5 \\times 10^3$ is not standard form because 0.5 is too small!'"
  },
  {
    id: "M21",
    misconception: "Standard form coefficient k ≥ 10",
    review_content: "Roohi says: 'In standard form, $k$ must be less than 10. $12 \\times 10^3$ is not standard—it should be $1.2 \\times 10^4$. Keep it a single-digit hero!'"
  },
  {
    id: "M22",
    misconception: "Wrong decimal shift direction for power of 10",
    review_content: "Pari says: 'Positive exponent $\\rightarrow$ move decimal right (make it big). Negative exponent $\\rightarrow$ move left (make it small).'"
  },
  {
    id: "M24",
    misconception: "Comparing decimals before exponents in scientific notation",
    review_content: "Pari says: 'The exponent is the Boss of size! $1 \\times 10^6$ is much bigger than $9 \\times 10^5$ because it has more digits. Always check the power of 10 first!'"
  },
  {
    id: "M31",
    misconception: "Applying exponent laws to addition/subtraction",
    review_content: "Roohi warns: '$2^3 + 2^2$ is NOT $2^5$. Exponent laws ONLY work for multiplication and division. Solve the values first: $8 + 4 = 12$.'"
  },
  {
    id: "M32",
    misconception: "Thinking a^1 = 1",
    review_content: "Pari says: '$a^1 = a$. It means the base appears exactly once. So $5^1$ is 5, not 1!'"
  },
  {
    id: "M38",
    misconception: "Dropping non-zero digits in standard form",
    review_content: "Pari says: 'Don’t drop the digits in the middle! $5,078,000$ becomes $5.078 \\times 10^6$, not $5.78 \\times 10^6$. Every non-zero digit must stay!'"
  }
];

async function seedMisconceptions() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for Misconception seeding...");

        // Clear existing misconceptions
        await Misconception.deleteMany({});
        console.log("Cleared old misconceptions.");

        // Insert the new list
        const result = await Misconception.insertMany(misconceptions);
        console.log(`Successfully added ${result.length} misconceptions with Pari & Roohi feedback.`);

        process.exit(0);
    } catch (error) {
        console.error("Seeding Error:", error);
        process.exit(1);
    }
}

seedMisconceptions();