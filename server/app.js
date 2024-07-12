const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// MongoDB connection, middleware declarations
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connected successfully!'))
  .catch(err => console.log('something goes wrong for mongodb connection', err));

app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000/',
}));
app.use(express.json());

// Routes
app.use('/', require('./routes/url'));

// Server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
