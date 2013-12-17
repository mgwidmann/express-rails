/*
  This file loads config/environments/<NODE_ENV>.js and returns it. If you try
  to run the app with a NODE_ENV which is not in config/environments/ then
  an exception will be thrown indicating that it could not find that config
  file.
 */

var fs = require('fs');

module.exports = function(app){
  // FS is from process entry point
  if(fs.existsSync('./config/environments/' + app.get('env') + '.js')){
    // Require is relative to this file
    return require('./environments/' + app.get('env'));
  } else {
    throw 'Unable to find configuration for environment ' + app.get('env');
  }
};