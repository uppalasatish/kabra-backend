const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    qty:{
        type: Number,
        required:true
    },
    unitprice:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Book", bookSchema);
