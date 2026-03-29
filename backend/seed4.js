const mongoose = require('mongoose');
require('dotenv').config();

// 1. Define Schema
const Content = mongoose.model('Content', new mongoose.Schema({
    kc_id: String,
    title: String,
    motivation: String,
    content: String
}), 'contents');

// 2. Comprehensive Learning Content (Parents + Subtopics)
const kcsData = [
    // --- UNIT 1: Parent and Subs ---
    {
        kc_id: "KC1",
        title: "Unit 1: The \"Big Number\" Headache 🤯",
        motivation: "One day, Roohi and Pari were testing each other. Pari checks the distance to the Sun and gasps: 'It’s about 150,000,000,000 meters!' Imagine writing that 10 times in your notebook. Your hand would hurt, and you’d probably forget a zero!",
        content: "Counting zeros is boring and slow. What if we have nicknames for giant numbers? 150,000,000,000 becomes 15x10^10. We will learn how to use these nicknames in this module."
    },
    { kc_id: "KC11", title: "Identify Base and Exponent", motivation: "Dummy", content: "The Base (Giant) is the number multiplied. The Exponent (Boss) tells how many times." },
    { kc_id: "KC12", title: "Repeated Multiplication", motivation: "Dummy", content: "The 'Shrink Ray' turns long lines of numbers into tiny exponential boxes." },
    { kc_id: "KC13", title: "Expanding Exponential Expressions", motivation: "Dummy", content: "The 'Zoom Out' lets us see all the hidden factors again." },
    { kc_id: "KC14", title: "Finding the Value", motivation: "Dummy", content: "Turn the code into a real value by solving the multiplication puzzle." },
    { kc_id: "KC15", title: "Express Numbers as Powers", motivation: "Dummy", content: "Use the Factor Tree to find the secret exponential code of any number." },

    // --- UNIT 2: Parent and Subs ---
    {
        kc_id: "KC2",
        title: "Unit 2: The Mystery of the Minus Sign 🕵️‍♀️",
        motivation: "Roohi and Pari are playing with a 'Magic Mirror.' If (-3) x (-3) is positive 9, what happens if you multiply it three times? Does it flip back to negative? Let's find the pattern!",
        content: "Negative bases follow a flip-flop rule. If the 'Boss' (exponent) is even, the result is positive. If odd, it stays negative."
    },
    { kc_id: "KC21", title: "Evaluate Powers of Negative Numbers", motivation: "Dummy", content: "Practice the Expand and Multiply rule with negative integers." },
    { kc_id: "KC22", title: "Determine the Sign", motivation: "Dummy", content: "Master the Even-Odd shortcut to predict the sign instantly." },
    { kc_id: "KC23", title: "Writing Variable Products", motivation: "Dummy", content: "Apply the shrink rules to letters like 'a' and 'b' just like numbers." },
    { kc_id: "KC24", title: "The Bracket Trap! (-a)^n vs -a^n", motivation: "Dummy", content: "Learn why brackets are the most important part of a negative base." },

    // --- UNIT 3: Parent and Subs ---
    {
        kc_id: "KC3",
        title: "Unit 3: The Secret Laws of the Base 👑",
        motivation: "Roohi sees 2^3 x 2^4 and groans. 'Do I really have to multiply all those?' Pari realizes: 'Wait! The bases are the same family!' There must be a shortcut.",
        content: "Welcome to Math Superpowers! When families match, we add or subtract the powers instead of doing long math."
    },
    { kc_id: "KC31", title: "The Multiplication Law", motivation: "Dummy", content: "Same base? Just add the powers! a^m * a^n = a^(m+n)." },
    { kc_id: "KC32", title: "The Division Law", motivation: "Dummy", content: "Division is the opposite of multiplication, so we subtract the powers." },
    { kc_id: "KC33", title: "Power of a Power", motivation: "Dummy", content: "The 'Double Boss' rule: when powers stack, they multiply." },
    { kc_id: "KC34", title: "Combine Same-Base Operations", motivation: "Dummy", content: "Use all your superpowers together to solve mixed problems." },

    // --- UNIT 4: Parent and Subs ---
    {
        kc_id: "KC4",
        title: "Unit 4: Different Families, Same Power! 👯‍♂️",
        motivation: "Roohi and Pari see 2^3 x 3^3. The bases are different, but look! The exponents are wearing the same uniform! Can we group them together?",
        content: "If the 'Boss' is the same, different bases can join forces inside a single bracket."
    },
    { kc_id: "KC41", title: "Different Bases, Same Exponent", motivation: "Dummy", content: "Multiply the bases and keep the power common: (a*b)^m." },
    { kc_id: "KC42", title: "Bases Divide", motivation: "Dummy", content: "Bases can divide under one common power if they match." },
    { kc_id: "KC43", title: "The Zero Exponent Rule", motivation: "Dummy", content: "The Number 1 Magic: Any non-zero number to the power 0 is always 1." },
    { kc_id: "KC44", title: "Combine Multiple Bases", motivation: "Dummy", content: "Handle variables and numbers together in complex groups." },

    // --- UNIT 5: Parent and Subs ---
    {
        kc_id: "KC5",
        title: "Unit 5: The Scientist’s Shortcut 🌌",
        motivation: "Roohi gets dizzy counting zeros in the mass of the Earth. Pari discovers the Scientist's secret: Standard Form. A way to write giant numbers using a tiny decimal.",
        content: "Standard Form makes comparing stars and cells easy. It uses a decimal between 1 and 10 and a power of 10."
    },
    { kc_id: "KC51", title: "The Anatomy of Standard Form", motivation: "Dummy", content: "Learn the structure: m x 10^n." },
    { kc_id: "KC52", title: "Converting Large Numbers", motivation: "Dummy", content: "Master the 'Decimal Jump' to turn millions into simple codes." },
    { kc_id: "KC53", title: "Comparing Using Standard Form", motivation: "Dummy", content: "Compare huge things like planets without ever counting a single zero." },
    { kc_id: "KC54", title: "Interpreting Standard Form", motivation: "Dummy", content: "Expand the scientist's notes back into real numbers." }
];

// 3. Execution Logic
const refreshContent = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB...");

        await Content.deleteMany({});
        console.log("Old lessons cleared.");

        await Content.insertMany(kcsData);
        console.log(`Success! ${kcsData.length} units and subtopics updated with story motivations.`);

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

refreshContent();