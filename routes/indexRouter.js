const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

// Use the correct method from the controller
router.get("/", indexController.index);

router.get("/login", indexController.login)

module.exports = router;
