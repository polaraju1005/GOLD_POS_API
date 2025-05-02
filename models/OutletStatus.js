const mongoose = require('mongoose');

const OutletStatusSchema = new mongoose.Schema({
  store_id: { type: String, required: true },           // Zomato's store ID                         // Optional: your internal ID
  status: { type: String, required: true },             // e.g., open, closed, maintenance
  updated_at: { type: String },
  reason: { type: String },
  headers: { type: Object },
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('OutletStatus', OutletStatusSchema);
