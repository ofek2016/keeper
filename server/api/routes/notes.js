const express = require('express');
const router = express.Router();
const { getAllNotes, createNote, deleteNote } = require("../controllers/notes");



router.get('/', getAllNotes);
router.post('/', createNote);
router.delete('/:id', deleteNote);

module.exports = router;