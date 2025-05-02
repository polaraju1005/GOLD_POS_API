const express = require('express');
const router = express.Router();
const OutletStatus = require('../models/OutletStatus');

router.post('/status', async (req, res) => {
  try {
    const entry = new OutletStatus({
      ...req.body,
      headers: req.headers
    });
    await entry.save();
    res.json({ status: 'received' });
  } catch (err) {
    console.error('Error saving outlet status:', err);
    res.status(500).json({ error: 'Failed to log outlet status' });
  }
});

module.exports = router;
