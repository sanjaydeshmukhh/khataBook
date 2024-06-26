// const express = require("express")
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.indexController = function (req, res) {
    res.render("index");
};

module.exports.registerController = function (req, res) {
    res.render("register");
};
module.exports.postRegisterController = async function (req, res) {
    let { email, username, name, password } = req.body;
    try{
    let user = await userModel.findOne({ email });
    if (user) return res.render("you already have an account, please login");

    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(password, salt);

    user = await userModel.create({ email, 
        name, 
        username, 
        password: hashed
     });

     let jwt = jwt.sign({id: user._id, email: user._email }, process.env.JWT_KEY)

     res.cookie("token", token)
     res.send("account created succesfully")
}
catch (err){
    res.send(err.message)
}
};
