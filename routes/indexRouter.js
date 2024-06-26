const express = require("express");
const router = express.Router();
const {indexController, registerController, postRegisterController}  = require("../controllers/indexController");

router.get("/", indexController)
router.get("/register", registerController)
router.post("/register", postRegisterController)


module.exports = router;
