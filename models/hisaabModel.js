const mongoose = require("mongoose")

const hisaabModel = mongoose.Schema({
    title: String,
    description: String, 
    user: mongoose.Schema.Types.ObjectId,
    editable: Boolean,
    shareable: Boolean,
    encrypted: Boolean,
    passcode: Number
})

module.exoorts = mongoose.model("hisaab", hisaabModel)