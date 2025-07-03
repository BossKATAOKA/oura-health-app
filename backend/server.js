const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(cors());
app.use(express.json());
app.use(limiter);

const ouraRoutes = require('./routes/oura');
app.use('/api/oura', ouraRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Oura Health API Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});