const mongoose = require('mongoose');
require('dotenv').config();

// 1. Define Schema
const ContentSchema = new mongoose.Schema({
    kc_id: String,
    title: String,
    motivation: String,
    content: String,
    worked_examples: [String] // Changed to Array for "Next" screen functionality
});

const Content = mongoose.model('Content', ContentSchema, 'contents');

// 2. Comprehensive Learning Content
const kcsData = [
    {
        kc_id: "KC1",
        title: "Unit 1: The \"Big Number\" Headache 🤯",
        motivation: "The Problem: Too Many Zeros!\nOne day, Roohi and Pari were testing each other's General Knowledge.\nRoohi asks: \"Pari, do you know how far the Sun is from the Earth?\"\nPari checks and gasps: \"It’s about 150,000,000,000 meters!\"\nThat is a massive number. Imagine if your teacher asked you to write that 10 times in your homework notebook. Your hand would hurt, and you’d probably forget a zero or two! 😵‍💫\nThe Confusion Begins...\nNext, Pari tries to trick Roohi: \"Okay, then what is closer to Earth? The Sun or Jupiter?\"\nRoohi googles the distances and sees:\nDistance to Sun: $150,000,000,000$ m\nDistance to Jupiter: $400,000,000,000$ m\nNow both are confused. At a quick glance, they look almost the same. Is it 10 zeros? 11 zeros?\nCounting zeros is boring, slow, and confusing.\nThe Big Question: Is there a way to write these giant numbers so they are easy to read, easy to compare, and don't make our heads spin?",
        content: "Nicknames for large numbers\nWhat if we have nicknames for very large numbers? \n 150,000,000,000 become 15x10^10.\nBut how do we use these nicknames? We will learn through this module",
        worked_examples: []
    },
    {
        kc_id: "KC11",
        title: "KC11: Identify Base and Exponent",
        motivation: "Meet the Base and the Exponent\nWhen we write a number in this \"Short-cut\" form, it looks like this: 10^3",
        content: "1. The Base (The Giant)\nThe big number at the bottom is the Base.\nWhat it is: The number that is being multiplied by itself.\nThink of it as: The \"Main Character\" of the story.\n2. The Exponent (The Boss)\nThe tiny number sitting on the shoulder of the base is the Exponent (or Power).\nWhat it is: It tells us how many times to multiply the base.\nThink of it as: The \"Boss\" telling the base how many times to show up.",
        worked_examples: [
            "Problem: Identify base and exponent in 7^5\nSteps:\nLook at the number being repeated → 7\nLook at the small raised number → 5\nFinal Answer: Base = 7, Exponent = 5",
            "Problem: Identify base and exponent in (-3)^4\nSteps:\nCheck for brackets → YES → entire -3 is base\nExponent is the small number → 4\nFinal Answer: Base = -3, Exponent = 4",
            "Problem: Identify base and exponent in -3^2\nSteps:\nNo brackets → exponent applies only to 3\nBase = 3\nExponent = 2\nMinus is outside\nFinal Answer: Base = 3, Exponent = 2",
            "Problem: Identify base and exponent in (1/2)^6\nSteps:\nEntire fraction is inside brackets → base\nExponent = 6\nFinal Answer: Base = 1/2, Exponent = 6",
            "Problem: Roohi writes down $10^4$. She tells Pari, \"I know this is a shortcut for 10,000, but I keep forgetting which part is which!\".\nWorked Solution:\nThe Base: The big number at the bottom is 10. The Exponent: The small number at the top is 4.\nFinal Answer: Base = 10, Exponent = 4."
        ]
    },
    {
        kc_id: "KC12",
        title: "KC12: Convert Repeated Multiplication to Exponential Form",
        motivation: "KC 1.2: The Shrink Ray! (Repeated Multiplication)\nRoohi and Pari found out that writing big numbers is hard. But what if the number isn't just zeros? What if we have to write $5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5$?\nThat’s a lot of 5s! Pari has a trick to \"shrink\" this long line into a tiny box.",
        content: "The Rule of the \"Shrink Ray\"\nIf you see the same number multiplying itself over and over, you can use an Exponent.\nLook at this:\n$$2 \\times 2 \\times 2 \\times 2 \\times 2$$\nWho is the \"Main Character\"? It’s $2$. (This is our Base)\nHow many times does it appear? Count them... $1, 2, 3, 4, 5$. (This is our Exponent)\nThe Short Form: $2^5$\n(Read as: \"2 raised to the power 5\")",
        worked_examples: [
            "Problem: Write 3x3x3 in exponential form\nSteps:\nRepeated number = 3\nCount repetitions = 3\nFinal Answer: 3^3",
            "Problem: Write 5x5x5x5x5\nSteps:\nBase = 5\nCount = 5\nFinal Answer: 5^5",
            "Problem: Write 2x2x3x3x3\nSteps:\nGroup same numbers\nTwo 2s → 2^2\nThree 3s → 3^3\nFinal Answer: 2^2 x 3^3",
            "Problem: Write axaxaxbxb\nSteps:\nCount a’s → 3 → a^3\nCount b’s → 2 → b^2\nFinal Answer: a^3 b^2",
            "Problem: Pari is tired of writing $6 \\times 6 \\times 6 \\times 6$. Roohi suggests using their \"Secret Code.\".\nWorked Solution:\nStep 1: Identify the number being multiplied (6). Step 2: Count how many times (4).\nFinal Answer: The exponential form is $6^4$."
        ]
    },
    {
        kc_id: "KC13",
        title: "KC13: Expand Exponential Expressions",
        motivation: "KC1.3: The \"Zoom Out\" – Expanding Exponential Expressions\nRoohi and Pari have been using their \"Secret Code\" (Exponential Form) for a while now. But Roohi asks, \"Pari, what if we want to see the full multiplication again? How do we expand it?\".",
        content: "Expanded form is writing a power as a long string of multiplication. It’s like \"zooming out\" to see all the factors.",
        worked_examples: [
            "Problem: Expand 4^3\nSteps:\nBase = 4\nExponent = 3\nWrite base 3 times\nFinal Answer: 4x4x4",
            "Problem: Expand (-2)^3\nSteps:\nBase = (-2)\nExponent = 3\nRepeat with brackets\nFinal Answer: (-2)x(-2)x(-2)",
            "Problem: Expand x^4\nSteps:\nBase = x\nExponent = 4\nFinal Answer: xxxxx",
            "Problem: Expand (3a)^2\nSteps:\nEntire (3a) is base\nWrite twice\nFinal Answer: (3a)(3a)=3xax3xa",
            "Problem: Roohi sees the code $a^3b^2$ in her textbook. She asks Pari, \"How do we 'Zoom Out'?\".\nWorked Solution:\nStep 1: Expand the a's: $a \\times a \\times a$. Step 2: Expand the b's: $b \\times b$.\nFinal Answer: $a \\times a \\times a \\times b \\times b$."
        ]
    },
    {
        kc_id: "KC14",
        title: "KC14: Evaluate Simple Powers",
        motivation: "KC 1.4: Finding the Value (The Grand Total)\nRoohi has a new challenge for Pari. \"Pari, we know $2^5$ is the secret code for $2 \\times 2 \\times 2 \\times 2 \\times 2$. But how much is that actually? If my dad gives me $2^5$ rupees, how much money is in my pocket?\"",
        content: "To evaluate (or find the value of) a power, follow these two simple steps:\nStep 1 (Expand): Write the number out the long way.\nStep 2 (Multiply): Multiply the numbers one by one to get the final answer.",
        worked_examples: [
            "Problem: Evaluate 2^5\nSteps:\nExpand → 2x2x2x2x2\nMultiply step-by-step: 4, 8, 16, 32\nFinal Answer: 32",
            "Problem: Evaluate (-3)^2\nSteps:\nExpand → (-3)(-3)\nMultiply → 9\nFinal Answer: 9",
            "Problem: Evaluate (-2)^3\nSteps:\nExpand → (-2)(-2)(-2)\nMultiply: 4 x (-2) = -8\nFinal Answer: -8",
            "Problem: Evaluate 10^0\nSteps:\nRule: Any non-zero number to power 0 = 1\nFinal Answer: 1",
            "Problem: Pari challenges Roohi: \"I'll give you $2^6$ chocolates if you can tell me exactly how many that is!\".\nWorked Solution:\nStep 1 (Expand): $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2$. Step 2 (Multiply): 4, 8, 16, 32, 64.\nFinal Answer: Roohi gets 64 chocolates!."
        ]
    },
    {
        kc_id: "KC15",
        title: "KC15: Express Numbers as Powers",
        motivation: "KC 1.5: Express Numbers as Powers (The Factor Tree)\nRoohi has the number 72. She wants to write it in exponential form, but she doesn’t know where to start. Pari says, \"We just need to break it down into its Prime Factors!\".",
        content: "To express a number as a power, we divide it by the smallest prime numbers (2, 3, 5, 7...) until we reach 1.",
        worked_examples: [
            "Problem: Express 32 as a power of 2\nSteps:\nDivide repeatedly: 32/2=16, 8, 4, 2, 1\nCount divisions = 5\nFinal Answer: 2^5",
            "Problem: Express 81 as a power\nSteps:\nDivide by 3: 81/3=27, 9, 3, 1\nCount = 4\nFinal Answer: 3^4",
            "Problem: Express 1000 as a power of 10\nSteps:\nCount zeros = 3\nFinal Answer: 10^3",
            "Problem: Express 16 as a power\nSteps:\nDivide by 2: 16/2=8, 4, 2, 1\nCount = 4\nFinal Answer: 2^4",
            "Problem: Roohi has the number 72. She wants to turn it into an exponential code using prime numbers.\nWorked Solution:\nStep 1 (Divide by 2): 3 times. Step 2 (Divide by 3): 2 times.\nFinal Answer: $72 = 2^3 \\times 3^2$."
        ]
    },
    {
        kc_id: "KC21",
        title: "KC21: Evaluate Powers of Negative Numbers",
        motivation: "KC 2.1: The Mirror Rule\nRoohi wonders if a negative base always stays negative when it grows. Pari says, 'It's like a light switch—sometimes it's on (positive), sometimes it's off (negative)!'",
        content: "When the base is a negative integer, we still follow the same \"Expand and Multiply\" rule. We just have to be very careful with the signs!",
        worked_examples: [
            "Problem: Evaluate (-2)^4\nSteps:\nExpand → (-2)(-2)(-2)(-2)\nMultiply: 4, -8, 16\nFinal Answer: 16",
            "Problem: Evaluate (-5)^3\nSteps:\nExpand → (-5)(-5)(-5)\nMultiply: 25 x (-5) = -125\nFinal Answer: -125",
            "Problem: Evaluate (-7)^6\nSteps:\nExponent = 6 (even) → result is positive\nFinal Answer: 117,649",
            "Problem: Evaluate (-1)^15\nSteps:\nBase = -1, Exponent = odd → result is -1\nFinal Answer: -1",
            "Problem: Evaluate $(-3)^2$ and $(-3)^3$.\nWorked Solution:\n$(-3)^2 = 9$. $(-3)^3 = -27$.\nFinal Answer: 9 and -27."
        ]
    },
    {
        kc_id: "KC22",
        title: "KC22: Determine Sign of Result Based on Exponent",
        motivation: "KC 2.2: The Even-Odd Rule\nPari notices a shortcut! \"Roohi, look! When the exponent was 2 (even), the answer was positive. When it was 3 (odd), the answer was negative!\"",
        content: "Even Exponent (2, 4, 6...): The result is always Positive (+).\nOdd Exponent (1, 3, 5...): The result is always Negative (-).",
        worked_examples: [
            "Problem: What is the sign of (-3)^8?\nSteps:\nBase is negative, Exponent = even\nFinal Answer: Positive (+)",
            "Problem: What is the sign of (-4)^5?\nSteps:\nBase is negative, Exponent = odd\nFinal Answer: Negative (-)",
            "Problem: Determine sign of (-2)^4 x (-3)^3\nSteps:\n(-2)^4 is +, (-3)^3 is -\n(+) x (-) = (-)\nFinal Answer: Negative",
            "Problem: What is the sign of 5^7?\nSteps:\nBase is positive → always positive\nFinal Answer: Positive",
            "Problem: Without solving, tell the sign of $(-5)^4$ and $(-2)^7$.\nWorked Solution:\n4 is even (Positive). 7 is odd (Negative).\nFinal Answer: Positive, Negative."
        ]
    },
    {
        kc_id: "KC23",
        title: "KC23: Write Variable Products Using Exponents",
        motivation: "KC 2.3: Alphabet Math\nRoohi sees $a \\times a \\times a$ and says, 'I wish I could shrink letters just like numbers!'",
        content: "Sometimes we don't have numbers; we have letters (variables)! We treat them the exact same way.",
        worked_examples: [
            "Problem: Write x * x * x * x\nFinal Answer: x^4",
            "Problem: Write a * a * b * b * b\nFinal Answer: a^2 b^3",
            "Problem: Write x * y * y\nFinal Answer: xy^2",
            "Problem: Simplify a + a + a\nSteps:\nThis is addition, not multiplication\nFinal Answer: 3a (NOT a^3)",
            "Problem: Write $a \\times a \\times a \\times b \\times b$ in exponential form.\nWorked Solution:\n3 a's and 2 b's.\nFinal Answer: $a^3b^2$."
        ]
    },
    {
        kc_id: "KC24",
        title: "KC24: Distinguish Between ((-a)^n) and (-a^n)",
        motivation: "KC 2.4: The Bracket Trap!\nRoohi found a tricky question: 'Is $(-3)^2$ the same as $-3^2$?'",
        content: "(-3)^2: The bracket says the minus belongs to the 3. Meaning: (-3) * (-3) = 9.\n-3^2: No brackets, so the minus is standing outside. Meaning: -(3 * 3) = -9.",
        worked_examples: [
            "Problem: Evaluate (-3)^2\nSteps:\nBase = -3 (inside), Multiply → 9\nFinal Answer: 9",
            "Problem: Evaluate -3^2\nSteps:\nNo brackets, Compute 3^2=9, Apply minus\nFinal Answer: -9",
            "Problem: Compare (-2)^4 and -2^4\nSteps:\n(-2)^4 = 16, -2^4 = -16\nFinal Answer: (-2)^4 > -2^4",
            "Problem: Evaluate (-2)^3 and -2^3\nSteps:\nBoth equal -8\nFinal Answer: Both = -8",
            "Problem: Evaluate $(-5)^2$ and $-5^2$.\nWorked Solution:\n$(-5)^2 = 25$. $-5^2 = -25$.\nFinal Answer: 25 and -25."
        ]
    },
    {
        kc_id: "KC31",
        title: "KC31: Multiplication Law of Exponents (Same Base)",
        motivation: "KC 3.1: The Power Merger\nPari sees two bases that are the same and says, 'If they are from the same family, they can just share their exponents!'",
        content: "The Rule: $a^m \\times a^n = a^{m+n}$",
        worked_examples: [
            "Problem: Simplify 2^3 * 2^4\nSteps:\nAdd exponents: 3+4=7\nFinal Answer: 2^7",
            "Problem: Simplify 5^2 * 5^5\nSteps:\nAdd exponents: 2+5=7\nFinal Answer: 5^7",
            "Problem: Simplify 3^4 * 3\nSteps:\n3 = 3^1, Add 4+1=5\nFinal Answer: 3^5",
            "Problem: Simplify a^2 * a^3 * b^2\nSteps:\nCombine a's: a^5, Keep b^2\nFinal Answer: a^5 b^2",
            "Problem: Simplify $3^2 \\times 3^4 \\times 3^8$.\nWorked Solution:\n$3^{2+4+8} = 3^{14}$.\nFinal Answer: $3^{14}$"
        ]
    },
    {
        kc_id: "KC32",
        title: "KC32: Division Law of Exponents (Same Base)",
        motivation: "KC 3.2: The Great Subtraction\nRoohi asks, 'If multiplying adds the powers, does dividing take them away?'",
        content: "The Rule: $a^m \\div a^n = a^{m-n}$ (where $m > n$)",
        worked_examples: [
            "Problem: Simplify 2^7 / 2^3\nSteps:\nSubtract: 7-3=4\nFinal Answer: 2^4",
            "Problem: Simplify 10^6 / 10^2\nSteps:\nSubtract: 6-2=4\nFinal Answer: 10^4",
            "Problem: Simplify 5^3 / 5^3\nSteps:\nSubtract: 3-3=0, 5^0=1\nFinal Answer: 1",
            "Problem: Simplify x^8 / x^5\nSteps:\nSubtract: 8-5=3\nFinal Answer: x^3",
            "Problem: Simplify $6^{15} \\div 6^{10}$.\nWorked Solution:\nSubtract the powers: $15 - 10$.\nFinal Answer: $6^5$"
        ]
    },
    {
        kc_id: "KC33",
        title: "KC33: Power of a Power Law",
        motivation: "KC 3.3: The Double Boss\nRoohi sees $(2^3)^2$ and gets confused. 'There are two bosses! Who do I listen to?'",
        content: "The Rule: $(a^m)^n = a^{m \\times n}$",
        worked_examples: [
            "Problem: Simplify (2^3)^4\nSteps:\nMultiply: 3x4=12\nFinal Answer: 2^12",
            "Problem: Simplify (5^2)^3\nSteps:\nMultiply: 2x3=6\nFinal Answer: 5^6",
            "Problem: Simplify (x^4)^5\nSteps:\nMultiply: 4x5=20\nFinal Answer: x^20",
            "Problem: Simplify (3^2)^3\nSteps:\nDo NOT add, multiply: 2x3=6\nFinal Answer: 3^6",
            "Problem: Simplify $(5^3)^7$.\nWorked Solution:\nMultiply $3 \\times 7$.\nFinal Answer: $5^{21}$"
        ]
    },
    {
        kc_id: "KC34",
        title: "KC34: Combine Multiple Same-Base Operations",
        motivation: "KC 3.4: The Ultimate Combo\nPari gives Roohi a challenge: 'What if we multiply AND divide at the same time?'",
        content: "Now, let's use all our superpowers together! Sometimes a problem has both multiplication and division.",
        worked_examples: [
            "Problem: Simplify (2^3 * 2^5) / 2^4\nSteps:\nTop: 2^8, Divide: 2^4\nFinal Answer: 2^4",
            "Problem: Simplify (3^2)^3 * 3^4\nSteps:\nPower: 3^6, Multiply: 3^10\nFinal Answer: 3^10",
            "Problem: Simplify (x^6 * x) / x^2\nSteps:\nTop: x^7, Divide: x^5\nFinal Answer: x^5",
            "Problem: Simplify [(2^2)^3 * 2^4] / 2^5\nSteps:\nPower: 2^6, Multiply: 2^10, Divide: 2^5\nFinal Answer: 2^5",
            "Problem: Simplify $(2^{20} \\div 2^{15}) \\times 2^3$.\nWorked Solution:\n$2^5 \\times 2^3 = 2^8$.\nFinal Answer: $2^8$"
        ]
    },
    {
        kc_id: "KC41",
        title: "KC41: Multiplication Rule (Different Bases, Same Exponent)",
        motivation: "KC 4.1: The Power Uniform\nRoohi sees $2^3 \\times 5^3$ and says, 'They aren't from the same family, but they are wearing the same hat!'",
        content: "Rule: $a^m \\times b^m = (ab)^m$",
        worked_examples: [
            "Problem: Simplify 2^3 * 5^3\nSteps:\nMultiply bases: 2x5=10\nFinal Answer: 10^3",
            "Problem: Simplify 3^4 * 7^4\nSteps:\nMultiply bases: 3x7=21\nFinal Answer: 21^4",
            "Problem: Simplify a^2 * b^2\nFinal Answer: (ab)^2",
            "Problem: Simplify 4^3 * 6^3\nSteps:\nMultiply bases: 4x6=24\nFinal Answer: 24^3 (Not 4^6)",
            "Problem: Simplify $2^5 \\times 5^5$.\nWorked Solution:\n$(2 \\times 5)^5 = 10^5$.\nFinal Answer: $10^5$"
        ]
    },
    {
        kc_id: "KC42",
        title: "KC42: Division Rule (Different Bases, Same Exponent)",
        motivation: "KC 4.2: Dividing Friends\nPari shows Roohi $10^2 \\div 5^2$ and says, 'Even in division, if the hats match, the bases can just divide normally first!'",
        content: "Rule: $a^m \\div b^m = \\left(\\frac{a}{b}\\right)^m$",
        worked_examples: [
            "Problem: Simplify 10^2 / 5^2\nSteps:\nDivide bases: 10/5=2\nFinal Answer: 2^2",
            "Problem: Simplify 12^3 / 3^3\nSteps:\nDivide: 12/3=4\nFinal Answer: 4^3",
            "Problem: Simplify x^5 / y^5\nFinal Answer: (x/y)^5",
            "Problem: Simplify 8^4 / 2^4\nSteps:\nDivide bases: 8/2=4\nFinal Answer: 4^4 (Not 8^0)",
            "Problem: Put $4^5 \\div 3^5$ into another form.\nWorked Solution:\nGroup under one exponent.\nFinal Answer: $\\left(\\frac{4}{3}\\right)^5$"
        ]
    },
    {
        kc_id: "KC43",
        title: "KC43: Zero Exponent Rule",
        motivation: "KC 4.3: The Zero Magic\nRoohi looks at $5^0$ and thinks it must be 0. Pari says, 'No, zero is a magic power!'",
        content: "Any non-zero number raised to the power 0 is always 1!",
        worked_examples: [
            "Problem: Evaluate 7^0\nFinal Answer: 1",
            "Problem: Evaluate (3 * 5)^0\nFinal Answer: 1",
            "Problem: Evaluate 1000^0\nFinal Answer: 1",
            "Problem: Evaluate 0^0\nFinal Answer: Undefined",
            "Problem: Simplify $(3^0 + 2^0) \\times 5^0$.\nWorked Solution:\n(1 + 1) x 1 = 2.\nFinal Answer: 2"
        ]
    },
    {
        kc_id: "KC44",
        title: "KC44: Combine Multiple Bases with Same Exponent",
        motivation: "KC 4.4: The Party Bracket\nRoohi sees $2^2 \\times 3^2 \\times 5^2$ and says, 'They are all wearing the same party hats!'",
        content: "Rule: $a^m \\times b^m \\times c^m = (abc)^m$",
        worked_examples: [
            "Problem: Simplify 2^2 * 3^2 * 5^2\nSteps:\nMultiply: 2x3x5=30\nFinal Answer: 30^2",
            "Problem: Simplify 4^3 * 2^3 * 5^3\nSteps:\nMultiply: 4x2x5=40\nFinal Answer: 40^3",
            "Problem: Simplify (a^4 * b^4) / c^4\nFinal Answer: (ab/c)^4",
            "Problem: Can we simplify 2^3 * 3^2?\nFinal Answer: Cannot combine further",
            "Problem: Simplify $[(2^2)^3 \\times 3^6] \\times 5^6$.\nWorked Solution:\n2^6 x 3^6 x 5^6 = 30^6.\nFinal Answer: $30^6$"
        ]
    },
    {
        kc_id: "KC51",
        title: "KC51: Identify Standard Form Structure",
        motivation: "KC 5.1: The Anatomy Checklist\nRoohi sees $59.8 \\times 10^2$ and thinks it looks official. Pari says, 'Wait! Standard form has strict rules.'",
        content: "Rule: $k \\times 10^n$, where $1 \\le k < 10$",
        worked_examples: [
            "Problem: Is 4.5 x 10^6 in standard form?\nFinal Answer: Yes",
            "Problem: Is 12 x 10^3 in standard form?\nSteps: k=12 (too big)\nFinal Answer: No",
            "Problem: Is 0.8 x 10^5 in standard form?\nSteps: k=0.8 (too small)\nFinal Answer: No",
            "Problem: Is 6.2 x 10^-3 in standard form?\nFinal Answer: Yes",
            "Problem: Pari shows Roohi three numbers and asks, \"Which of these is written in correct Standard Form?\"\n$0.42 \\times 10^5$, $4.2 \\times 10^5$, $42 \\times 10^5$\nWorked Solution:\n4.2 is between 1 and 10.\nFinal Answer: $4.2 \\times 10^5$ is the correct Standard Form."
        ]
    },
    {
        kc_id: "KC52",
        title: "KC52: Convert Large Numbers to Standard Form",
        motivation: "KC 5.2: The Decimal Jump\nRoohi asks, 'How do I get rid of all these zeros?' Pari shows her the 'Jump' trick.",
        content: "To turn a big number into Standard Form, jump the decimal left until only one digit is before it.",
        worked_examples: [
            "Problem: Convert 50,000 to standard form\nSteps: Move 4 jumps left\nFinal Answer: 5 x 10^4",
            "Problem: Convert 3,200,000\nSteps: Move 6 jumps left\nFinal Answer: 3.2 x 10^6",
            "Problem: Convert 507,000\nSteps: Move 5 jumps left\nFinal Answer: 5.07 x 10^5",
            "Problem: Convert 900\nFinal Answer: 9 x 10^2",
            "Problem: Express $3,430,000$ in Standard Form.\nWorked Solution:\n6 jumps to the left.\nFinal Answer: $3.43 \\times 10^6$"
        ]
    },
    {
        kc_id: "KC53",
        title: "KC53: Comparing Numbers Using Standard Form",
        motivation: "KC 5.3: Battle of the Giants\nRoohi wants to know if the Earth is heavier than Uranus. Pari says, 'Don't count the zeros! Just look at the exponents.'",
        content: "Look at the Power first. If equal, compare coefficients.",
        worked_examples: [
            "Problem: Which is larger: 2.3 x 10^5 or 4.1 x 10^6?\nFinal Answer: 4.1 x 10^6",
            "Problem: Compare 7.5 x 10^3 and 6.9 x 10^3\nFinal Answer: 7.5 x 10^3 is larger",
            "Problem: Compare 25 x 10^3 and 3 x 10^4\nSteps: 25 x 10^3 = 2.5 x 10^4\nFinal Answer: 3 x 10^4 is larger",
            "Problem: Which is smaller: 9.1 x 10^2 or 1.2 x 10^3?\nFinal Answer: 9.1 x 10^2",
            "Problem: Earth: $5.97 \\times 10^{24}$ kg, Uranus: $8.68 \\times 10^{25}$ kg\nWorked Solution:\n25 > 24.\nFinal Answer: Uranus has a greater mass."
        ]
    },
    {
        kc_id: "KC54",
        title: "KC54: Interpret Numbers Written in Scientific Notation",
        motivation: "KC 5.4: The Time Traveler\nPari finds a note that says $7.03 \\times 10^5$. Roohi says, 'Let's bring this number back to the real world!'",
        content: "Move the decimal right $n$ places to return to normal notation.",
        worked_examples: [
            "Problem: Convert 3.4 x 10^3\nFinal Answer: 3400",
            "Problem: Convert 6.25 x 10^4\nFinal Answer: 62,500",
            "Problem: Convert 7.03 x 10^5\nFinal Answer: 703,000",
            "Problem: Convert 9.8 x 10^1\nFinal Answer: 98",
            "Problem: Convert $7.004 \\times 10^{10}$ back to a normal number.\nWorked Solution:\nMove decimal 10 places to the right.\nFinal Answer: $70,040,000,000$"
        ]
    }
];

// 3. Execution Logic
const refreshContent = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB...");

        await Content.deleteMany({});
        console.log("Old lessons cleared.");

        await Content.insertMany(kcsData);
        console.log(`Success! ${kcsData.length} units and subtopics updated with specific motivation, content, and worked examples.`);

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

refreshContent();