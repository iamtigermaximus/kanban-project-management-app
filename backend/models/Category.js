const mongoose = require('mongoose');
const Card = require('./Card');

const categorySchema = new mongoose.Schema({
  id: Number,
  categoryTitle: String,
  cards: [Card.schema],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
