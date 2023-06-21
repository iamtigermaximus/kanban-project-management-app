const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./routes/ProjectRoutes');
const cardRoutes = require('./routes/CardRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');
const taskRoutes = require('./routes/TaskRoutes');

require('dotenv').config({ path: './config.env' });

const ATLAS_URI = process.env.ATLAS_URI;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/projects', projectRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/tasks', taskRoutes);

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log('Connected To Database'))
  .then(() => {
    app.listen(5500);
  })
  .catch((err) => console.log(err));
