const express = require("express")

module.exports.indexController = function(req, res){
    res.render("index")
}

module.exports.registerController = function(req, res){
    res.render("register")
}

