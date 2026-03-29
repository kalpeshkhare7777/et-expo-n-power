const mongoose = require('mongoose');
require('dotenv').config();

// 1. Define Schema
const ContentSchema = new mongoose.Schema({
    kc_id: String,
    title: String,
    motivation: String,
    content: String,
    worked_example: String
});

const Content = mongoose.model('Content', ContentSchema, 'contents');

// 2. Comprehensive Learning Content
const kcsData = [
    {
        kc_id: "KC1",
        title: "Unit 1: The \"Big Number\" Headache 🤯",
        motivation: "The Problem: Too Many Zeros!\nOne day, Roohi and Pari were testing each other's General Knowledge.\nRoohi asks: \"Pari, do you know how far the Sun is from the Earth?\"\nPari checks and gasps: \"It’s about 150,000,000,000 meters!\"\nThat is a massive number. Imagine if your teacher asked you to write that 10 times in your homework notebook. Your hand would hurt, and you’d probably forget a zero or two! 😵‍💫\nThe Confusion Begins...\nNext, Pari tries to trick Roohi: \"Okay, then what is closer to Earth? The Sun or Jupiter?\"\nRoohi googles the distances and sees:\nDistance to Sun: $150,000,000,000$ m\nDistance to Jupiter: $400,000,000,000$ m\nNow both are confused. At a quick glance, they look almost the same. Is it 10 zeros? 11 zeros?\nCounting zeros is boring, slow, and confusing.\nThe Big Question: Is there a way to write these giant numbers so they are easy to read, easy to compare, and don't make our heads spin?",
        content: "Nicknames for large numbers\nWhat if we have nicknames for very large numbers? \n 150,000,000,000 become 15x10^10.\nBut how do we use these nicknames? We will learn through this module",
        worked_example: ""
    },
    {
        kc_id: "KC11",
        title: "KC11: Identify Base and Exponent",
        motivation: "Meet the Base and the Exponent\nWhen we write a number in this \"Short-cut\" form, it looks like this: 10^3",
        content: "1. The Base (The Giant)\nThe big number at the bottom is the Base.\nWhat it is: The number that is being multiplied by itself.\nThink of it as: The \"Main Character\" of the story.\n2. The Exponent (The Boss)\nThe tiny number sitting on the shoulder of the base is the Exponent (or Power).\nWhat it is: It tells us how many times to multiply the base.\nThink of it as: The \"Boss\" telling the base how many times to show up.",
        worked_example: "The Problem: Roohi writes down $10^4$. She tells Pari, \"I know this is a shortcut for 10,000, but I keep forgetting which part is which!\". Can you help Pari label the parts?\nWorked Solution:\nThe Base: The big number at the bottom is 10. This is the \"Main Character\" that gets multiplied.\nThe Exponent: The small number at the top is 4. This is the \"Boss\" that tells us how many times to multiply.\nFinal Answer: Base = 10, Exponent = 4."
    },
    {
        kc_id: "KC12",
        title: "KC12: Convert Repeated Multiplication to Exponential Form",
        motivation: "KC 1.2: The Shrink Ray! (Repeated Multiplication)\nRoohi and Pari found out that writing big numbers is hard. But what if the number isn't just zeros? What if we have to write $5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5$?\nThat’s a lot of 5s! Pari has a trick to \"shrink\" this long line into a tiny box.",
        content: "The Rule of the \"Shrink Ray\"\nIf you see the same number multiplying itself over and over, you can use an Exponent.\nLook at this:\n$$2 \\times 2 \\times 2 \\times 2 \\times 2$$\nWho is the \"Main Character\"? It’s $2$. (This is our Base)\nHow many times does it appear? Count them... $1, 2, 3, 4, 5$. (This is our Exponent)\nThe Short Form: $2^5$\n(Read as: \"2 raised to the power 5\")\nLet’s Try with Different Bases\nIt doesn't just work for numbers. It works for letters (variables) too!\nLong Form (Expanded) | The \"Shrink\" Form (Exponential) | How to read it?\n$7 \\times 7 \\times 7$ | $7^3$ | 7 raised to the power 3 (or 7 cubed)\n$10 \\times 10 \\times 10 \\times 10$ | $10^4$ | 10 raised to the power 4\n$a \\times a$ | $a^2$ | $a$ raised to the power 2 (or $a$ squared)\n\n⚠️ Roohi’s Warning: Don't Get Fooled!\nPari asks: \"Roohi, can I shrink $2 \\times 2 \\times 3 \\times 3 \\times 3$?\"\nRoohi says: \"Yes, but you have to keep the families separate!\"\nThe 2s become: $2^2$\nThe 3s become: $3^3$\nTogether: $2^2 \\times 3^3$\nRemember: You can only combine numbers that are exactly the same. You can't turn $2 \\times 3$ into an exponent easily!",
        worked_example: "The Problem: Pari is tired of writing $6 \\times 6 \\times 6 \\times 6$. Roohi suggests using their \"Secret Code.\" How would they write this in exponential form?.\nWorked Solution:\nStep 1: Identify the number being multiplied. It is 6. This is our Base.\nStep 2: Count how many times 6 appears. $1, 2, 3, 4$. This is our Exponent.\nFinal Answer: The exponential form is $6^4$."
    },
    {
        kc_id: "KC13",
        title: "KC13: Expand Exponential Expressions",
        motivation: "KC1.3: The \"Zoom Out\" – Expanding Exponential Expressions\nRoohi and Pari have been using their \"Secret Code\" (Exponential Form) for a while now. But Roohi asks, \"Pari, what if we want to see the full multiplication again? How do we expand it?\".",
        content: "Pari smiles. \"That’s easy! We just look at the Exponent and let the Base repeat itself that many times.\".\nWhat is Expanded Form?\nExpanded form is writing a power as a long string of multiplication. It’s like \"zooming out\" to see all the factors.\nLet’s Practice Expanding!\nThe Secret Code (Exponential Form) | The \"Zoomed Out\" (Expanded Form)\n$3^4$ | $3 \\times 3 \\times 3 \\times 3$\n$a^3$ | $a \\times a \\times a$\n$5^2$ | $5 \\times 5$\nThe Mixed-Fruit Challenge 🍓🍎\nSometimes, different bases hang out together! Roohi sees $a^3b^2$ and wonders what to do.\nPari says: \"Just treat them like two different families. Expand the $a$'s first, then the $b$'s.\".\n$a^3$ means $a \\times a \\times a$.\n$b^2$ means $b \\times b$.\nTogether: $a^3b^2 = a \\times a \\times a \\times b \\times b$",
        worked_example: "The Problem: Roohi sees the code $a^3b^2$ in her textbook. She asks Pari, \"How do we 'Zoom Out' and see all the hidden factors?\".\nWorked Solution:\nStep 1: Look at the first family ($a^3$). The exponent 3 tells us to write '$a$' three times: $a \\times a \\times a$.\nStep 2: Look at the second family ($b^2$). The exponent 2 tells us to write '$b$' two times: $b \\times b$.\nStep 3: Put them together with multiplication signs.\nFinal Answer: $a \\times a \\times a \\times b \\times b$."
    },
    {
        kc_id: "KC14",
        title: "KC14: Evaluate Simple Powers",
        motivation: "KC 1.4: Finding the Value (The Grand Total)\nRoohi has a new challenge for Pari. \"Pari, we know $2^5$ is the secret code for $2 \\times 2 \\times 2 \\times 2 \\times 2$. But how much is that actually? If my dad gives me $2^5$ rupees, how much money is in my pocket?\"",
        content: "Pari smiles. \"To find the Value, we just have to solve the multiplication puzzle!\"\nHow to Evaluate a Power\nTo evaluate (or find the value of) a power, follow these two simple steps:\nStep 1 (Expand): Write the number out the long way.\nStep 2 (Multiply): Multiply the numbers one by one to get the final answer.\nExample: What is the value of $2^6$?\nExpand: $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2$\nMultiply: * $2 \\times 2 = 4$\n$4 \\times 2 = 8$\n$8 \\times 2 = 16$\n$16 \times 2 = 32$\n$32 \\times 2 = 64$ The Value is 64!\nSpecial Cases: The \"1\" and \"0\" Rules\nRoohi notices something interesting while practicing:\nThe Power of 1: Any number raised to the power of 1 is just the number itself.\nExample: $5^1 = 5$.\nThe Number 1: 1 raised to any power is always 1!\nExample: $1^5 = 1 \\times 1 \\times 1 \\times 1 \\times 1 = 1$.\nThe Zero Hero: Any non-zero number raised to the power of 0 is always 1.\nExample: $3^0 = 1$ or $7^0 = 1$.\nPractice with Roohi and Pari!\nCan you help Roohi find the values for these?\n💡 Pro-Tip for comparing!\nSometimes Roohi and Pari want to know which power is bigger without solving the whole thing.\nWhich is greater: $2^3$ or $3^2$?\n$2^3 = 2 \\times 2 \\times 2 = 8$\n$3^2 = 3 \\times 3 = 9$\nAnswer: $3^2$ is greater than $2^3$ because $9 > 8$!",
        worked_example: "The Problem: Pari challenges Roohi: \"I'll give you $2^6$ chocolates if you can tell me exactly how many that is!\". How many chocolates does Roohi get?.\nWorked Solution:\nStep 1 (Expand): Write out the 2s. $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2$.\nStep 2 (Multiply):\n$2 \\times 2 = 4$\n$4 \\times 2 = 8$\n$8 \\times 2 = 16$\n$16 \\times 2 = 32$\n$32 \\times 2 = 64$\nFinal Answer: Roohi gets 64 chocolates!."
    },
    {
        kc_id: "KC15",
        title: "KC15: Express Numbers as Powers",
        motivation: "KC 1.5: Express Numbers as Powers (The Factor Tree)\nRoohi has the number 72. She wants to write it in exponential form, but she doesn’t know where to start. Pari says, \"We just need to break it down into its Prime Factors!\".",
        content: "The Strategy: Prime Factorization\nTo express a number as a power, we divide it by the smallest prime numbers (2, 3, 5, 7...) until we reach 1.\nLet's solve Roohi's problem (72):\n$72 \\div 2 = 36$\n$36 \\div 2 = 18$\n$18 \\div 2 = 9$\n$9 \\div 3 = 3$\n$3 \\div 3 = 1$\nNow, count the factors:\nWe used 2 three times $\\rightarrow 2^3$\nWe used 3 two times $\\rightarrow 3^2$\nThe Final Code: $72 = 2^3 \\times 3^2$. This is called the Product of Prime Factors form.\nPari’s Shortcut: The \"Atul Method\"\nSometimes, you can break a number into bigger chunks first if it's easier. Pari shows Roohi how to break down 1,000:\nStep 1: $1000 = 10 \\times 10 \\times 10$\nStep 2: We know $10 = 2 \\times 5$\nStep 3: So, $1000 = (2 \\times 5) \\times (2 \\times 5) \\times (2 \\times 5)$\nStep 4: Group the 2s and 5s: $2^3 \\times 5^3$\nBoth methods give the same answer!.",
        worked_example: "The Problem: Roohi has the number 72. She wants to turn it into an exponential code using prime numbers. Can you help her?\n\nWorked Solution:\nStep 1 (Divide by 2): $72 \\div 2 = 36 \\rightarrow 36 \\div 2 = 18 \\rightarrow 18 \\div 2 = 9$. (We used 2 three times) .\nStep 2 (Divide by 3): $9 \\div 3 = 3 \\rightarrow 3 \\div 3 = 1$. (We used 3 two times) .\nStep 3 (Write as powers):\nThe 2s become $2^3$.\nThe 3s become $3^2$.\nFinal Answer: $72 = 2^3 \\times 3^2$."
    },
    {
        kc_id: "KC2",
        title: "Unit 2: The Mystery of the Minus Sign 🕵️‍♀️",
        motivation: "Motivation: The \"Flip-Flop\" Secret\nRoohi and Pari are playing a game with a \"Magic Mirror.\"\nRoohi says: \"I know that $3 \\times 3$ is $9$. But what happens if the base is a negative number, like $(-3) \\times $(-3)?\"\nPari answers: \"Wait! I remember from our integers chapter—when we multiply two negatives, they turn positive! $(-3) \\times (-3) = 9$.\"\nRoohi frowns: \"But what if we multiply it three times? $(-3) \\times (-3) \\times (-3)$? Does it stay positive or flip back to negative?\"\nThis is the mystery of Negative Bases. Sometimes they result in a positive answer, and sometimes they stay negative. Let's help Roohi and Pari find the pattern!",
        content: "Negative bases follow a flip-flop rule. If the 'Boss' (exponent) is even, the result is positive. If odd, it stays negative.",
        worked_example: ""
    },
    {
        kc_id: "KC21",
        title: "KC21: Evaluate Powers of Negative Numbers",
        motivation: "KC 2.1: Evaluate Powers of Negative Numbers",
        content: "When the base is a negative integer, we still follow the same \"Expand and Multiply\" rule. We just have to be very careful with the signs!",
        worked_example: "The Problem: Evaluate $(-3)^2$ and $(-3)^3$.\nStep-by-Step Solution:\nFor $(-3)^2$:\nExpand: $(-3) \\times (-3)$\nMultiply: $3 \\times 3 = 9$. Since \"Minus $\\times$ Minus $=$ Plus\", the answer is $9$.\nFor $(-3)^3$:\nExpand: $(-3) \\times (-3) \\times (-3)$\nMultiply: We know $(-3) \\times (-3) = 9$. Now multiply that by the last $(-3)$.\n$9 \\times (-3) = -27$. Final Answer: $(-3)^2 = 9$ and $(-3)^3 = -27$."
    },
    {
        kc_id: "KC22",
        title: "KC22: Determine Sign of Result Based on Exponent",
        motivation: "KC 2.2: The Even-Odd Rule (Determine the Sign)",
        content: "Pari notices a shortcut! \"Roohi, look! When the exponent was 2 (even), the answer was positive. When it was 3 (odd), the answer was negative!\"\nThe Rule:\nEven Exponent (2, 4, 6...): The result is always Positive (+).\nOdd Exponent (1, 3, 5...): The result is always Negative (-).",
        worked_example: "The Problem: Without solving, tell the sign of $(-5)^4$ and $(-2)^7$.\nSolution:\nIn $(-5)^4$: The exponent is 4, which is an even number. So, the result will be Positive.\nIn $(-2)^7$: The exponent is 7, which is an odd number. So, the result will be Negative."
    },
    {
        kc_id: "KC23",
        title: "KC23: Write Variable Products Using Exponents",
        motivation: "KC 2.3: Writing Variable Products",
        content: "Sometimes we don't have numbers; we have letters (variables)! We treat them the exact same way.",
        worked_example: "The Problem: Write $a \\times a \\times a \\times b \\times b$ in exponential form.\nStep-by-Step Solution:\nCount the $a$'s: There are 3. So we write $a^3$.\nCount the $b$'s: There are 2. So we write $b^2$.\nJoin them: We write them side-by-side. Final Answer: $a^3b^2$ (read as \"$a$ cubed $b$ squared\")."
    },
    {
        kc_id: "KC24",
        title: "KC24: Distinguish Between ((−a)^n) and (−a^n)",
        motivation: "KC 2.4: The Bracket Trap! Distinguish between $(-a)^n$ and $-a^n$",
        content: "This is a trick question Roohi found! \"Is $(-3)^2$ the same as $-3^2$?\"\nPari explains: \"No! The brackets change everything.\"\n$(-3)^2$: The bracket says the minus belongs to the 3.\nMeaning: $(-3) \\times (-3) = \\mathbf{9}$.\n$-3^2$: There are no brackets, so the minus is just standing outside waiting. Only the 3 is squared.\nMeaning: $-(3 \\times 3) = \\mathbf{-9}$.",
        worked_example: "The Problem: Evaluate $(-5)^2$ and $-5^2$.\nSolution:\n$(-5)^2 = (-5) \\times (-5) = 25$.\n$-5^2 = -(5 \\times 5) = -25$.\nFinal Answer: They are not the same! Always look for the brackets."
    },
    {
        kc_id: "KC3",
        title: "Unit 3: The Secret Laws of the Base 👑",
        motivation: "Motivation: The Math Superpowers\nRoohi and Pari are looking at a huge math problem: $2^3 \\times 2^4$.\nRoohi says: \"Do I really have to solve $2 \\times 2 \\times 2$ and then multiply it by $2 \\times 2 \\times 2 \\times 2$? That’s so much work!\"\nPari has a realization: \"Wait! In both numbers, the Base is the same (it's 2). There must be a shortcut to handle these 'Same-Base' families without doing all the long multiplication.\"\nWelcome to the Laws of Exponents! These are the \"Superpowers\" that allow you to combine or shrink complex expressions in seconds.",
        content: "Welcome to Math Superpowers! When families match, we add or subtract the powers instead of doing long math.",
        worked_example: ""
    },
    {
        kc_id: "KC31",
        title: "KC31: Multiplication Law of Exponents (Same Base)",
        motivation: "KC 3.1: The Multiplication Law (Adding the Powers)",
        content: "When you multiply two powers that have the same base, you don't need to multiply the numbers. You just add their exponents!\nThe Rule: $a^m \\times a^n = a^{m+n}$",
        worked_example: "The Problem: Simplify $3^2 \\times 3^4 \\times 3^8$.\nStep-by-Step Solution:\nCheck the Base: All bases are 3. They are the same family!\nApply the Law: Keep the base and add the exponents: $2 + 4 + 8$.\nCalculate: $3^{2+4+8} = 3^{14}$. Final Answer: $3^{14}$"
    },
    {
        kc_id: "KC32",
        title: "KC32: Division Law of Exponents (Same Base)",
        motivation: "KC 3.2: The Division Law (Subtracting the Powers)",
        content: "When you divide powers with the same base, you do the opposite of multiplication. You subtract the exponent of the denominator from the exponent of the numerator.\nThe Rule: $a^m \\div a^n = a^{m-n}$ (where $m > n$)",
        worked_example: "The Problem: Simplify $6^{15} \\div 6^{10}$.\nStep-by-Step Solution:\nCheck the Base: Both are 6.\nApply the Law: Subtract the powers: $15 - 10$. Final Answer: $6^5$"
    },
    {
        kc_id: "KC33",
        title: "KC33: Power of a Power Law",
        motivation: "KC 3.3: Power of a Power (Multiplying the Powers)",
        content: "What happens if a power itself is raised to another power? Like $(2^3)^2$? Roohi calls this the \"Double Boss\" rule. When one power sits on top of another, they multiply.\nThe Rule: $(a^m)^n = a^{m \\times n}$",
        worked_example: "The Problem: Simplify $(5^3)^7$.\nStep-by-Step Solution:\nIdentify the Powers: The base is 5. The internal power is 3 and the external power is 7.\nApply the Law: Multiply them: $3 \\times 7$. Final Answer: $5^{21}$"
    },
    {
        kc_id: "KC34",
        title: "KC34: Combine Multiple Same-Base Operations",
        motivation: "KC 3.4: Combine Multiple Same-Base Operations",
        content: "Now, let's use all our superpowers together! Sometimes a problem has both multiplication and division.",
        worked_example: "The Problem: Simplify $(2^{20} \\div 2^{15}) \\times 2^3$.\nStep-by-Step Solution:\nSolve the Brackets First (Division): $2^{20} \\div 2^{15}$. Using the Division Law ($20 - 15$), we get $2^5$.\nNow Multiply: $2^5 \\times 2^3$.\nApply Multiplication Law: Add the powers ($5 + 3$). Final Answer: $2^8$"
    },
    {
        kc_id: "KC4",
        title: "Unit 4: Different Families, Same Power! 👯‍♂️",
        motivation: "Motivation: The Power Matchmaker\nRoohi and Pari are looking at $2^3 \\times 3^3$.\nPari says: \"Oh no! The bases are different (2 and 3). We can't use our 'Addition' superpower from before.\"\nRoohi notices something else: \"But look! The Exponents are exactly the same (both are 3). It’s like they are wearing the same uniform. Maybe we can group them together?\"\nWhen the bases are different but the \"Boss\" (exponent) is the same, we can combine the bases into a single bracket!",
        content: "If the 'Boss' is the same, different bases can join forces inside a single bracket.",
        worked_example: ""
    },
    {
        kc_id: "KC41",
        title: "KC41: Multiplication Rule (Different Bases, Same Exponent)",
        motivation: "KC 4.1: The Multiplication Rule (Bases Multiply)",
        content: "If two different bases are raised to the same power, you can multiply the bases first and keep the power common.\nThe Rule: $a^m \\times b^m = (ab)^m$",
        worked_example: "The Problem: Simplify $2^5 \\times 5^5$.\nStep-by-Step Solution:\nCheck the Exponent: Both are 5.\nApply the Law: Multiply the bases $(2 \\times 5)$ and keep the power 5.\nCalculate: $(10)^5$. Final Answer: $10^5$"
    },
    {
        kc_id: "KC42",
        title: "KC42: Division Rule (Different Bases, Same Exponent)",
        motivation: "KC 4.2: The Division Rule (Bases Divide)",
        content: "Just like multiplication, if you are dividing two different bases with the same power, you can divide the bases under one common exponent.\nThe Rule: $a^m \\div b^m = \\left(\\frac{a}{b}\\right)^m$",
        worked_example: "The Problem: Put $4^5 \\div 3^5$ into another form.\nStep-by-Step Solution:\nCheck the Exponent: Both are 5.\nApply the Law: Group the division inside a bracket. Final Answer: $\\left(\\frac{4}{3}\\right)^5$"
    },
    {
        kc_id: "KC43",
        title: "KC43: Zero Exponent Rule",
        motivation: "KC 4.3: The Zero Exponent Rule (The Number 1 Magic)",
        content: "Roohi finds a very strange power: $3^0$. She asks, \"Does this mean 3 is multiplied zero times? Is the answer 0?\"\nPari explains: \"Actually, any non-zero number raised to the power 0 is always 1!\"\nThe Rule: $a^0 = 1$",
        worked_example: "The Problem: Simplify $(3^0 + 2^0) \\times 5^0$.\nStep-by-Step Solution:\nApply the Zero Rule: We know $3^0 = 1$, $2^0 = 1$, and $5^0 = 1$.\nSubstitute: $(1 + 1) \\times 1$.\nCalculate: $2 \\times 1 = 2$.\nFinal Answer: 2"
    },
    {
        kc_id: "KC44",
        title: "KC44: Combine Multiple Bases with Same Exponent",
        motivation: "KC 4.4: Combine Multiple Bases with Same Exponent",
        content: "Now let's see how Roohi and Pari handle variables and numbers together!",
        worked_example: "The Problem: Simplify $[(2^2)^3 \\times 3^6] \\times 5^6$.\nStep-by-Step Solution:\nPower of a Power First: $(2^2)^3$ becomes $2^{2 \\times 3} = 2^6$.\nGroup the Same Exponents: Now we have $2^6 \\times 3^6 \\times 5^6$.\nApply Multiplication Rule: Since all exponents are 6, multiply the bases: $(2 \\times 3 \\times 5)^6$.\nFinal Step: $(30)^6$. Final Answer: $30^6$"
    },
    {
        kc_id: "KC5",
        title: "Unit 5: The Scientist’s Shortcut (Standard Form) 🌌",
        motivation: "Motivation: Solving the Zero Mystery\nRemember the headache Roohi and Pari had at the beginning?\nDistance to Sun: $150,000,000,000$ m\nMass of Earth: $5,970,000,000,000,000,000,000,000$ kg\nRoohi says: \"It's impossible to compare these! I get dizzy just counting the zeros.\"\nPari discovers the secret: \"Scientists use Standard Form. It’s a way to write any giant number using a small decimal and a power of 10.",
        content: "Standard Form makes comparing stars and cells easy. It uses a decimal between 1 and 10 and a power of 10.",
        worked_example: ""
    },
    {
        kc_id: "KC51",
        title: "KC51: Identify Standard Form Structure",
        motivation: "KC 5.1: The Anatomy of Standard Form",
        content: "A number is in Standard Form only if it looks like this:\n$m \\times 10^n$\nThe Number ($m$): This must be between $1.0$ and $10.0$ (It can be 1, but it must be less than 10).\nThe Power ($10^n$): A power of 10 that tells us how many places the decimal moved.\nIs it Standard Form?\n$5.9 \\times 10^3$ ✅ (Yes! 5.9 is between 1 and 10).\n$59.8 \\times 10^2$ ❌ (No! 59.8 is too big).\n$0.59 \\times 10^4$ ❌ (No! 0.59 is too small).",
        worked_example: "The Problem: Pari shows Roohi three numbers and asks, \"Which of these is written in correct Standard Form?\"\n$0.42 \\times 10^5$\n$4.2 \\times 10^5$\n$42 \\times 10^5$\nWorked Solution:\nStep 1: Check the first number ($0.42 \\times 10^5$). The number $0.42$ is less than $1$. It is too small to be $m$.\nStep 2: Check the third number ($42 \\times 10^5$). The number $42$ is greater than $10$. It is too big to be $m$.\nStep 3: Check the second number ($4.2 \\times 10^5$). The number $4.2$ is between $1$ and $10$. It fits the rule perfectly.\nFinal Answer: $4.2 \\times 10^5$ is the correct Standard Form."
    },
    {
        kc_id: "KC52",
        title: "KC52: Convert Large Numbers to Standard Form",
        motivation: "KC 5.2: Converting Large Numbers (The Decimal Jump)",
        content: "To turn a big number into Standard Form, we imagine a decimal point at the very end and make it \"jump\" to the left until only one digit is left before the decimal.",
        worked_example: "The Problem: Express $3,430,000$ in Standard Form.\nStep-by-Step Solution:\nThe Goal: We want the number to look like $3.43$.\nCount the Jumps: From the end of the number, how many places do we move to get between 3 and 4?\n$3 \\leftarrow 4 \\leftarrow 3 \\leftarrow 0 \\leftarrow 0 \\leftarrow 0 \\leftarrow 0$\nThat’s 6 jumps to the left!\nWrite it out: The number of jumps becomes the exponent of 10. Final Answer: $3.43 \\times 10^6$"
    },
    {
        kc_id: "KC53",
        title: "KC53: Comparing Numbers Using Standard Form",
        motivation: "KC 5.3: Comparing Using Standard Form",
        content: "Standard Form makes comparing huge things as easy as comparing small numbers.",
        worked_example: "The Problem: Which is heavier?\nEarth: $5.97 \\times 10^{24}$ kg\nUranus: $8.68 \\times 10^{25}$ kg\nSolution:\nLook at the Power first: Uranus has $10^{25}$ and Earth has $10^{24}$.\nThe Verdict: Since 25 is greater than 24, Uranus is heavier! We don't even need to look at the decimal part. Final Answer: Uranus has a greater mass."
    },
    {
        kc_id: "KC54",
        title: "KC54: Interpret Numbers Written in Scientific Notation",
        motivation: "KC 5.4: Interpreting Standard Form (Expanding Back)",
        content: "What if a scientist gives Roohi a note that says $7.004 \\times 10^{10}$? How does she know the \"real\" number?",
        worked_example: "The Problem: Convert $7.004 \\times 10^{10}$ back to a normal number.\nStep-by-Step Solution:\nLook at the Power: $10^{10}$ tells us to move the decimal 10 places to the right.\nMove the Decimal:\nMoving 3 places gets us past the digits: $7004$.\nWe still need to move 7 more places ($10 - 3 = 7$).\nFill with Zeros: Add 7 zeros at the end: $70,040,000,000$. Final Answer: $70,040,000,000$"
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