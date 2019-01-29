const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb+srv://admin:admin@cluster0-zlyhn.mongodb.net/DRRS?retryWrites=true")    
    .then(() => {
        console.log("DB connected")
    }, err => {
        console.log("DB error"+  err)
    }
    )