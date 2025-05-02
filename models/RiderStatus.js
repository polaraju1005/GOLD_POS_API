const mongoose = require('mongoose');

const RiderStatusSchema = new mongoose.Schema({
  order_id: String,
  rider_id: String,
  rider_name: String,
  status: String, // e.g., picked up, en route, delivered
  updated_at: String,
  headers: Object,
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RiderStatus', RiderStatusSchema);
