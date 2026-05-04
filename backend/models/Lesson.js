const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    level: { type: String, required: true },
    category: {
        type: String,
        enum: ['Vocabulary', 'Grammar', 'Reading'],
        required: true
    },
    content: { type: String, required: true },
    examples: { type: [String], required: true },
    points: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lesson', lessonSchema);