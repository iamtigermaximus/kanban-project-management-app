const express = require('express');
const {
  getAllCards,
  createCard,
  updateCardById,
  deleteCardById,
  getCardById,
} = require('../controllers/CardController');

const router = express.Router();

// Route to retrieve all data
router.get('/', getAllCards);

// Route to retrieve data by id
router.get('/', getCardById);

// Route to create new data
router.post('/', createCard);

// Route to update data by ID
router.put('/:id', updateCardById);

// Route to delete data by ID
router.delete('/:id', deleteCardById);

module.exports = router;
