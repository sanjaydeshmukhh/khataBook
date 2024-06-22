const express = require("express")

function index(req, res) {
    res.send("welcome to the home page")
}

// const indexController = {
//     index: (req, res) => {
//         res.send("Welcome to the Home Page!");
//     },
    
// };

module.exports = index;
