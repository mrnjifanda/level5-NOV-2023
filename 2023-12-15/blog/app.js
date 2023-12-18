const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const database = require('./configs/database');
// const mongoose = require('mongoose');
// const schemaMongoose = mongoose.Schema;

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const blogRouter = require('./routes/blog');

database('mongodb://localhost:27017/level5');


// CRUD (C => CREATE, R => READ, U => UPADTE; D = Delete)
// User.createCollection();

// const newUser = new User({
//   name: 'John Doe',
//   age: 30,
//   city: 'Paris'
// });

// newUser.save().then(result => {
//   console.log('Okey');
// }).catch(err => {
//   console.log(err);
// });

// User.find().then(result => {
//   console.log("/******************************/");
//   console.log(result);
// });

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient('mongodb://localhost:27017/level5');

// client.connect((err, db) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Connexion à la base de données réussie !');
// });

// const db = client.db('my_database');
// const collection = db.collection('my_collection');

// const document = {
  // name: 'John Doe',
  // age: 30,
  // city: 'Paris'
// };

// collection.insertOne(document, (err, result) => {
//   if (err) {
//     throw err;
//   }

//   console.log(result);
//   console.log('Document inséré avec succès !');
// });



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
