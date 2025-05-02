const mongoose = require('mongoose');

const MenuSyncSchema = new mongoose.Schema({
  store_id: String,
  sync_status: String,
  timestamp: String,
  error_details: String,
  headers: Object,
  received_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('MenuSync', MenuSyncSchema);
