const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/place', async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      headers: req.headers
    });
    await order.save();
    res.json({ status: 'order received' });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Failed to log order' });
  }
});

module.exports = router;
