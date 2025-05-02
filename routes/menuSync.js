const express = require('express');
const router = express.Router();
const MenuSync = require('../models/MenuSync');

router.post('/menu-sync', async (req, res) => {
  try {
    const {
      store_id,
      sync_status,
      timestamp,
      error_details
    } = req.body;

    const entry = new MenuSync({
      store_id,
      sync_status,
      timestamp,
      error_details,
      headers: req.headers
    });

    await entry.save();
    res.json({ status: 'received' });
  } catch (err) {
    console.error('Error saving menu sync:', err);
    res.status(500).json({ error: 'Failed to log menu sync data' });
  }
});

module.exports = router;
