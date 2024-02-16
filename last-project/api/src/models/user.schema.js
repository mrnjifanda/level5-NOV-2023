const { Schema } = require('mongoose');
module.exports = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: false,
        default: 'USER'
    },
    created_at: {
        type: Date,
        require: false,
        default: Date.now
    }
});