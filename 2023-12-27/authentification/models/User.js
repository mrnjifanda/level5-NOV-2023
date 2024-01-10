const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firtsName: String,
    lastName: String,
    email: String,
    password: String,
    role: {
        type: String,
        require: false,
        default: 'USER'
    }
});

const User = model('user', userSchema);
User.createCollection();

module.exports = User;