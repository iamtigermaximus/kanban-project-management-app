// Import the Data model/schema
const Category = require('../models/Category');

// Controller function to retrieve all data
exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Categories', error });
  }
};

// Controller function to retrieve project by id
exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create new data
exports.createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const createdCategory = await Category.create(newCategory);
    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Category', error });
  }
};

// Controller function to update data by ID
exports.updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const newCategory = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, newCategory, {
      new: true,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Category', error });
  }
};

// Controller function to delete data by ID
exports.deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndRemove(id);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Category', error });
  }
};
