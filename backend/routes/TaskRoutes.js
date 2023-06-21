const express = require('express');
const {
  getAllTasks,
  createTask,
  updateTaskById,
  deleteTaskById,
  getTaskById,
} = require('../controllers/TaskController');

const router = express.Router();

// Route to retrieve all data
router.get('/', getAllTasks);

// Route to retrieve data by id
router.get('/', getTaskById);

// Route to create new data
router.post('/', createTask);

// Route to update data by ID
router.put('/:id', updateTaskById);

// Route to delete data by ID
router.delete('/:id', deleteTaskById);

module.exports = router;
