const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class AuthService {

    constructor(model) {

        this.user = model;
    }

    generateToken (id) {

        return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '1800s' });
    }

    async getAuthUser (id) {

        return await this.user.findById(id);
    }

    async register (data) {
        
        try {

            data.password= bcrypt.hashSync(data.password, parseInt(process.env.SALT));
            const user = new this.user(data);
            const newUser = await user.save();
            return {
                error: false,
                message: 'User create successfuly',
                data: newUser
            }
        } catch (error) {

            return {
                error: true,
                message: error.message,
                data: error
            }
        }
    }

    async login (email, password) {

        const user = await this.user.findOne({ email: email });
        if (user) {

            const verifyPassword = bcrypt.compareSync(password, user.password);
            if (verifyPassword) {
                return {
                    error: false,
                    token: this.generateToken(user._id)
                }
            }
        }

        return {
            error: true,
            message: 'Incorrect identifiants'
        }
    }
}

module.exports = new AuthService(User);
