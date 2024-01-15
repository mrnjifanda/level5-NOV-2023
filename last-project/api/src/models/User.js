const { Schema, model } = require('mongoose');
const userSchema = new Schema({
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
const User = model('user', userSchema);
User.createCollection();

module.exports = User;
