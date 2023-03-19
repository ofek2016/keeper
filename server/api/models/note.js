const mongoose = require('mongoose');

const notesSchama = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String },
    content: { type: String},
});

module.exports = mongoose.model('Article', notesSchama);