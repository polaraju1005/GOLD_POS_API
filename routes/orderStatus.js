const express = require('express');
const router = express.Router();
const OrderStatusUpdate = require('../models/OrderStatusUpdate');

router.post('/update-status', async (req, res) => {
  try {
    const statusUpdate = new OrderStatusUpdate({
      ...req.body,
      headers: req.headers
    });
    await statusUpdate.save();
    res.json({ status: 'order status updated' });
  } catch (err) {
    console.error('Error saving order status update:', err);
    res.status(500).json({ error: 'Failed to update order status' });
  }
});

module.exports = router;
