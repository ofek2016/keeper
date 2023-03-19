const Notes = require('../models/note');
const mongoose =require('mongoose');

module.exports = {
    getAllNotes:  (req, res) => { 
        Notes.find().then((note) => {
           res.status(200).send(note)
        }).catch(error => {
            res.status(500).json({ error })
        });
    },
    createNote: (req, res) => {

        const { title, content } = req.body
        const note = new Notes({
            _id: new mongoose.Types.ObjectId(),
            title,
            content,
        });
        note.save().then(() => {
            res.status(200).json({
                massage: 'Created note'
            })
        }).catch((error) => {
            res.status(500).json({ error })
        })

    },
    deleteNote: (req, res) => {
        const noteId = req.params.id
        Notes.deleteOne({ _id: noteId }).then((note) => {
            res.status(200).json({
                massage: `Delete  Note`
            })
        }).catch(error => {
            res.status(500).json({ error })
        });
    },
}

