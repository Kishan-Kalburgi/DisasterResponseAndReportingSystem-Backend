const mongoose = require("mongoose")

var applicantSchema = new mongoose.Schema({
    firstName:  String,
    lastName: String,
    email:   String,
    dob: { type: Date, default: Date.now },
    mobileNumber: String,
    address1: String,
    address2: String,
    county: String,
    city: String,
    state: String,
    country: String,
    skills: String,
    licenseNumber: String,
    files: String,
    limitations: String,
    pushNotification: String,
    // newField:String,
    role: { type: String, default: "Applicant" }
});

module.exports = mongoose.model('applicant', applicantSchema);



