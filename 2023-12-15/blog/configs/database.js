const mongoose = require('mongoose');

const connection = async (url) => {

    await mongoose.connect(url);
    console.log('Connection Okay');
}

module.exports = connection;