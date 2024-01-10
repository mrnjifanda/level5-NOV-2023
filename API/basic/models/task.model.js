const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: String,
    description: String,
    due_date: Date
});

const Task = model('task', taskSchema);
Task.createCollection();

module.exports = Task;
