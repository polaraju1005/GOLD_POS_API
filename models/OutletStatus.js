const mongoose = require('mongoose');

const OutletStatusSchema = new mongoose.Schema({
  outlet_id: String,
  status: String, // e.g., open, closed, maintenance
  updated_at: String,
  reason: String,
  headers: Object,
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('OutletStatus', OutletStatusSchema);
