const mongoose = require('mongoose');

const OrderStatusUpdateSchema = new mongoose.Schema({
  order_id: { type: String, required: true },
  store_id: { type: String, required: true },          
  new_status: { type: String, required: true },         
  updated_at: { type: String },                         
  reason: { type: String },
  headers: { type: Object },
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('OrderStatusUpdate', OrderStatusUpdateSchema);
