// Import the Data model/schema
const Task = require('../models/Task');

// Controller function to retrieve all data
exports.getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Tasks', error });
  }
};

// Controller function to retrieve task by id
exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create new data
exports.createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const createdTask = await Task.create(newTask);
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Task', error });
  }
};

// Controller function to update data by ID
exports.updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const newTask = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, newTask, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Task', error });
  }
};

// Controller function to delete data by ID
exports.deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndRemove(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Task', error });
  }
};
