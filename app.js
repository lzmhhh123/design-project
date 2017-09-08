var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('express-cors');
var fs = require('fs');
var compression = require('compression');
var helmet = require('helmet');

var app = express();
app.use(compression());
app.use(helmet());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger({
  format: ':remote-addr :method :url' ,
  stream: fs.createWriteStream('app.log', {'flags': 'w'})
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/build'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

var { Password, Label } = require('./db')
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

Label.findOne({id: '1'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'AWW', id: '1'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'AWW'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '2'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'Zai Mei Jian在梅间', id: '2'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'Zai Mei Jian在梅间'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '3'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'Mei Xiao Cong梅小聪', id: '3'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'Mei Xiao Cong梅小聪'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '4'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'muse de patisserie', id: '4'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'muse de patisserie'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '5'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'Lara Bohinc', id: '5'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'Lara Bohinc'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '6'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'Something Market 有眼', id: '6'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'Something Market 有眼'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '7'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'Bayr', id: '7'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'Bayr'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '8'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'Roundabout', id: '8'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'Roundabout'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

Label.findOne({id: '9'}, (err, one) => {
  if(one === null || err) {
    let innialLabel = new Label({string: 'Tabao maker festival 造物节', id: '9'})
    innialLabel.save(err => {
      if(err) {
        console.log(err)
      }
    })
  } else {
    one.string = 'Tabao maker festival 造物节'
    one.save(err => {
      if(err) {
        console.log(err);
      }
    })
  }
})

app.use('/api', require('./routes/file'))
app.use('/api', require('./routes/password'))
app.use('/api', require('./routes/label'))

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
