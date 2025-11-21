const express = require("express");
const cors = require('cors');
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/todos', todoRoutes);

module.exports = app;