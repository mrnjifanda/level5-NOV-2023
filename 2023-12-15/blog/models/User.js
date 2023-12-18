const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;