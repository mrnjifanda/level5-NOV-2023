const express = require('express');
const app = express();

const appRouter = require('./routes/app.route');

app.use('/', appRouter);

app.listen(5000, () => {
    console.log("Application listening on url http://localhost:5000");
});

// expressjs.com
// mongoosejs.com
// nodemailler.com
// https://www.npmjs.com/package/multer