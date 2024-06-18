const express = require("express")

const indexController = {
    index: (req, res) => {
        res.send("Welcome to the Home Page!");
    },
    
};

module.exports = indexController;
