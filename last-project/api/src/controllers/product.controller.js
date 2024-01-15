const authService = require('../services/auth.service');

const all = async (req, res, next) => {

    const auth = await authService.getAuthUser(req.user.id);
    res.status(200).json({
        status: "OK",
        status_code: 200,
        message: 'Implement this endpoind',
        data: auth
    });
}

module.exports = { all }