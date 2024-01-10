const Task = require('../models/task.model');

const create = async (req, res) => {

    const data = req.body;
    const task = new Task(data);
    await task.save();

    res.status(201).json({
        status_code: 201,
        status: 'Created',
        message: 'New task created !!!',
        data: {}
    });
}

const findOne = async  (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (task) {
        res.json({
            status_code: 200,
            status: 'OK',
            message: 'Task details',
            data: task
        });
    } else {
        res.json({
            status_code: 404,
            status: 'Not found',
            message: 'Task with id: ' + id + 'not found',
            data: null
        });
    }
}

const find = async (req, res) => {
    const tasks = await Task.find();
    res.json({
        status_code: 200,
        status: 'Ok',
        message: 'All tasks',
        data: tasks
    });
}

const remove = async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.json({
        status_code: 200,
        status: 'Ok',
        message: 'Task delete successfuly',
        data: null
    });
}

module.exports = { create, findOne, find, remove };