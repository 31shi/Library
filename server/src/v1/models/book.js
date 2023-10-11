const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    completed: {
        type:Boolean,
        defalut: false,
    },
})

module.exports = mongoose.model('Book', bookSchema);