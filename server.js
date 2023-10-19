var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Mount Middleware into request pipeline: app.use([starts with path], <middleware fn> [, <middleware fn>)])

app.use(logger('dev')); //Log inthe terminal the HTTP request info
app.use(express.json()); // processes data sent in the body of the request, if it's json
app.use(express.urlencoded({ extended: false })); //processes 'form' data sent in the body of the request. It will create a property on req.body for each input, select, or text response to the form.
app.use(cookieParser()); //add a cookie property for each cookie sent in the request 
app.use(express.static(path.join(__dirname, 'public'))); //If the request is static asset, returns the file



app.use(methodOverride('_method'))

app.use(function(req, res, next) {
  //console.log('Hello SEI!');
  res.locals.time = new Date().toLocaleTimeString(); // Add a time property to the res.locals object. The time property will then be accessible when rendering a view
  next();  // Pass the request to the next middleware
});

//return dynamic assets
app.use('/', indexRouter); 
app.use('/todos', todosRouter);


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
