const express = require('express');
const router = express.Router();
const RiderStatus = require('../models/RiderStatus');

router.post('/rider-status', async (req, res) => {
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
