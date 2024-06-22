const mongoose = require("mongoose")

const hisaabModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true, // Removes whitespace from both ends of the string
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required"],
        ref: "User", // Reference to the User model
    },
    editable: {
        type: Boolean,
        default: true,
    },
    shareable: {
        type: Boolean,
        default: false,
    },
    encrypted: {
        type: Boolean,
        default: false,
    },
    passcode: {
        type: Number,
        required: [true, "Passcode is required"],
    },
});

module.exports = mongoose.model("hisaab", hisaabModel)