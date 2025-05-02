const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  order_id: { type: String, required: true },
  store_id: { type: String, required: true },
  customer_name: { type: String },
  phone: { type: String },
  address: { type: String },
  total_amount: { type: Number },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  placed_at: { type: String },
  headers: { type: Object },
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
