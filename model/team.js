// @author Sreevani Anoohya Tadiboina
//   This page refers to development of schema for the team model

const mongoose = require("mongoose")
const applicant = require("./applicant")
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamID: String,
    incidentID: String,
    leader: String,
    asstLeader: String,
    isActive: {
        type: Boolean,
        default: 'true',
      },
    teamName: String,
    members: [{
        firstName: String,
        lastName: String,
        email: String,
        county: String
    }]
});

module.exports = mongoose.model('team', teamSchema);