const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/config/db");
require("dotenv").config();

const authenticationRoutes = require("./src/routes/authRoutes");
const projectRoutes =require('./src/routes/projectRoutes');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authenticationRoutes);
app.use('/api/project', projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started successfullay at ${PORT}`);
});
