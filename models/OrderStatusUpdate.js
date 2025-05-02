const mongoose = require('mongoose');

const OrderStatusUpdateSchema = new mongoose.Schema({
  order_id: String,
  new_status: String,         // e.g., accepted, preparing, delivered
  updated_at: String,
  reason: String,
  headers: Object,
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('OrderStatusUpdate', OrderStatusUpdateSchema);
