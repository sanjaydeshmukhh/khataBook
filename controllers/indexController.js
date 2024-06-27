const jwt = require("jsonwebtoken"); 
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.indexController = function (req, res) {
    res.render("index");
};

module.exports.registerPageController = function (req, res) {
    res.render("register");
};

module.exports.registerController = async function (req, res) {
    let { email, username, name, password } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if (user)
            return res.render("you already have an account, please login");

        let salt = await bcrypt.genSalt(10);
        let hashed = await bcrypt.hash(password, salt);

        user = await userModel.create({
            email,
            name,
            username,
            password: hashed,
        });

        let token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_KEY
        );

        res.cookie("token", token); 
        res.send("account created successfully");
    } catch (err) {
        res.send(err.message);
    }
};


module.exports.loginController = async function (req, res) {
    let {email, password} = req.body;

    let user = await userModel.findOne({email}).select("+password");
    if(!user) return res.send("you do not have an account create first");

    let result = await bcrypt.compare(password, user.password);
    if(result){
         let token = jwt.sign(
             { id: user._id, email: user.email },
             process.env.JWT_KEY
         );

         res.cookie("token", token);
         res.send("account loggedin successfully");
    }
    else{
        res.send("your details are incorrect")
    }
}; 

module.exports.logoutController = function (req, res) {
    res.cookie("token", "")
    return res.redirect("/")
};