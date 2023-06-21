const mongoose = require('mongoose');
const Category = require('./Category');

// Define the schema for the "data" document
const projectSchema = new mongoose.Schema({
  id: Number,
  name: String,
  data: [Category.schema],
});

// Create the "Data" model using the dataSchema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
