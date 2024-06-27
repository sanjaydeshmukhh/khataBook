const express = require("express");
const router = express.Router();
const {indexController, registerController, registerPageController, loginController, logoutController, profileController}  = require("../controllers/indexController");
const { isLoggedIn } = require("../middlewares/auth-middlewares");

router.get("/", indexController)
router.get("/register", registerPageController)
router.get("/logout", logoutController)

router.get("/profile",  isLoggedIn, profileController)

router.post("/register", registerController)
router.post("/login",loginController)


module.exports = router;
