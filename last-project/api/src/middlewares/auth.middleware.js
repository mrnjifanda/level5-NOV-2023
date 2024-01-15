const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers['authorization'] ?? null;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({
        status: "Unauthorized",
        status_code: 401,
        message: ('This ressouce is protected, please loging')
    });

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {

        console.log(error);
        if (error) return res.status(401).json({
            status: "Unauthorized",
            status_code: 401,
            message: ('This ressouce is protected, please loging')
        });

        req.user = { "id": user.id };

        next();
    });

}

module.exports = authMiddleware;