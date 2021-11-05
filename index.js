const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const app = express();

// Middlware
app.use(cors());
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5 // How many requests in windowMS
})
app.use(limiter);
app.set('trust proxy', 1);

// Set static folder
app.use(express.static('public'));

// Routes
app.use('/api', require('./routes/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.warn(`Server running on port : ${PORT}`));
