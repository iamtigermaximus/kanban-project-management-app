const express = require('express');
const {
  getAllProjects,
  createProject,
  updateProjectById,
  deleteProjectById,
  getProjectById,
} = require('../controllers/ProjectController');

const router = express.Router();

// Route to retrieve all data
router.get('/', getAllProjects);

// Route to retrieve data by id
router.get('/', getProjectById);

// Route to create new data
router.post('/', createProject);

// Route to update data by ID
router.put('/:id', updateProjectById);

// Route to delete data by ID
router.delete('/:id', deleteProjectById);

module.exports = router;
