const authService = require('../services/auth.service');

const register = async (req, res, next) => {

    console.log(req.body);
    const user = await authService.register(req.body);
    if (user.error) {

        return res.status(400).json({
            status: "BAD REQUEST",
            status_code: 400,
            message: user.message,
            data: user.data ?? null
        });
    }

    res.status(201).json({
        status: "OK",
        status_code: 201,
        message: 'User create successfuly',
        data: user.data
    });
};

const login = async(req, res, next) => {

    const body = req.body;
    const token = await authService.login(body.email, body.password);
    if (token.error) {

        return res.status(400).json({
            status: "BAD REQUEST",
            status_code: 400,
            message: user.message,
            data: user.data ?? null
        });
    }

    res.status(200).json({
        status: "OK",
        status_code: 200,
        message: 'Login successfuly',
        data: token.token
    });
};

module.exports = { register, login }