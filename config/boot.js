var fs = require('fs');
module.exports = function(app){
  if(fs.existsSync('./app')) {
    if(fs.existsSync('./app/controllers/')){
      // Load all controllers
      fs.readdirSync("./app/controllers/").forEach(function(file){
        app.logger.debug("Requiring app/controllers/" + file);
        var controller = require("../app/controllers/" + file);
        var controllerName = file.replace(/_controller|Controller|\.js/g, '');
        if(app.controllers === undefined){
          app.controllers = {};
        }
        if(typeof controller === 'function'){
          app.controllers[controllerName] = controller(app);
        } else {
          app.controllers[controllerName] = controller;
        }
      });
    }

    if(fs.existsSync('./app/models/')){
      // Load all models
      fs.readdirSync("./app/models/").forEach(function(file){
        app.logger.debug("Requiring app/models/" + file);
        var model = require("../app/models/" + file);
        var modelName = file.replace(/\.js/, '');
        if(app.models === undefined){
          app.models = {};
        }
        if(typeof model === 'function'){
          app.models[modelName] = model(app);
        } else {
          app.models[modelName] = model;
        }
      });
    }

    if(fs.existsSync('./app/middleware/')){
      // Load all middleware
      fs.readdirSync("./app/middleware/").forEach(function(file){
        app.logger.debug("Requiring app/middleware/" + file);
        var middleware = require("../app/middleware/" + file);
        var middlewareName = file.replace(/\.js/, '');
        if(app.middleware === undefined){
          app.middleware = {};
        }
        if(typeof middleware === 'function'){
          app.middleware[middlewareName] = middleware(app);
        } else {
          app.middleware[middlewareName] = middleware;
        }
      });
    }
  }

  require('../config/routes')(app);

  if(fs.existsSync('./config')){
    if(fs.existsSync('./config/initializers')){
      // Before the app starts but after its configured, load each initializer
      fs.readdirSync("./config/initializers/").forEach(function(file) {
        app.logger.debug("Requiring config/initializers/" + file);
        var initializer = require("../config/initializers/" + file);
        if (typeof initializer === 'function'){
          initializer(app);
        }
      });
    }
  }
};