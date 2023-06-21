const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  id: Number,
  completed: Boolean,
  text: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
