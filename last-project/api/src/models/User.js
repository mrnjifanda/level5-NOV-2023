const { model } = require('mongoose');
const userSchema = require('./user.schema');

const User = model('user', userSchema);
User.createCollection();

module.exports = User;
