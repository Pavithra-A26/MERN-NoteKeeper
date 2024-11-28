const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: {
        required : true,
        type : String
    },
    content : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});

module.exports = mongoose.model('Note',NotesSchema);