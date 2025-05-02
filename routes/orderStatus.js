const express = require('express');
const router = express.Router();
const OrderStatusUpdate = require('../models/OrderStatusUpdate');

router.post('/update-status', async (req, res) => {
  const { order_id, store_id, new_status } = req.body;

  if (!order_id || !store_id || !new_status) {
    return res.status(400).json({ error: 'Missing required fields: order_id, store_id, or new_status' });
  }

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