const home = (req, res) => {

    res.json({
        status_code: 200,
        status: 'OK',
        message: 'Basic API',
        data: {}
    });
}

const about = (req, res) => {

    res.json({
        status_code: 200,
        status: 'OK',
        message: 'About us',
        data: {}
    });  
}

module.exports = { home, about };