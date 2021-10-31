const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    author:{
        type: String
    },
        body:{
         type: String
        },
    





});

Schema.exports = mongoose.model('Blog',BlogSchema)