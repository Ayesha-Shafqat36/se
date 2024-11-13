const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');       // Import authentication routes
const productRoutes = require('./routes/products'); // Import product routes

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// Use routes for authentication and products
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
