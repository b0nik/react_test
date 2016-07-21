var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var Pages=require('./models/pages');
var admin = require('sriracha-admin');

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, './../public')));

app.use('/admin', admin());

app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send("page not found")
});

app.use(function(err,req,res,next){
  // error handlers

// development error handler
// will print stacktrace
  if (app.get('env') === 'development') {
    res.status(500).send('file not found');
    console.log(err.stack);

  }else{
    res.status(500).send('you have not right');
  }

});


module.exports = app;
