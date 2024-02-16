const home = async (req, res, next) => {

    res.status(200).json({
        status: "OK",
        status_code: 200,
        message: 'Home page',
        data: []
    });
};

module.exports = { home };