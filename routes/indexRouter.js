const express = require("express");
const router = express.Router();
const {indexController, registerController, registerPageController, loginController, logoutController}  = require("../controllers/indexController");

router.get("/", indexController)
router.get("/register", registerPageController)
router.get("/logut", logoutController)

router.post("/register", registerController)
router.post("/login", loginController)


module.exports = router;
