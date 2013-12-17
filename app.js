
var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');

app.config = require('./config/config')(app);

app.logger = require('./config/initializers/logger')(app, process.env.LEVEL || 'info');

require('./config/boot')(app);

var server = http.createServer(app);
app.set('server', server);
app.get('server').listen(app.config.port, function(){
  app.logger.info('Express server listening on port ' + app.config.port);
});

module.exports = app;
