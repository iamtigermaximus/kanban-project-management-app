// Import the Data model/schema
const Project = require('../models/Project');

// Controller function to retrieve all data
exports.getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects', error });
  }
};

// Controller function to retrieve project by id
exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create new data
exports.createProject = async (req, res) => {
  try {
    const newProject = req.body;
    const createdProject = await Project.create(newProject);
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
};

// Controller function to update data by ID
exports.updateProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const newProject = req.body;
    const updatedProject = await Data.findByIdAndUpdate(id, newProject, {
      new: true,
    });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Project', error });
  }
};

// Controller function to delete data by ID
exports.deleteProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndRemove(id);
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Project', error });
  }
};
