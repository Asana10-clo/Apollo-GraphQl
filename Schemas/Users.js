const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    Username:{
        type: String,
        required: true,
        unique: true
    },

    Password:{
        type: String,
        required: true,
        unique: true
    },

    Email:{
        type: String,
        required: true,
        unique: true
    }
    


});    

    Schema.exports = mongoose.model('Users',UsersSchema);




