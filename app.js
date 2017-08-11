var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('express-cors');
var fs = require('fs')

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/build'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

var { Password } = require('./db')
Password.findOne({id: 'lzmhhh123'}, (err, one) => {
  if(one === null || err) {
    let innialPassword = new Password({string: '123456', id: 'lzmhhh123'})
    innialPassword.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
  else {
    one.string = '123456'
    one.save(err => {
      if(err) console.log(err);
    })
  }
})

app.use('/api', require('./routes/file'))
app.use('/api', require('./routes/password'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
