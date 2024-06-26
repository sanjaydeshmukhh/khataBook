const express = require("express");
const router = express.Router();
const {indexController, registerController}  = require("../controllers/indexController");

router.get("/", indexController)
router.get("/register", registerController)

module.exports = router;
