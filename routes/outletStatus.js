const express = require('express');
const router = express.Router();
const OutletStatus = require('../models/OutletStatus');
const validateApiKey = require('../middlewares/auth');

router.post('/status', validateApiKey, async (req, res) => {
  const { store_id, status } = req.body;

  if (!store_id || !status) {
    return res.status(400).json({ error: 'Missing required fields: store_id or status' });
  }

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
