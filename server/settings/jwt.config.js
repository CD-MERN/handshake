const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
        if (err) {
            res.redirect('/')
            // res.status(401).json({ verified: false });
        } else {
            console.log('Authenticated');
            next();
        }
    });
}