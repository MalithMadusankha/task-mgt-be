const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    Tid: { type: String, required: true, },
    Taskname: { type: String, required: true },
    Taskcategory: { type: String, required: true },
    Modified: { type: Date, required: true },
    Description: { type: String, required: true },
    status: { type: String, required: true },

}, {
    timestamps: true,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;