const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    username: String,
    name: String, 
    email: String,
    password: String,
    hisaab: mongoose.Schema.Types.ObjectId,

});

module.exports = mongoose.model("User", userModel);
