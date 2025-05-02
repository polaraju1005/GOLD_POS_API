const mongoose = require('mongoose');

const RiderStatusSchema = new mongoose.Schema({
  store_id: { type: String, required: true },       // Zomato-provided store ID
  order_id: { type: String, required: true },
  rider_id: { type: String },
  rider_name: { type: String },
  status: { type: String, required: true },         // e.g., picked up, en route, delivered
  updated_at: { type: String },
  headers: { type: Object },
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RiderStatus', RiderStatusSchema);
