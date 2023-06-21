const express = require('express');
const {
  getAllCategories,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
  getCategoryById,
} = require('../controllers/CategoryController');

const router = express.Router();

// Route to retrieve all data
router.get('/', getAllCategories);

// Route to retrieve data by id
router.get('/', getCategoryById);

// Route to create new data
router.post('/', createCategory);

// Route to update data by ID
router.put('/:id', updateCategoryById);

// Route to delete data by ID
router.delete('/:id', deleteCategoryById);

module.exports = router;
