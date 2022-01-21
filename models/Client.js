const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  nama_pasien: {
    type: String,
    trim: true,
    required: true,
  },
  nik: {
    type: String,
    trim: true,
    required: true,
  },
  jenis_kelamin: {
    type: String,
    trim: true,
    required: true,
  },
  alamat: {
    type: String,
    trim: true,
  },
  no_hp: {
    type: String,
    trim: true,
  },
  unitkerja_fakultas: {
    type: String,
    trim: true,
    required: true,
  },
  onset: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
  tindakan: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Client", clientSchema);
