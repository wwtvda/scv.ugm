const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  pelaksana: {
    type: String,
    trim: true,
    required: true,
  },
  tanggal: {
    type: String,
    trim: true,
  },
  lokasi: {
    type: String,
  },
  jenis: {
    type: String,

  },
  jumlah: {
    type: String,

  },
  total: {
    type: String,

  },
  deskripsi: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
