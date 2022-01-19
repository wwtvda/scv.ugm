const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const leadSchema = new mongoose.Schema({
  nama_pasien: {
    type: String,
    required: true,
  },
  tempat: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Lead", leadSchema);
