const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    todo: String,
    isCompleted: Boolean
})

const task = mongoose.model('task', taskSchema);

module.exports = task