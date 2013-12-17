var fs = require('fs');

module.exports = function(app, level){
  var path = require('path');
  var winston = require('winston');
  var logdir = path.resolve(__dirname, '../../log/');
  var logfile = path.resolve(logdir, app.get('env') + '.log');
  if(!fs.existsSync(logdir)){
    fs.mkdir(logdir);
  }
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({level: level}),
      new (winston.transports.File)({ filename: logfile, level: level })
    ],
    levels: {
      verbose: 0,
      debug: 1,
      info: 2,
      warning: 3,
      error: 4,
      fatal: 5
    }
  });
  logger.level = level;
  logger.exitOnerror = false;
  return logger;
};