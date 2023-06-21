const mongoose = require('mongoose');
const Task = require('./Task');

const cardSchema = new mongoose.Schema({
  id: Number,
  title: String,
  labels: [{ color: String, text: String }],
  date: String,
  tasks: [Task.schema],
  desc: String,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
