// Schema for the report incident

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var reportSchema = new Schema({
    reportID: String,
    reportedBy: String,
    incidentName: String,
    location: {
        lat:Number,
        lng:Number
    },
    files: String,
    casualties: {
        red: Number,
        yellow: Number,
        green: Number,
        black: Number
    },
    structuralDamage: String,
    fire: String,
    utilities: String,
    hazmat: String,
    rescueteam:String,
    others: String
});

module.exports = mongoose.model('report', reportSchema);