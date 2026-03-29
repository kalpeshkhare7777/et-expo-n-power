const mongoose = require('mongoose');
require('dotenv').config();

// 1. Define Schemas (Must match the ones used to create the data)
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

// 2. Deletion Logic
const deleteOldData = async () => {
    try {
        // Connect to your DB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB...");

        // Delete all documents from the questions and content collections
        const qDeleted = await Question.deleteMany({});
        const cDeleted = await Content.deleteMany({});

        console.log(`Successfully deleted ${qDeleted.deletedCount} questions.`);
        console.log(`Successfully deleted ${cDeleted.deletedCount} content blocks.`);

        console.log("Database is now clean.");
        process.exit();
    } catch (err) {
        console.error("Error during deletion:", err);
        process.exit(1);
    }
};

deleteOldData();