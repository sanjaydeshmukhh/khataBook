const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/KhaataBook`);

const userModel = mongoose.Schema({
    username: String,
    name: String, 
    email: String,
    password: String,
    hisaab: mongoose.Schema.Types.ObjectId,

});

module.exports = mongoose.model("User", userModel);
