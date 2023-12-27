const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('user', userSchema);
User.createCollection();
module.exports = User;