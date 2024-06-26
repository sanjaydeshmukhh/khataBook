const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: 3,
        maxlength: 30,
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        maxlength: 1024,
        select: false,
    },
    hisaab: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Hisaab ID is required"],
    },
});

module.exports = mongoose.model("User", userModel);
