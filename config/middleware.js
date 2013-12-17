/*
  Location of where all the app.use(...) function calls should be made. The intention
  of this file is to identify which middleware is used and what order it is executed
  in. When adding a new file to app/middleware/ be sure to include it in this file
  and call app.use(yourFunction).
 */

var express = require('express');

module.exports = function(app){
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);

  // development only
  if (app.get('env') === 'development') {
    app.use(express.errorHandler());
  }
};