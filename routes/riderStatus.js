const express = require('express');
const router = express.Router();
const RiderStatus = require('../models/RiderStatus');
const validateApiKey = require('../middlewares/auth');

router.post('/rider-status', validateApiKey, async (req, res) => {
  const { store_id, order_id, status } = req.body;

  if (!store_id || !order_id || !status) {
    return res.status(400).json({
      error: 'Missing required fields: store_id, order_id, or status'
    });
  }

  try {
    const update = new RiderStatus({
      ...req.body,
      headers: req.headers
    });

    await update.save();
    res.json({ status: 'rider status received' });
  } catch (err) {
    console.error('Error saving rider status:', err);
    res.status(500).json({ error: 'Failed to log rider status' });
  }
});

module.exports = router;
