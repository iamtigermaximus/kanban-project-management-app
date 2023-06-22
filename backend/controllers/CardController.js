// Import the Data model/schema
const Card = require('../models/Card');

// Controller function to retrieve all data
exports.getAllCards = async (req, res) => {
  try {
    const allCards = await Card.find();
    res.status(200).json(allCards);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Cards', error });
  }
};

// Controller function to retrieve card by id
exports.getCardById = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    console.error('Error fetching card:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create new data
exports.createCard = async (req, res) => {
  try {
    const newCard = req.body;
    const createdCard = await Card.create(newCard);
    res.status(201).json(createdCard);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Card', error });
  }
};

// Controller function to update data by ID
exports.updateCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const newCard = req.body;
    const updatedCard = await Card.findByIdAndUpdate(id, newCard, {
      new: true,
    });
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Card', error });
  }
};

// Controller function to delete data by ID
exports.deleteCardById = async (req, res) => {
  try {
    const { id } = req.params;
    await Card.findByIdAndRemove(id);
    res.status(200).json({ message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Card', error });
  }
};
