const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  order_id: String,
  outlet_id: String,
  customer_name: String,
  phone: String,
  address: String,
  total_amount: Number,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  placed_at: String,
  headers: Object,
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
