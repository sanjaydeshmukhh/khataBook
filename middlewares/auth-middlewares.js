const jwt = require("jsonwebtoken")

module.exports.isLoggedIn = async function(req, res, next){
    if(req.cookies.token){
        try {
           let decoded = jwt.verify(req.cookie.token, process.env.JWT_KEY);
           req.user = decoded;
           next();
        } catch (err) {
            return res.redirect("/")
        } 
    } else {
        return res.redirect("/")
    }
}

module.exports.redirectIfLoggedIn = function (req, res, next){
    if(req.cookies.token){
        try{
            let decoded =  jwt.verify(req.cookies.token, process.env.JWT_KEY)
            res.redirect("back")
        } 
        catch(err){
            return next();
        }

    } else return next();
}