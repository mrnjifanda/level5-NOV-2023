const isAuthUser =  true;

function Auth(req, res, next) {
    if (isAuthUser === true) {

        const user = {
            name: "Seven Academy",
            email: "seven@gmail.com"
        };

        req.user = user;
        next();
    }

    return res.redirect('/?error=Please login to access this page');
}

module.exports = Auth;