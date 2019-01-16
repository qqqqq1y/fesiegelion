var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./controller/index');
var usersRouter = require('./controller/users/index');
var articleRouter = require('./controller/article/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.all("*", function (req, res, next) {
//   if (req.url != "/favicon.ico") {
//     next();
//   };

//   next();

// })

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/article', articleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
