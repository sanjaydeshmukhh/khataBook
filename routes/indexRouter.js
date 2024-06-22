const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController)
// Use the correct method from the controller
// router.get("/", indexController.index);


module.exports = router;
