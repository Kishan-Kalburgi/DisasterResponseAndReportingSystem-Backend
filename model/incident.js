// Schema for the create incident

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var incidentSchema = new Schema({
  incidentID: String,
  incidentName: String,
  location: String,
  date: { type: Date, default: Date.now },
  time: String,
  description: String,
  isActive: {
    type: Boolean,
    default: 'true',
  }
});

module.exports = mongoose.model('incident', incidentSchema);