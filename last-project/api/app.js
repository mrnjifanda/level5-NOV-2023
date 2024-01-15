require('dotenv').config();
const createError = require('http-errors')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT;

const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');

mongoose.connect(process.env.DATABASE_URL).then(connection => {

    const app = express();
    
    app.set(express.static(path.join(__dirname, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/api/auth', authRoute);
    app.use('/api/product', productRoute);

    app.use((req, res, next) => {
        next(createError(404));
    });

    app.listen(port, () => {
        console.log('Run on http://localhost:' + port);
    });
}).catch(error => {

    console.log(error);
    throw new Error('Database error: ' + error.message);
});
