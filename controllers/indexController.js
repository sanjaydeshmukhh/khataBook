const express = require("express")

const indexController = {
    index: (req, res) => {
        res.send("Welcome to the Home Page!");
    },
    about: (req, res) => {
        res.send("Learn more about us here.");
    },
    login: (req, res) => {
        // Placeholder for login logic
        res.status(200).send("Logged in successfully.");
    },
};

module.exports = indexController;
