const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://vansh1018sharma_db_user:ik3TMngmhQPWG90H@cluster0.rakdsml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ DB Connection Error:', err));

// Routes
app.use('/api/products', productRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
