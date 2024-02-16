const appService = require('../services/app.service');

const home = (req, res) => {

    const users = appService.getUsers();
    res.json(users);
}

const contactUs = (req, res) => {

    res.send('Contact us');
}

module.exports = { home, contactUs };