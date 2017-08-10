var mongoose = require('mongoose');

//Set up default mongoose connection
var mongDB = 'mongodb://127.0.0.1/design-project';
mongoose.connect(mongDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Password = require('./schema/Password')

module.exports = {
  Password: mongoose.model('Password', Password)
}
