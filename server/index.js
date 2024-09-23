const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

require('dotenv').config();
require('./config/db');

const app = express();

// using CORS middleware with specific origin
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
