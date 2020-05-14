var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    ques: [String],

    ans: [String]
});

module.exports = mongoose.model('User', userSchema);