const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const validateApiKey = require('../middlewares/auth');

router.post('/place', validateApiKey, async (req, res) => {
  try {
    const { order_id, store_id, items } = req.body;

    if (!order_id || !store_id || !Array.isArray(items)) {
      return res.status(400).json({
        error: 'Missing required fields: order_id, store_id, or items'
      });
    }

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
