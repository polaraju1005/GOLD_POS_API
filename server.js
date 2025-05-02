const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const menuSyncRoutes = require('./routes/menuSync');
const outletStatusRoutes = require('./routes/outletStatus');
const orderRoutes = require('./routes/order');
const orderStatusRoutes = require('./routes/orderStatus');
const riderStatusRoutes = require('./routes/riderStatus');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/callback', menuSyncRoutes);
app.use('/outlet', outletStatusRoutes);
app.use('/order', orderRoutes);
app.use('/order', orderStatusRoutes);
app.use('/order', riderStatusRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
