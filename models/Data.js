const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  type: String,
  value: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', DataSchema);
